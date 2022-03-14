const User = require('../models/User');
const bcrypt = require('bcryptjs');

// GET /api/users
const getUsers = async (req, res) => {
  // console.log(req.query)
  const users = await User.find(req.query);
  res.status(200).json(users);
}

// POST /api/users
const addUser = async (req, res) => {
  const { firstName, lastName, idNum, section } = req.body;
  const user = await User.create({
    firstName,
    lastName,
    idNum,
    section
  });
  res.status(201).json({ msg: 'User Created!' })
}

// GET /api/users/:id
const getUser = async (req, res, next) => {
  // console.log(req.params)
  try {
    const user = await User.findById({ _id: req.params.id })
    if (!user) {
      res.status(400).json({ msg: `No user found with id of ${req.params.id}` });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

// PUT /api/users/:id
const updUser = async (req, res) => {
  // console.log(req.body)
  // const { firstName, lastName, idNum, section } = req.body;
  const { username, password, firstName, lastName, isBasic, isStudent, isTeacher, isAdmin } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // console.log(hashedPassword)
  const user = await User.findByIdAndUpdate({ _id: req.params.id }, {
    username,
    password: hashedPassword,
    firstName,
    lastName,
    isBasic,
    isStudent,
    isTeacher,
    isAdmin
  })
  res.status(201).json(user);
}

// DELETE /api/users/:id
const delUser = async (req, res) => {
  // console.log(req.params.id)
  const user = await User.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json(user);
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  updUser,
  delUser
}
