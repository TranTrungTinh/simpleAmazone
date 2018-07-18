const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  total: { type: Number, default: 0 },
  products: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 }
  }]
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = { Order };