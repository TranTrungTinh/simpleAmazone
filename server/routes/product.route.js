const { Router } = require('express');
const { ProductService } = require('../services/product.services');
const { mustBeUser } = require('../middleware/mustBeUser.middleware');

const productRouter = Router();

productRouter.route('/products')
.get(mustBeUser, (req, res) => {
  ProductService.getProductById(req.idUser)
  .then(products => res.send({ success: true, products }))
})
.post(mustBeUser, (req, res) => {
  ProductService.addProduct({...req.body, owner: req.idUser})
  .then(product => res.send({ success: true, product }))
  .catch(res.onError);
});


module.exports = { productRouter };