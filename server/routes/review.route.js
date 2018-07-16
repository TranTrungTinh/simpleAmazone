const { Router } = require('express');
const { ReviewService } = require('../services/review.services');
const { mustBeUser } = require('../middleware/mustBeUser.middleware');

const reviewRouter = Router();

reviewRouter.route('/reviews')
.get(mustBeUser, (req, res) => {
  
})
.post(mustBeUser, (req, res) => {
  const { title, idProduct, description, rating } = req.body;
  ReviewService.createReview(
    req.idUser, idProduct, title, description, rating
  )
  .then(review => res.send({ success: true, review }))
  .catch(res.onError);
});



module.exports = { reviewRouter };