const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Order = require('APP/db/models/order')
const User = require('APP/db/models/user')
const app = require('./start')

const alice = {
  username: 'alice@home.org',
  password: '123124124'
}

describe('api/orders', () => {
  let userId;
  let bulk;

  before('create a user', () =>
      db.didSync
      .then(() =>
        User.create({
          firstName: 'Reico',
          lastName: 'Lee',
          phoneNumber: '555.555.5555',
          email: alice.username,
          password: alice.password
        })
        .then(user => {
          userId = user.id
        })
      )
      .then(() => db.Promise.map([
        {status: 'shipped', user_id:userId},
        {status: 'ordered', user_id:userId},
        {status: 'completed', user_id:userId},
        {status: 'ordered', user_id:userId},
        {status: 'shipped', user_id: 2},
        {status: 'ordered', user_id: 2},
        {status: 'completed', user_id: 2},
        ], order => db.model('orders').create(order))
      )
      .then(function(orders){
        bulk = orders;
      })
    )

  describe('Authenticated Users', () => {
    const agent = request.agent(app)
      before('log in', () => agent
        .post('/api/auth/local/login')
        .send(alice))

    it('POST can create an order', () =>
       agent
       .post(`/api/orders/${6}`)
       .expect(201)
       .expect(function(res) {
          expect(res.body.status).to.equal('in cart');
          expect(res.body.price).to.equal(0);
          expect(res.body.user_id).to.equal(6);
       })
    )

    it('GET view past orders', () =>
       agent
        .get(`/api/orders/${userId}`)
        .expect(200)
        .expect(function(res) {
          expect(res.body.length).to.equal(4);
        })
    )

    it('DELETE can cancel an order', () => {
     return agent
        .delete(`/api/orders/9`)
        .expect(function(){
          User.findAll({
            where: {
              user_id: 5
            }
          })
          .then(function(orders){
            expect(orders.length).to.equal(2);
          })
        })
        // })
    })
  // describe('Admin Users', () => {

  })

})
