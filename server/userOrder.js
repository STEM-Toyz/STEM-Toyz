'use strict'

const db = require('APP/db');
const Order = db.model('orders');
const User = db.model('users');
const Item = db.model('items');
const Product = db.model('product');

const { forbidden, mustBeLoggedIn } = require('./auth.filters');

module.exports = require('express').Router()

//api/user
    .get('/:userId/orders', (req, res, next) =>
         Order.findAll({
          where: {
            user_id: req.params.userId
          },
          include: [{model: Item, include: [{model: Product}]}]
         })
         .then(userOrders => res.json(userOrders))
         .catch(next))

    .get('/:userId/orders/inCart', (req, res, next) =>
         Order.findOne({
          where: {
            user_id: req.params.userId,
            status: "in cart"
          },
          include: [
            {model: Item, include :[
              {model: Product}
            ]}
          ]
         })
         .then(inCartOrder => res.json(inCartOrder))
         .catch(next))

    .get('/:userId/orders/history', (req, res, next) =>
     Order.findAll({
      where: {
        user_id: req.params.userId,
        status: {$ne: 'in cart'}
      },
      include: [
        {model: Item, include :[
          {model: Product}
        ]}
      ]
     })
     .then(inCartOrder => res.json(inCartOrder))
     .catch(next))

    .post('/:userId/orders', (req, res, next) => {
          req.body.user_id = req.params.userId;
          console.log('IN THE POST ROUTE',req.params.userId);
          return Order.create(req.body)
          .then(createdOrder => res.status(201).json(createdOrder))
          .catch(next)})
