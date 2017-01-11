import db from 'APP/db';
const Address = db.model('address');
const User = db.model('users');
import app from './start';

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
import supertest from 'supertest-as-promised';
import sinon from 'sinon';

describe('Address route tests', () => {
  let agent;

  before('wait for the db', () => db.didSync);
  before('Set up users and addresses', () => {
    agent = supertest(app);

    let addresses = [
      {street: "333 92nd St", city: "Flushing", state: "NY", country: "USA",zip: "11342", user_id: 1},
      {street: "1241 12th St", city: "New York", state: "NY", country: "USA",zip: "10562", user_id: 3},
      {street: "555 8th St", city: "Bayside", state: "NY", country: "USA",zip: "11134", user_id: 1},
      {street: "462 7th St", city: "White Stone", state: "NY", country: "USA",zip: "15521", user_id: 4},
      {street: "2452 45th St", city: "College Point", state: "NY", country: "USA",zip: "38471", user_id: 5}
    ]

    let users = [
      {firstName: "Ming", lastName: "Wong", password: "adjflajdsf", phoneNumber: '121.342.554'},
      {firstName: "Reico", lastName: "Lee", password: "adjfjklasf", phoneNumber: '238.434.245'},
      {firstName: "Sean", lastName: "Martin", password: "adjfqhkjdf", phoneNumber: '138.924.384'},
      {firstName: "Robbyn", lastName: "Tongue", password: "adjfnxnvbsf", phoneNumber: '124,692.124'},
      {firstName: "MingT", lastName: "Wong", password: "adjflsheenxdsf", phoneNumber: '121.273.434'},
      {firstName: "TMing", lastName: "Wong", password: "adjfjaakaassf", phoneNumber: '121.394.924'}
    ]

    const addressPromise = Address.bulkCreate(addresses, {returning: true});
    const userPromise = User.bulkCreate(users, {returning: true});
    return Promise.all([userPromise, addressPromise]);
  })

  it('serve up all addresses of a specific user', () => {
    return agent.get('/api/addresses/1')
    .then(res => {
      expect(res.body).to.be.an('array');
      expect(res.body.length).to.be.equal(2);
      expect(res.body).to.contain.a.thing.with('zip', '11342');
      expect(res.body).to.contain.a.thing.with('zip', '11134');
    })
  })

  it('can add an address', () => {
    return agent
           .post('/api/addresses')
           .send({
              street: "444 Wow St",
              city: "Brooklyn",
              state: "NY",
              country: "USA",
              zip: "24214",
              user_id: 2
            })
            .then(res => {
              return Address.find({where: {user_id: 2}})
            })
            .then(address => {
              expect(address.street).to.be.equal("444 Wow St");
              expect(address.zip).to.be.equal("24214");
            })
  })

  it('can delete an address', () => {
    let addressId;

    return Address.find({where: {user_id: 5}})
    .then(address => {
      addressId = address.id;
      return agent.delete(`/api/addresses/${addressId}`);
    })
    .then(() => {
      return Address.findById(addressId);
    })
    .then(res => {
      expect(res).to.be.equal(null);
    })
  })

  it('can update an address', () => {
    let oldZipcode;
    return Address.find({where: {user_id: 4}})
    .then(address => {
      oldZipcode = address.zip;
      return agent.put(`/api/addresses/${address.id}`).send({zip: "14832"});
    })
    .then(() => {
      return Address.find({where: {user_id: 4}})
    })
    .then((res) => {
      expect(res).to.exist;
      expect(res.zip).to.not.equal(oldZipcode);
    })
  })

})
