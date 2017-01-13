'use strict'

const db = require('APP/db');
const Order = db.model('orders');
const User = db.model('users');

const { forbidden, mustBeLoggedIn } = require('./auth.filters');

module.exports = require('express').Router()


///api/orders
    .delete('/:orderId', (req, res, next) =>
        Order.findById(req.params.orderId)
         .then(userOrder => {
          return userOrder.destroy();
        })
         .then(function(){
          res.sendStatus(204);
         })
         .catch(next))

    .get('/', (req, res, next) => {
        return Order.findAll()
        .then(orders => res.status(200).json(orders))
        .catch(next)
      })
    .put('/:orderId', (req, res, next) => {
        // console.log("DAIJDAIDJ", req.params.orderId);
        // console.log("idafjsof", req.body);
         Order.findById(req.params.orderId)
          .then(foundOrder => {
            console.log('foundOrder', foundOrder)
            console.log("req.body", req.body)
            return foundOrder.update(req.body, {returning: true})
          })
          .then(updatedOrder => res.json(updatedOrder))
          .catch(next)
        })
