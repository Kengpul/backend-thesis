const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { checkAuthenticated } = require('../middleware');

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  // console.log(req.body)
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.json({ msg: 'Username or password is required'})
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log(salt);
      console.log(hashedPassword)
      const user = await User.create({
        username,
        password: hashedPassword
        // password
      });
      console.log(`User: ${user}`)
      // res.json(user)
      res.redirect('/');
    }
  } catch (err) {
    res.json(err)
  }
});

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/'
}));

router.get('/dashboard', checkAuthenticated, (req, res) => {
  // console.log(req.user)
  res.render('dashboard', {
    layout: false,
    user: req.user
  });
});

router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

module.exports = router;
