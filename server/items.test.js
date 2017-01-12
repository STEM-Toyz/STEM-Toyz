const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Order = require('APP/db/models/order')
const User = require('APP/db/models/user')
const Item = require('APP/db/models/item')
const app = require('./start')

describe('api/items', () => {
  // before('Synchronize and clear database', () => db.sync({force: true}));
  // after('Synchronize and clear database', () => db.sync({force: true}));
  const alice = {
    username: 'alice@home.org',
    password: '123124124'
  }
  let userId;
  let orderId1, orderId2, orderId3;
  let itemId1, itemId2, itemId3, itemId4, itemId5, itemId6;

  const testOrders = () => db.Promise.map([
    { status: 'in cart', user_id: userId},
    { status: 'ordered', user_id: userId},
    { status: 'shipped', user_id: userId}
  ], order => {
    db.model('orders').create(order);
  })

  const testItems = () => db.Promise.map([
    { quantity: 45, price: 170, order_id: 1},
    { quantity: 14, price: 210, order_id: 1},
    { quantity: 34, price: 105, order_id: 2},
    { quantity: 19, price: 310, order_id: 2},
    { quantity: 47, price: 140, order_id: 3},
    { quantity: 93, price: 101, order_id: 3}
  ], item => db.model('items').create(item));

  before('create a user, orders and items', () =>
    db.sync({force: true})
      .then(() =>
        User.create({
          firstName: 'Reico3',
          lastName: 'Lee',
          phoneNumber: '555.555.5555',
          email: alice.username,
          password: alice.password
        })
      )
      .then((user) => {
        userId = user.id
        return testOrders();
      })
      .then(([order1, order2, order3]) => {
        return testItems();
      })

    it('GET all items in an order', () =>
      request(app)
        .get('/api/items/1')
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0]).to.have.deep.property('quantity', 45)
          expect(res.body[0]).to.have.deep.property('price', 170)
          expect(res.body[0]).to.have.deep.property('order_id', 1)
          expect(res.body[1]).to.have.deep.property('quantity', 14)
          expect(res.body[1]).to.have.deep.property('price', 210)
          expect(res.body[1]).to.have.deep.property('order_id', 1)
        })
    )

    it('POST a new item with an order number', () =>
      request(app)
        .post('/api/items/2')
        .send({ quantity: 99, price: 66, order_id: 2})
        .then(res => {
          const createdItem = res.body;
          expect(createdItem).to.have.deep.property('quantity', 99)
          expect(createdItem).to.have.deep.property('price', 66)
          expect(createdItem).to.have.deep.property('order_id', 2)
        })
    )
  })
})
