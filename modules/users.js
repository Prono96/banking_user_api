// const { string } = require('joi');
const mongoose = require('mongoose');
// const router = require('../routes/user')

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, rerquired: true},
  password: { type: String, required: true }
});

module.exports = mongoose.model('users', userSchema);