const { Product } = require('../models/product.model');
const { MyError } = require('../helpers/my-error');
const { checkObjectId } = require('../helpers/checkObjectId');

class ProductService {

  static async getProductById(idUser) {
    return Product.find({ owner: idUser })
    .populate('owner', 'name')
    .populate('category', 'name')
    .sort({_id: -1});
  }

  static async addProduct(product) {
    const { title, price, description , owner, category } = product;
    checkObjectId(owner, category);
    const image = 'https://source.unsplash.com/collection/480x480';
    const pro = new Product({ title, image, price, description, owner, category });
    return pro.save();
  }
}

module.exports = { ProductService }
