const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  image: String,
  description: String,
  price: Number,
  created: { type: Date, default: Date.now }
});

const Product = mongoose.model('Category', ProductSchema);

module.exports = { Product };