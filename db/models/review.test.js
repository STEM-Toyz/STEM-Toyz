'use strict'

const db = require('APP/db');
const Review = require('./review');
const {expect} = require('chai');

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';

chai.use(chaiProperties);
chai.use(chaiThings);

describe('Review', () => {
  before('wait for the db', () => db.didSync);

  beforeEach(() => {
    return Review.bulkCreate([
      {title: "Awesome!", stars: 5, content: "A review", product_id: 1},
      {title: "Pretty good!", stars: 4, content: "A review", product_id: 1},
      {title: "Just okay!", stars: 3, content: "A review", product_id: 1},
      {title: "Meh!", stars: 2, content: "A review", product_id: 1},
      {title: "Terrible!", stars: 1, content: "A review", product_id: 1}
    ]);
  })

  describe('should get average review scores', () => {
    it('should find all reviews of a product and then produces the average score from them', () => {
      return Review.getAverageScore(1).then((averageScore) => {expect(averageScore).to.equal(3)});
    })
  })

  describe('valid star ranges', () => {
    it('should fail when stars is not a number', () => {
      const review = Review.build({title: "Title", stars: 'a', content:"A review", productId: 3});
      return review
            .validate()
            .then(err => {
              expect(err).to.be.an('object');
              expect(err.errors).to.contain.a.thing.with.properties({type: 'Validation error', message: 'Validation isInt failed'});
            })
    });

    it('should fail when stars is not in the range of 1 to 5', () => {
      const review = Review.build({title: "Title", stars: 6, content:"A review", productId: 3});
      return review
             .validate()
             .then(err => {
               expect(err).to.be.an('object');
               expect(err.errors).to.contain.a.thing.with.properties({type: 'Validation error', message: 'Validation isIn failed'});
             })
    })
  });
})
