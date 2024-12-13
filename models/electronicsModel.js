const mongoose = require('mongoose');

const electronicsSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  type: String,
});

const electronicsModel = mongoose.model('Electronics', electronicsSchema);

module.exports = electronicsModel;
