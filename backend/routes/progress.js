const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Progress = require('../models/Progress');

// Get current user's progress
router.get('/', auth, async (req, res) => {
  try {
    let progress = await Progress.findOne({ userId: req.user.userId });
    if (!progress) {
      // Create one if it doesn't exist (safety fallback)
      progress = new Progress({ userId: req.user.userId });
      await progress.save();
    }
    res.json({
      completedEssays: progress.completedEssays,
      studyNotes: progress.studyNotes
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// Update progress or study notes
router.post('/', auth, async (req, res) => {
  const { completedEssays, studyNotes } = req.body;

  try {
    let progress = await Progress.findOne({ userId: req.user.userId });
    if (!progress) {
      progress = new Progress({ userId: req.user.userId });
    }

    if (completedEssays !== undefined) {
      progress.completedEssays = completedEssays;
    }
    if (studyNotes !== undefined) {
      progress.studyNotes = studyNotes;
    }
    progress.updatedAt = Date.now();
    
    await progress.save();
    res.json({
      message: 'Progress updated successfully',
      completedEssays: progress.completedEssays,
      studyNotes: progress.studyNotes
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

module.exports = router;
