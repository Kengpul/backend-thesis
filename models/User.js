const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [ true, 'Username is required']
  },
  password: {
    type: String,
    required: [ true, 'Password is required']
  },
  firstName: {
    type: String,
    required: [ true, 'Firstname is required']
  },
  lastName: {
    type: String,
    required: [ true, 'Lastname is required']
  },
  // idNum: String,
  // section: String,
  isBasic: {
    type: Boolean,
    default: true
  },
  isStudent: {
    type: Boolean,
    default: false
  },
  isTeacher: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema);
