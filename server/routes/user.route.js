const { Router } = require('express');
const { UserService } = require('../services/user.services');
const { mustBeUser } = require('../middleware/mustBeUser.middleware');

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

userRouter.route('/profile')
.get(mustBeUser, (req, res) => {
  UserService.check(req.idUser)
  .then(user => res.send({ success: true, user }))
  .catch(res.onError);
})
.post(mustBeUser, (req, res) => {
  UserService.updateUserInfo(req.idUser, req.body.profile)
  .then(user => res.send({ success: true, user }))
  .catch(res.onError);
})

userRouter.route('/address')
.get(mustBeUser, (req, res) => {
  UserService.getUserAddress(req.idUser)
  .then(address => res.send({ success: true, address }))
  .catch(res.onError);
})
.post(mustBeUser, (req, res) => {
  UserService.updateUserAddress(req.idUser, req.body.profile)
  .then(user => res.send({ success: true, user }))
  .catch(res.onError);
})



module.exports = { userRouter };