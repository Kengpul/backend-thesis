const checkAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/');
  }
  return next();
}

const errorHandler = (err, req, res, next) => {
  console.log(err.stack)
  res.status(500).json({ msg: error.message })
}

module.exports = {
  checkAuthenticated,
  errorHandler
}
