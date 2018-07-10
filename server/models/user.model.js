const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
  email: { type: String, unique: true, required: true, trim: true, lowercase: true },
  password: { type: String, required: true, trim: true },
  name: String,
  avatar: String,
  isSeller: { type: Boolean, default: false },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: String
  },
  created: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };