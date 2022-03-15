const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const bcrypt = require('bcryptjs');

module.exports = function(passport) {
  passport.use(new LocalStrategy(async (username, password, done) => {
    const user = await User.findOne({ username: username });

    if (!user) {
      return done (null, false, { message: 'Incorrect username or password' })
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      return done (null, false, { message: 'Incorrect username or password' })
    }

    return done(null, user)
  }));

  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    done(null, user)
  })
}
