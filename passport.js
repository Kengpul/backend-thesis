const User = require('./models/User');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
  passport.use(new LocalStrategy(async function authUser(username, password, done) {
    const user = await User.findOne({ username: username });
    // console.log(user)
    if (!user) {
      return done(null, false, { msg: 'Username is required' })
    } else {
      const res = await bcrypt.compare(password, user.password)
      if (!res) {
        return done(null, false, { msg: 'Password does not match' })
      }

      return done(null, user)
    }
  }))

  passport.serializeUser((user, done) => {
    done(null, user)
  });
  passport.deserializeUser((user, done) => {
    done(null, user)
  })
}
