import db from 'APP/db';
const Review = db.model('reviews');
const User = db.model('users');
const Product = db.model('product');

const app = require('./start');

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
import supertest from 'supertest-as-promised';

describe('Review route', () => {

  let agent;
  before('clear the db', () => db.sync({force: true}));
  before('wait for the db', () => db.didSync);
  before('Set up the users/reviews/products', () => {
    agent = supertest(app);

    return Product.bulkCreate([
      {name: "Super Awesome Test Toy", category: "Toy", price: 99.95, description: "Stuff"},
      {name: "Some Cool Game", category: "Video Game", price: 59.95, description: "Wow"},
      {name: "Sciencilon", category: "Board Game", price: 29.55, description: "Avalon with science"},
      {name: "Molecular Uno", category: "Card Game", price: 14.35, description: "Uno but with atoms"}
    ])
    .then(() => {
      return User.bulkCreate([
        {firstName: "Ming", lastName: "Wong", password: "password", phoneNumber: "123.456.543"},
        {firstName: "Reico", lastName: "Lee", password: "hunter2", phoneNumber: "555.342.543"},
        {firstName: "Sean", lastName: "Martin", password: "password123", phoneNumber: "552.452.123"},
        {firstName: "Robbyn", lastName: "Tongue", password: "catsdogs", phoneNumber: "453.242.122"}
      ]);
    })
    .then(() => {
      return Review.bulkCreate([
        {title: "This is a review", stars: 3, content: "This item is mediocre", user_id: 1, product_id: 1},
        {title: "The second coming", stars: 5, content: "This item is heavenly", user_id: 3, product_id: 1},
        {title: "Great for your bowels!", stars: 2, content: "This item put me on the toilet for 3 days", user_id: 1, product_id: 2},
        {title: "Terrible", stars: 1, content: "Oof, what can I say? It came in one piece?", user_id: 2, product_id: 2},
        {title: "Stung by a bee", stars: 1, content: "Better than getting punched in the face, but not by much", user_id: 4, product_id: 3},
        {title: "Cool", stars: 3, content: "Not bad, but not great", user_id: 1, product_id: 3},
        {title: "Amazing!", stars: 5, content: "Pretty good", user_id: 3, product_id: 3},
        {title: "It went okay", stars: 4, content: "Great product! I took away one star because UPS took too long to deliver", user_id: 1, product_id: 4}
      ]);
    })
  })

  it('should be able to get reviews for a specific product', () => {
    return agent.get('/api/reviews/product/3')
      .then(res => {
        const review = res.body.filter(review => review.title === 'Cool')[0];
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(3);
        expect(review.stars).to.equal(3);
      })
  })

  it('should be able to get reviews from a specific user', () => {
    return agent.get('/api/reviews/user/1')
      .then(res => {
        const threeStarReviews = res.body.filter(review => review.stars === 3);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(4);
        expect(threeStarReviews.length).to.equal(2);
      })
  })

  it('should be able to add a new review', () => {
    const newReview = {title: 'New Review', stars: 3, content: 'Test Review', user_id: 1, product_id: 3};
    return agent.post('/api/reviews/')
      .send(newReview)
      .then(res => {
        const review = res.body;
        expect(review).to.be.an('object');
        expect(review.title).to.equal('New Review');
        expect(review.stars).to.equal(3);
        expect(review.content).to.equal('Test Review');
      })
  })

  it('should be able to modify a review', () => {
    let oldReview;
    return Review.findById(1)
      .then(review => { oldReview = review; })
      .then(() => agent.put('/api/reviews/1').send({stars: 4}))
      .then(() => Review.findById(1))
      .then(review => {
        expect(review).to.be.an('object');
        expect(review.stars).to.not.equal(oldReview.stars);
      });
  })

  it('should be able to delete a review', () => {
    let numInitialReviews;
    return Review.findAll()
      .then(results => {
        numInitialReviews = results.length;
        return agent.delete('/api/reviews/8')
      })
      .then(() => Review.findAll())
      .then(results => {
        expect(results.length).to.equal(numInitialReviews - 1);
      })
  })

})
