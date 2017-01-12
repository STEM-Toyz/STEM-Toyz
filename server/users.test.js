const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('./start')

const reico = {
  username: 'reico@secrets.org',
  password: '6789'
};

const obama = {
  username: 'BarryO@whitehouse.gov',
  password: 'imthepres'
};

describe('/api/users', () => {
  const ids = {};
  before('create a user', () =>
    db.didSync
      .then(() =>
        db.Promise.map([
          {
            firstName: 'Reico',
            lastName: 'Lee',
            phoneNumber: '555.555.5555',
            email: reico.username,
            password: reico.password,
            userType: 'Authenticated'
          },
          {
             firstName: 'Barack',
             lastName: 'Obama',
             phoneNumber: '555.555.5555',
             email: obama.username,
             password: obama.password,
             userType: 'Admin'
           }
        ], user => db.model('users').create(user))
      )
      .then(users => {
        return users.reduce((accum, user) => {
          accum[user.dataValues.userType] = user.dataValues.id;
          return accum;
        }, ids);
      })
  );

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

  describe('when authenticated logged in', () => {
    const agent = request.agent(app);
    before('log in', () =>
      agent
      .post('/api/auth/local/login')
      .send(reico)
    );

    it('gets a users data', () => {
      return agent
        .get(`/api/users/${ids.Authenticated}`)
        .then(res => res.body)
        .then(userData =>
          expect(userData.firstName).to.equal('Reico')
        );
    });

    it('PUT /:id updates a user when logged in and returns the updated user', () => {
      return agent
        .put(`/api/users/${ids.Authenticated}`)
        .send({phoneNumber: '666.666.6666'})
        .then(res => res.body)
        .then(updatedUser => {
          expect(updatedUser.phoneNumber).to.equal('666.666.6666');
        });
    });

  });

  xdescribe('when admin logged in', () => {
    const agent = request.agent(app);
    before('log in', () =>
      agent
      .post('/api/auth/local/login')
      .send(obama)
    );

    it('DELETE /:id deletes a user when logged', () => {
      return agent
      .delete(`/api/users/${ids.Authenticated}`)
      .then(res => {
        return expect(res.status).to.equal(200);
      })
      .then(() => {
        return User.findById(ids.Authenticated);
      })
      .then(result =>
        expect(result).to.equal(null)
      )
    });
  })
});
