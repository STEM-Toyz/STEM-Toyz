'use strict'

const db = require('APP/db')
const Product = db.model('product')
const router = require('express').Router()

module.exports = router;

router.use('/', (req, res, next) => {
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
	.get((req, res, next) => {
		res.send(req.product);
	})
  .put((req, res, next) => {
    req.product.update(req.body, {returning: true})
      .then(updatedProduct => {
        res.send(updatedProduct);
      })
  })
  .delete((req, res, next) => {
    req.product.destroy()
      .then(destroyed => {
        res.send(destroyed);
      })
  })
