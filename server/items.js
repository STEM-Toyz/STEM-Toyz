'use strict'

const db = require('APP/db')
const Item = db.model('items')
const router = require('express').Router()

module.exports = router;

router.param('order_id', (req, res, next, id) => {
	Item.findAll({ where: { order_id: id } })
	.then(items => {
		req.orderItems = items
		next();
	})
	.catch(next);
})

router.param('item_id', (req, res, next, id) => {
	Item.findById(id)
	.then(item => {
		req.item = item
		next();
	})
	.catch(next);
})

router.route('/:order_id/items')
	.get((req, res, next) => {
		res.send(req.orderItems)
	})
	.post((req, res, next) => {
		console.log('IN THE ITEM POST', req.body);
		Item.create(req.body)
		.then(newItem => {
			res.send(newItem);
		})
		.catch(next)
	})

router.route('/:order_id/items/:item_id')
	.put((req, res, next) => {
		req.item.update(req.body, {returning: true})
		.then(updatedItem => {
			res.send(updatedItem);
		})
		.catch(next)
	})
	.delete((req, res, next) => {
		req.item.destroy()
		.then(numOfDestroyedRows => {
			res.send(numOfDestroyedRows);
		})
	})
