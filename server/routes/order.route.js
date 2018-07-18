const { Router } = require('express');
const { OrderService } = require('../services/order.services');
const { mustBeUser } = require('../middleware/mustBeUser.middleware');

const orderRouter = Router();

orderRouter.route('/payment')
.get((req, res) => {
})
.post(mustBeUser, (req, res) => {
  OrderService.created(req.idUser, req.body.order)
  .then(order => res.send({ success: true, order }))
  .catch(res.onError);
});



module.exports = { orderRouter };