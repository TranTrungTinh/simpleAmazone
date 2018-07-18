const { Order } = require('../models/order.model');
const { MyError } = require('../helpers/my-error');
const { checkObjectId } = require('../helpers/checkObjectId');
    

class OrderService {

  static created(idUser, order) {
    checkObjectId(idUser);
    const newOrder = new Order({
      owner: idUser,
      total: order.total
    });
    order.products.forEach(e => {
      checkObjectId(e._id);
      newOrder.products.push({
        product: e._id,
        quantity: e.quantity
      });
    });
    return newOrder.save();
  }
}

module.exports = { OrderService }
