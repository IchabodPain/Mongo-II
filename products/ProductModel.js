const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  createOn: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;

// const date = new Date(1969, 4, 21)
