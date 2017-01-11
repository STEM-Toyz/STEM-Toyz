import db from 'APP/db';
const Review = db.model('reviews');
const User = db.model('users');
const Product = db.model('product');

import app from './start';

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
import supertest from 'supertest-as-promised';

describe('Review route tests', () => {

  let agent;

  before('wait for the db', () => db.didSync);
  before('Set up the users/reviews/products', () => {
    let products = [
      {name: "Super Awesome Test Toy", category: "Toy", price: 99.95, description: "Stuff"},
      {name: "Some Cool Game", category: "Video Game", price: 59.95, description: "Wow"},
      {name: "Sciencilon", category: "Board Game", price: 29.55, description: "Avalon with science"},
      {name: "Molecular Uno", category: "Card Game", price: 14.35, description: "Uno but with atoms"}
    ]
  })

})
