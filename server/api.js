'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()
const productRouter = require('./products');
api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/products', () => {
    console.log('hitting products route 1')
  },
  productRouter)
  .use('/orders', require('./orders'))
  .use('/addresses', require('./address'))
  .use('/reviews', require('./review'))
  .use('/items', require('./items'))
  .use('/testing', () =>{
    console.log('hitting testing route')
  })

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
