'use strict'

const db = require('APP/db')
const Item = db.model('items')
const router = require('express').Router()

module.exports = router;

router.param('order_id', (req, res, next, id) => {
	// console.log('hi');
	const order_id = Number(id);
	Item.findAll({ where: { order_id: order_id } })
	.then(items => {
		// console.log(items);
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

router.route('/:order_id')
	.get((req, res, next) => {
		// console.log('get1**********')
		res.send(req.orderItems)
	})
	.post((req, res, next) => {
		Item.create(req.body)
		.then(newItem => {
			res.send(newItem);
		})
		.catch(next)
	})

router.route('/:order_id/item/:item_id')
	.put((req, res, next) => {
		req.item.update(req.body, {returning: true})
		.then(updatedItem => {
			res.send(updatedItem);
		})
		.catch(next)
	})
	.delete((req, res, next) => {
		req.item.destroy()
		.then(destryedItem => {
			res.send(destryedItem);
		})
	})
