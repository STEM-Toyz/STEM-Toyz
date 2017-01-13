'use strict'

const db = require('APP/db');
const Order = db.model('orders');
const User = db.model('users');

const { forbidden, mustBeLoggedIn } = require('./auth.filters');

module.exports = require('express').Router()

//api/user
    .get('/:userId/orders', (req, res, next) =>
         Order.findAll({
          where: {
            user_id: req.params.userId
          }
         })
         .then(userOrders => res.json(userOrders))
         .catch(next))

    .post('/:userId/orders', (req, res, next) => {
          req.body.user_id = req.params.userId;
          return Order.create(req.body)
          .then(createdOrder => res.status(201).json(createdOrder))
          .catch(next)})
