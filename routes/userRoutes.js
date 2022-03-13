const express = require('express');
const router = express.Router();
const { getUsers, getUser, addUser, updUser, delUser } = require('../controllers/userControllers');

router
  .route('/')
  .get(getUsers) // Get All Users
  .post(addUser) // Add a User

router
  .route('/:id')
  .get(getUser) // Get Single User
  .put(updUser) // Update a User
  .delete(delUser) // Delete a User

module.exports = router;
