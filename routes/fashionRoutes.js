const express = require('express');
const router = express.Router();
const Fashion = require('../models/fashionModel');

// Get all fashion items
router.get('/', async (req, res) => {
    try {
        const items = await Fashion.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching fashion items', error });
    }
});

// Get items by category
router.get('/:category', async (req, res) => {
    const { category } = req.params;
    try {
        const items = await Fashion.find({ category });
        if (items.length === 0) {
            return res.status(404).json({ message: `No items found for category: ${category}` });
        }
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
});

// Add a new fashion item
router.post('/', async (req, res) => {
    const { name, description, price, image, category } = req.body;
    try {
        const newItem = new Fashion({ name, description, price, image, category });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: 'Error adding item', error });
    }
});

// Update a fashion item
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, image, category } = req.body;
    try {
        const updatedItem = await Fashion.findByIdAndUpdate(
            id,
            { name, description, price, image, category },
            { new: true }
        );
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: 'Error updating item', error });
    }
});

// Delete a fashion item
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Fashion.findByIdAndDelete(id);
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
});

module.exports = router;
