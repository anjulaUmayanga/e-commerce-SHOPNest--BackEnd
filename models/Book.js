const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }, // Category (Books, Stationery)
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
