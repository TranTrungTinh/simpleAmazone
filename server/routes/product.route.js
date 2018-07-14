const { Router } = require('express');
const { ProductService } = require('../services/product.services');
const { mustBeUser } = require('../middleware/mustBeUser.middleware');

const productRouter = Router();

productRouter.route('/products')
.get(mustBeUser, (req, res) => {
  ProductService.getProductById(req.idUser)
  .then(products => res.send({ success: true, products }))
})



module.exports = { productRouter };