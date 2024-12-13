const express = require('express');
const router = express.Router();
const Grocery = require('../models/groceryModel');

// Get all grocery items
router.get('/', async (req, res) => {
    try {
        const items = await Grocery.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching grocery items', error });
    }
});

// Get items by category
router.get('/:category', async (req, res) => {
    const { category } = req.params;
    try {
        const items = await Grocery.find({ category });
        if (items.length === 0) {
            return res.status(404).json({ message: `No items found for category: ${category}` });
        }
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
});

// Add a new grocery item
router.post('/', async (req, res) => {
    const { name, description, price, image, category } = req.body;
    try {
        const newItem = new Grocery({ name, description, price, image, category });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: 'Error adding item', error });
    }
});

// Update a grocery item
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, image, category } = req.body;
    try {
        const updatedItem = await Grocery.findByIdAndUpdate(
            id,
            { name, description, price, image, category },
            { new: true }
        );
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: 'Error updating item', error });
    }
});

// Delete a grocery item
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Grocery.findByIdAndDelete(id);
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
});

module.exports = router;
