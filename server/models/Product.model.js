const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  image: String,
  description: String,
  price: String,
  created: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product };