const { Router } = require('express');
const { UserService } = require('../services/user.services');

const userRouter = Router();

userRouter.post('/signup', (req, res) => {
  const { email, plainPassword, name, isSeller } = req.body;
    UserService.signUp(email, plainPassword, name, isSeller)
    .then(user => res.send({ success: true, user }))
    .catch(res.onError);
});

userRouter.post('/signin', (req, res) => {
  const { email, plainPassword } = req.body;
  UserService.signIn(email, plainPassword)
  .then(user => res.send({ success: true, user }))
  .catch(res.onError);
});

module.exports = { userRouter };