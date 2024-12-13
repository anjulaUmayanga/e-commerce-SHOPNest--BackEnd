const mongoose = require('mongoose');

const fashionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }, // e.g., 'ladies', 'gents', 'kids'
});

module.exports = mongoose.model('Fashion', fashionSchema, 'fashions');
