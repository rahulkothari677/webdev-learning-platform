const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Progress = require('../models/Progress');

// Register User
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  if (username.length < 3 || password.length < 6) {
    return res.status(400).json({ message: 'Username must be at least 3 chars, password at least 6' });
  }

  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      password: hashedPassword
    });
    await user.save();

    // Create empty progress entry for user
    const progress = new Progress({ userId: user._id });
    await progress.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'fallback_secret', {
      expiresIn: '7d'
    });

    res.status(201).json({ token, username });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'fallback_secret', {
      expiresIn: '7d'
    });

    res.json({ token, username });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

module.exports = router;
