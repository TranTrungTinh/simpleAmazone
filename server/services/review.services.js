const { Review } = require('../models/review.model');
const { Product } = require('../models/product.model');
const { MyError } = require('../helpers/my-error');
const { checkObjectId } = require('../helpers/checkObjectId');

class ReviewService {
  static async createReview(idUser, idProduct, title, description, rating) {
    checkObjectId(idProduct, idUser);
    if (!title) throw new MyError('INVALID_TITLE', 400);
    const review = new Review({
      owner: idUser, product: idProduct, title, description, rating
    });
    const updateObj = { $push: { reviews: review._id } };
    const product = await Product.findByIdAndUpdate(idProduct, updateObj);
    if (!product) throw new MyError('CANNOT_FIND_STORY', 404);
    await review.save();
    return Review.populate(review, { path: 'owner', select: 'name avatar' });
  }
}

module.exports = { ReviewService }
