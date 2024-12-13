const express = require('express');
const router = express.Router();
const electronicsModel = require('../models/electronicsModel');

// Fetch laptops
router.get('/laptop', async (req, res) => {
    try {
        const laptops = await electronicsModel.find({ type: 'laptop' });
        if (laptops.length === 0) {
            return res.status(404).json({ message: "No items found for type: laptop" });
        }
        res.status(200).json(laptops);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items", error });
    }
});

// Fetch smartphones
router.get('/smartphone', async (req, res) => {
    try {
        const smartphones = await electronicsModel.find({ type: 'smartphone' });
        if (smartphones.length === 0) {
            return res.status(404).json({ message: "No items found for type: smartphone" });
        }
        res.status(200).json(smartphones);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items", error });
    }
});

// Fetch headphones
router.get('/headphone', async (req, res) => {
    try {
        const headphones = await electronicsModel.find({ type: 'headphone' });
        if (headphones.length === 0) {
            return res.status(404).json({ message: "No items found for type: headphone" });
        }
        res.status(200).json(headphones);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items", error });
    }
});

// Fetch other items
router.get('/other', async (req, res) => {
    try {
        const others = await electronicsModel.find({ type: 'other' });
        if (others.length === 0) {
            return res.status(404).json({ message: "No items found for type: other" });
        }
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items", error });
    }
});

module.exports = router;
