'use strict';

const db = require('APP/db');
const Address = db.model('address');

const router = require('express').Router();

router.get('/:userId', (req, res, next) => {
  Address.findAll({where: {user_id: req.params.userId}})
  .then(addresses => res.send(addresses))
  .catch(console.error)
})

router.post('/', (req, res, next) => {
  Address.create(req.body)
  .then(address => res.send(address))
  .catch(console.error)
})

router.delete('/:addressId', (req, res, next) => {
  Address.destroy({where: {id: req.params.addressId}})
  .then(destroyed => {
    destroyed[0] > 0 ? res.sendStatus(200) : res.sendStatus(304);
  })
  .catch(console.error);
})

router.put('/:addressId', (req, res, next) => {
  Address.update(req.body, {where: {id: req.params.addressId}})
  .then(() => res.sendStatus(200))
  .catch(console.error);
})

module.exports = router;
