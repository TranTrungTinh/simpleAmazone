const { Router } = require('express');
const { ProductService } = require('../services/product.services');
const { mustBeUser } = require('../middleware/mustBeUser.middleware');

const productRouter = Router();

productRouter.route('/products')
.get(mustBeUser, (req, res) => {
  ProductService.getProductByOwner(req.idUser)
  .then(products => res.send({ success: true, products }))
  .catch(res.onError);
})
.post(mustBeUser, (req, res) => {
  ProductService.addProduct({...req.body, owner: req.idUser})
  .then(product => res.send({ success: true, product }))
  .catch(res.onError);
});

productRouter.route('/all/products')
.get((req, res) => {
  ProductService.getProducts(10)
  .then(products => res.send({ success: true, products }))
  .catch(res.onError);
})

productRouter.route('/products/:id')
.get((req, res) => {
  ProductService.getProductById(req.params.id)
  .then(product => res.send({ success: true, product }))
  .catch(res.onError);
})

productRouter.route('/search/products')
.get((req, res) => {
  ProductService.getProductsByTitle(req.query.query, req.query.page)
  .then(results => res.send({ success: true, results }))
  .catch(res.onError);
})

module.exports = { productRouter };