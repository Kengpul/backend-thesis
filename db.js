const mongoose = require('mongoose');

async function db() {
  try {
    await mongoose.connect('mongodb://localhost:27017/icctlms');
    console.log('Database connected!')
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = db;
