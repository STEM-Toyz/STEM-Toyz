const mustBeLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('You must be logged in')
  }
  next()
}

const selfOnly = action => (req, res, next) => {
  if (+req.params.id !== +req.user.dataValues.id) {
    return res.status(403).send(`You can only ${action} yourself.`)
  }
  next()
}

const forbidden = message => (req, res, next) => {
  console.log('USER', req.user);
  if (req.user.dataValues.userType !== 'Admin') {
    return res.status(403).send(message)
  }
  next();
}

module.exports = {mustBeLoggedIn, selfOnly, forbidden}
