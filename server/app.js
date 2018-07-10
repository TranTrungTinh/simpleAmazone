const express =  require('express');
const parser = require('body-parser');
const cors = require('cors');

const { userRouter } = require('./routes/user.route');

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

module.exports = { app };