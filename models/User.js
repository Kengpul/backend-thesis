const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  firstname: {
    type: String,
    required: [true, 'Name is required']
  }
});

module.exports = mongoose.model('User', userSchema);
