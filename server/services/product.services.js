const { Product } = require('../models/product.model');
const { MyError } = require('../helpers/my-error');
const { checkObjectId } = require('../helpers/checkObjectId');
const { productPerPage } = require('../helpers/config');

class ProductService {

  static getProducts(limit) {
    return Product.find({})
    .populate('owner', 'name')
    .populate('category', 'name')
    .populate('reviews')
    .sort({ created: 1 })
    .limit(limit);
  }

  static async getProductsByTitle(title, page) {
    const option = {
      populate: {path: 'category reviews', select: 'name rating'},
      lean: false,
      offset: (page - 1) * productPerPage, 
      limit: productPerPage
    };
    const results = await Product.paginate({ title: { $regex: title, $options: 'i' } }, option);
    return {
      products: results.docs,
      categoryName: results.docs[0].category.name,
      totalProduct: results.total,
      limit: results.limit,
      pages: Math.ceil(results.total / productPerPage)
    };
  }

  static getProductByOwner(_id) {
    checkObjectId(_id);
    return Product.find({ owner: _id })
    .populate('owner', 'name')
    .populate('category', 'name')
    .sort({_id: -1});
  }

  static getProductById(_id) {
    checkObjectId(_id);
    return Product.findById({ _id })
    .populate('owner', 'name')
    .populate('category', 'name')
    .deepPopulate('reviews.owner');
  }

  static async addProduct(product) {
    const { title, price, description , owner, category } = product;
    checkObjectId(owner, category);
    const image = 'https://source.unsplash.com/collection/480x480';
    const pro = new Product({ title, image, price, description, owner, category });
    return pro.save();
  }

  static async getProductByCategory(category, page) {
    const option = {
      populate: {path: 'category reviews', select: 'name rating'},
      lean: false,
      offset: (page - 1) * productPerPage, 
      limit: productPerPage
    };
    const results = await Product.paginate({ category }, option);
    return {
      products: results.docs,
      categoryName: results.docs[0].category.name,
      totalProduct: results.total,
      limit: results.limit,
      pages: Math.ceil(results.total / productPerPage)
    };
  }
}

module.exports = { ProductService }
