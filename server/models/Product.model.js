const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const { Schema } = mongoose;

const ProductSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  title: String,
  image: String,
  description: String,
  price: String,
  created: { type: Date, default: Date.now }
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

ProductSchema.virtual('averageRating').get(function() {
  if(this.reviews.length === 0) return 0;
  const total = this.reviews.map(review => review.rating).reduce((a, b) => a + b);
  return total / this.reviews.length;
});

const deepPopulateOption = {
  populate: {
    'reviews.owner': {
      select: 'name avatar',
    }
  }
};
ProductSchema.plugin(mongoosePaginate);
ProductSchema.plugin(deepPopulate, deepPopulateOption);

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product };