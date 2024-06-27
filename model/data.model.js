const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  price: { type: Number, required: true },
  sale_price: { type: Number }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
