const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }, // e.g., 'fruits', 'vegetables', 'dairy'
});

module.exports = mongoose.model('Grocery', grocerySchema, 'grocery');
