import chaiThings from 'chai-things';
const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('api/product', () => {
  const testProducts = () => db.Promise.map([
    {
      name: 'Light Saber',
      category: 'Toy',
      tag: ['Science'],
      imageUrl: 'default.jpg',
      price: 100,
      description: 'Weapon of the Jedi',
      quantity: 7
    },
    {
      name: 'Time Machine',
      category: 'Toy',
      tag: ['Technology', 'Engineering'],
      imageUrl: 'default.jpg',
      price: 999,
      description: 'Undue mistakes of the past',
      quantity: 1
    },
    {
      name: 'Space Ship',
      category: 'Toy',
      tag: ['Technology'],
      imageUrl: 'default.jpg',
      price: 10000,
      description: 'Space travel in style',
      quantity: 12
    },

  ], product => db.model('product').create(product));

  before('create a user, orders and items', () =>
    db.sync({force: true})
      .then(() => {
        return testProducts();
      })
  )

  after('Synchronize and clear database', () => db.sync({force: true}));

    it('GET all products', () =>
      request(app)
        .get('/api/products')
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.be.equal(3);
          expect(res.body).to.contain.a.thing.with('name', 'Light Saber')
          expect(res.body).to.contain.a.thing.with('name', 'Space Ship')
          expect(res.body).to.contain.a.thing.with('name', 'Time Machine')
        })
    )


    it('POST create a new product', () =>
      request(app)
        .post('/api/products')
        .send({
              name: 'Ray Gun',
              category: 'Toy',
              tag: ['Technology', 'Engineering', 'Science'],
              imageUrl: 'default.jpg',
              price: 69,
              description: 'Be Boba Fett...or at least shoot like him.',
              quantity: 99
            })
        .then(res => {
          const createdProduct = res.body;
          expect(createdProduct).to.have.property('name', 'Ray Gun')
        })
    )

    it('GET a single product', () =>
    request(app)
      .get('/api/products/4')
      .then(res => {
        expect(res.body).to.have.property('name', 'Ray Gun')
      })
    )

    it('PUT update a product', () =>
      request(app)
        .put('/api/products/4')
        .send({ quantity: 77 })
        .then(res => {
          const updatedProduct = res.body;
          expect(updatedProduct).to.have.property('quantity', 77)
        })
    )

    it('DELETE a product', () =>
      request(app)
        .delete('/api/products/4')
        .then(res => {
          return Product.findOne({ where: { name: 'Ray Gun' }})
            .then((item) => {
              const found = item ? true : false;
              expect(found).to.be.equal(false)
            })
        })
    )
  })
