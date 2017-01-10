const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('./start')

const reico = {
  username: 'reico@secrets.org',
  password: '6789'
};

describe('/api/users', () => {
  let userId;
  before('create a user', () =>
    db.didSync
      .then(() =>
         User.create({
          firstName: 'Reico',
          lastName: 'Lee',
          phoneNumber: '555.555.5555',
          email: reico.username,
          password: reico.password
        })
      )
      .then(user => {
        userId = user.id;
      })
  )

  describe('when not logged in', () => {
    it('GET /:id fails 401 (Unauthorized)', () =>
      request(app)
        .get(`/api/users/1`)
        .expect(401)
    )

    it('POST creates a user', () =>
      request(app)
        .post('/api/users')
        .send({
          firstName: 'Reico',
          lastName: 'Lee',
          phoneNumber: '555.555.5555',
          email: 'beth@secrets.org',
          password: '12345'
        })
        .expect(201)
    )

    it('POST redirects to the user it just made', () =>
      request(app)
        .post('/api/users')
        .send({
          firstName: 'Reico',
          lastName: 'Lee',
          phoneNumber: '555.555.5555',
          email: 'eve@interloper.com',
          password: '23456',
        })
        .redirects(1)
        .then(res => expect(res.body).to.contain({
          email: 'eve@interloper.com'
        }))
    )
  })

  describe('when logged in', () => {
    const agent = request.agent(app);
    before('log in', () => agent
      .post('/api/auth/local/login')
      .send(reico));

    it('PUT /:id updates a user when logged in and returns the updated user', () =>

      agent
        .put(`/api/users/${userId}`)
        .send({phoneNumber: '666.666.6666'})
        .then(res => res.body)
        .then(updatedUser => {
          expect(updatedUser.phoneNumber).to.equal('666.666.6666');
        })
    );
  });
});
