const { hash, compare } = require('bcrypt');
const faker = require('faker');
const { sign } = require('../helpers/jwt');
const { User } = require('../models/user.model');
const { MyError } = require('../helpers/my-error');
const { checkObjectId } = require('../helpers/checkObjectId');

class UserService {
  static async signUp(email, plainPassword, name, isSeller) {
    if (!plainPassword) throw new MyError('INVALID_PASSWORD', 400);
    const password = await hash(plainPassword, 8);
    const avatar = faker.internet.avatar();
    try {
        const user = new User({ name, email, password, isSeller, avatar });
        await user.save();
        const userInfo = user.toObject();
        delete userInfo.password;
        return userInfo;
    } catch (error) {
        if (error.name === 'ValidationError') throw new MyError('INVALID_USER_INFO', 400);
        throw new MyError('EMAIL_EXISTED', 400);
    }
  }

  static async signIn(email, plainPassword) {
    const user = await User.findOne({ email });
    if (!user) throw new MyError('INVALID_USER_INFO', 400);
    const same = await compare(plainPassword, user.password);
    if (!same) throw new MyError('INVALID_USER_INFO', 400);
    const userInfo = user.toObject();
    userInfo.address = user.address.toObject();
    delete userInfo.password;
    userInfo.token = await sign({ _id: user._id });
    return userInfo;
  }

  static async check(idUser) {
    const user = await User.findById(idUser);
    if (!user) throw new MyError('CANNOT_FIND_USER', 404);
    const userInfo = user.toObject();
    userInfo.address = user.address.toObject();
    delete userInfo.password;
    userInfo.token = await sign({ _id: user._id });
    return userInfo;      
  }

  static async updateUserInfo(idUser, profile) {
    checkObjectId(idUser);
    if(!profile.password) delete profile.password;
    else profile.password = await hash(profile.password, 8);
    const user = await User.findByIdAndUpdate(idUser, profile, { new: true });
    if(!user) throw new MyError('CANNOT_FIND_USER', 404);
    const userInfo = user.toObject();
    userInfo.address = user.address.toObject();
    delete userInfo.password;
    return userInfo;
  }

  static async getUserAddress(idUser) {
    const user = await User.findById(idUser);
    if (!user) throw new MyError('CANNOT_FIND_USER', 404);
    return user.address.toObject();
  }

  static async updateUserAddress(idUser, profile) {
    checkObjectId(idUser);
    const user = await User.findByIdAndUpdate(idUser, { address: profile }, { new: true });
    if(!user) throw new MyError('CANNOT_FIND_USER', 404);
    const userInfo = user.toObject();
    delete userInfo.password;
    return userInfo;
  }

}

module.exports = { UserService }
