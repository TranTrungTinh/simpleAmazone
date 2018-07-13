const { Router } = require('express');
const { CatService } = require('../services/category.services');

const catRouter = Router();

catRouter.route('/categories')
.get((req, res) => {
  CatService.getAll()
  .then(categories => res.send({ success: true, categories }))
})
.post((req, res) => {
  CatService.created(req.body.name)
  .then(category => res.send({ success: true, category }))
  .catch(res.onError);
});



module.exports = { catRouter };