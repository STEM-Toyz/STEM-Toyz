const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Order = require('APP/db/models/order')
const Item = require('APP/db/models/item')
const User = require('APP/db/models/user')
const app = require('./start')


describe('api/orders', () => {
  let userId1;
  let userId2;

  const alice = {
  username: 'alice@home.org',
  password: '123124124'
  }

  const amy = {
  username: 'alice@amy.org',
  password: '12312312324'
  }

   const testOrders = () => db.Promise.map([
    { status: 'in cart', user_id: userId1},
    { status: 'ordered', user_id: userId1},
    { status: 'shipped', user_id: userId2}
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

  before('create a user', () =>
      db.sync({force:true})
      .then(() =>
        User.create({
          firstName: 'Reico',
          lastName: 'Lee',
          phoneNumber: '555.555.5555',
          email: alice.username,
          password: alice.password
        })
        .then(user1=>{
          userId1 = user1.id
          return userId1;
        })
        .then(()=>
        User.create({firstName: 'Amy',
          lastName: 'Lee',
          phoneNumber: '555.555.4657',
          email: amy.username,
          password: amy.password
        }))
        .then((user2) => {
          userId2= user2.id
          return testOrders();
        })
      )
      .then(() => testItems
      )
    )
  after('Synchronize and clear database', () => db.sync({force: true}));
  describe('/api/user/:userId/orders', () => {
    // const agent = request.agent(app)
    //   before('log in', () => agent
    //     .post('/api/auth/local/login')
    //     .send(alice))

    it('POST can create an order', () =>
       request(app)
       .post(`/api/user/1/orders`)
       .send({})
       .expect(201)
       .expect(function(res) {
          expect(res.body.status).to.equal('in cart');
          expect(res.body.user_id).to.equal(1);
       })
    )

    it('GET view past orders', () =>
       request(app)
        .get(`/api/user/1/orders`)
        .expect(200)
        .expect(function(res) {
          expect(res.body.length).to.equal(3);
        })
    )
  // describe('Admin Users', () => {

  })
  describe('/api/orders/:orderId', () => {
    it('GET can view all orders by all users', () => {
      return request(app)
      .get('/api/orders')
      .expect(200)
      .expect(function(res){
        expect(res.body.length).to.equal(4);
      })

    })




    it('DELETE can cancel an order', () => {
     return request(app)
        .delete(`/api/orders/2`)
        .then(function(){
          return Order.findAll({
            where: {
              user_id: 1
            }
          })
        })
        .then(function(orders){
            expect(orders.length).to.equal(2);
        })
        // })
    })

    it('PUT can update an order', () => {
      return request(app)
      .put('/api/orders/1')
      .send({status: 'in cart'})
      .expect(200)
      .expect(function(res){
        expect(res.body.status).to.equal('in cart');
      })

    })
  })

})
