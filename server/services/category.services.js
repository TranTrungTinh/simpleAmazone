const faker = require('faker');
const { Category } = require('../models/category.model');
const { MyError } = require('../helpers/my-error');

class CatService {

  static async getAll() {
    return Category.find({}).sort({ _id: -1 });
  }

  static created(name) {
    const category = new Category({ name: name.toLowerCase() });
    return category.save();
  }
}

module.exports = { CatService }
