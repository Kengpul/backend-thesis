const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const { checkAuthenticated } = require('../middleware');

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/'
}));

// router.post('/', async (req, res) => {
//   const { username, password } = req.body;
//   // console.log(typeof req.body.password);
//   const user = await User.findOne({ username})
//   console.log(user)
//   // console.log(typeof user.password)
//   // res.json(user)
//   if (user && user.password === password) {
//     // console.log('no user found')
//     res.redirect('/dashboard');
//   } else {
//     // console.log('found')
//     res.redirect('/');
//   }
// })

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  // console.log(req.body);
  const { username, password, firstname } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    password: hashedPassword,
    firstname
  });
  // res.status(201).json(user);
  res.redirect('/');
});

router.get('/dashboard', checkAuthenticated, (req, res) => { //, checkAuthenticated
  // console.log(`Dashboard: ${req.isAuthenticated()}`)
  // console.log(req.user)
  res.render('dashboard');
})

router.post('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
})

router.get('/settings', checkAuthenticated, (req, res) => { //, checkAuthenticated
  // console.log(`Settings: ${req.isAuthenticated()}`)
  // console.log(req.user)
  res.render('settings', {
    user: req.user
  });
})

module.exports = router;
