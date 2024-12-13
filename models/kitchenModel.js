const mongoose = require('mongoose');

const kitchenSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }, // e.g., 'utensils', 'appliances', 'storage'
});

module.exports = mongoose.model('Kitchen', kitchenSchema, 'kitchen');
