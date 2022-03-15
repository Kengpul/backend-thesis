const express = require('express');
const { engine } = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
require('./passport')(passport)
const db = require('./db');
db();

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/index'));

const PORT = 1000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
