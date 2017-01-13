'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/user', require('./userOrder')) // this is the order route, needs to start with /user for RESTapi
  .use('/products', require('./products'))
  .use('/orders', require('./orders')) // this is the order route, needs to start with /user for RESTapi
  .use('/order', require('./items')) // this is the items route, it needs to start with /order
  .use('/addresses', require('./address'))
  .use('/reviews', require('./review'))

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
