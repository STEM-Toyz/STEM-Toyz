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
      )
  )

  describe('Unauthenticated Users', () => {
    const agent = request.agent(app)
      before('log in', () => agent
        .post('/api/auth/local/login')
        .send(alice))

    it('POST can create an order', () =>
       request(app)
       .post('/api/orders/'+ agent.id)
       .send({user_id: agent.id})
       .expect(201)
    )
  })

  // describe('Authenticated Users', () => {
  //   const agent = request.agent(app)
  //     before('log in', () => agent
  //       .post('/api/auth/local/login')
  //       .send(alice))
  //   it('GET view past orders', () =>
  //      agent
  //       .get('/api/orders/:userId')
  //       .expect(200)
  //   )

    // it('POST can create an order', () =>

    // )

    // it('DELETE can cancel an order', ()=>

    // )

  // })
})
