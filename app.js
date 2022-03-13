const express = require('express');
const path = require('path');
const { errorHandler } = require('./middleware');
const { engine } = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
require('./passport')(passport);
const db = require('./db');
db();

const app = express();

app.set('json spaces', 2);
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/index'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/sections', require('./routes/sectionRoutes'));

app.use(errorHandler);

const PORT = 1000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
