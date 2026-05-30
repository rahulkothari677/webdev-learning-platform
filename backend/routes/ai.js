const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');

// Rate limiting middleware to prevent API key credits abuse
const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // Limit each IP to 30 requests per windowMs
  message: { message: 'Too many requests to the AI Tutor. Please try again after 15 minutes.' }
});

router.post('/chat', aiLimiter, async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: 'Prompt is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ message: 'Gemini API key is not configured on the server. Please contact the administrator.' });
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ message: 'Gemini API Error: ' + errorText });
    }

    const data = await response.json();
    const replyText = data.candidates[0].content.parts[0].text;
    res.json({ reply: replyText });
  } catch (error) {
    res.status(500).json({ message: 'Server gateway error: ' + error.message });
  }
});

module.exports = router;
