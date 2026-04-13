const express = require('express');
const router = express.Router();
const History = require('../models/History');

// routes/historyRoutes.js
router.post('/', async (req, res) => {
  const { expression, result } = req.body;
  if (!expression || !result) {
    return res.status(400).json({ error: "Expression and result required" });
  }
  const newHistory = new History({ expression, result });
  await newHistory.save();
  res.json(newHistory);
});

// Save calculation
router.post('/', async (req, res) => {
    const { expression, result } = req.body;
    const newHistory = new History({ expression, result });
    await newHistory.save();
    res.json(newHistory);
});

// Get all history
router.get('/', async (req, res) => {
    const history = await History.find().sort({ createdAt: -1 });
    res.json(history);
});

// Clear history
router.delete('/', async (req, res) => {
    await History.deleteMany({});
    res.json({ message: "History cleared" });
});

module.exports = router;
