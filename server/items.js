'use strict'

const db = require('APP/db')
const Item = db.model('items')
const Order = db.model('orders')
const Product = db.model('product')
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
		Item.findAll({
			where: {
				product_id: req.body.product.id,
				order_id: req.params.order_id
			}
		})
		.then(item => {
			if (item.length) {
				item[0].increment('quantity', {by: 1});
				res.send(item);
			} else {
				const price = req.body.product.price;
				Item.create({price: price})
				.then(newItem => {
					Order.findById(req.body.id)
					.then(order => {
						newItem.setOrder(order);
						Product.findById(req.body.product.id)
						.then(product => {
							newItem.setProduct(product);
							res.send(newItem);
						});
					});
				});
			}
		})
		.catch(next);
	});

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
