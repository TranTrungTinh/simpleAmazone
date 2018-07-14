const { Product } = require('../models/product.model');
const { MyError } = require('../helpers/my-error');

class ProductService {

  static async getProductById(idUser) {
    return Product.find({ owner: idUser })
    .populate('owner', 'name')
    .populate('category', 'name')
    .limit(10);
  }
}

module.exports = { ProductService }
