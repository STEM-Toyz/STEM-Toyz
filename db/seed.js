const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {firstName: 'so many', lastName: 'yo', email: 'god@example.com', phoneNumber:"12345678", password: '1234'},
  {firstName: 'Barack', lastName: 'Obama', email: 'bamad@example.com', phoneNumber:"1223425678", password: '123434'},
], user => db.model('users').create(user))

const seedAddresses = () => db.Promise.map([
  {street: '123 Fake St', city: 'New York', state: 'NY', country: 'USA', zip: '10036', user_id: 1},
  {street: '5 Hanover Sq', city: 'New York', state: 'NY', country: 'USA', zip: '10004', user_id: 1},
  {street: '2 Hanover Sq', city: 'New York', state: 'NY', country: 'USA', zip: '10004', user_id: 2}
], address => db.model('address').create(address));

// EI: seed products, etc.

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedAddresses)
  .then(addresses => console.log(`Seeded ${addresses.length} addresses OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
