'use strict'

const db = require('APP/db')
const Product = db.model('product')
const router = require('express').Router()

module.exports = router;

router.use('/', (req, res, next) => {
	console.log('hit products')
	next()
})

router.param('product_id', (req, res, next, id) => {
	Product.findById(id)
	.then(product => {
		req.product = product;
    next();
	})
	.catch(next);
})

router.route('/')
  .get((req, res, next) => {
		console.log('hiting get route on products')
    Product.findAll()
      .then(products => {
        res.send(products);
      })
  })
  .post((req, res, next) => {
    Product.create(req.body)
      .then(createdProduct => {
        res.send(createdProduct);
      })
  })

router.route('/:product_id')
  .put((req, res, next) => {
    req.product.update(req.body, {returning: true})
      .then(updatedProduct => {
        res.send(updatedProduct);
      })
  })
  .delete((req, res, next) => {
    req.product.destroy()
      .then(destroyed => {
        console.log(destroyed)
        res.send(destroyed);
      })
  })
