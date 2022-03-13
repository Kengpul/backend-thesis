const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: undefined
  }]
});

module.exports = mongoose.model('Section', sectionSchema);
