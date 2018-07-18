const express =  require('express');
const parser = require('body-parser');
const cors = require('cors');

const { userRouter } = require('./routes/user.route');
const { catRouter } = require('./routes/category.route');
const { productRouter } = require('./routes/product.route');
const { reviewRouter } = require('./routes/review.route');
const { orderRouter } = require('./routes/order.route');

const app = express();

app.use(cors());
app.use(parser.json());

app.use((req, res, next) => {
  res.onError = function(error) {
      const body = { success: false, message: error.message };
      if (!error.statusCode) console.log(error);
      res.status(error.statusCode || 500).send(body);
  };
  next();
});

app.use('/user', userRouter);
app.use('/api', catRouter);
app.use('/api', productRouter);
app.use('/api', reviewRouter);
app.use('/api', orderRouter);

module.exports = { app };