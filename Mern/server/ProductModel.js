const mongoose = require("mongoose");
const { type } = require("os");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
