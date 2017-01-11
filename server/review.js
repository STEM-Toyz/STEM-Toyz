const db = require('APP/db');
const Review = db.model('reviews');

const router = require('express').Router();

router.get('/product/:productId', (req, res, next) => {
  Review.findALl({where: {product_id: req.params.productId}})
  .then(reviews => res.send(reviews))
  .catch(console.error);
})

router.get('/user/:userId', (req, res, next) => {
  Review.findAll({where: {user_id: req.params.userId}})
  .then(reviews => res.send(reviews))
  .catch(console.error);
})

router.post('/', (req, res, next) => {
  Review.create(req.body)
  .then(review => res.send(review))
  .catch(console.error);
})

router.delete('/:reviewId', (req, res, next) => {
  Review.destroy({where: {id: req.params.reviewId}})
  .then(() => res.sendStatus(200))
  .catch(console.error);
})

router.put('/:reviewId', (req,res, next) => {
  Review.update(req.body, {where: {id: req.params.reviewId}})
  .then(updatedCount => {
    res.sendStatus(updatedCount[0] > 0 ? 200 : 304);
  })
  .catch(console.error);
})

module.exports = router;
