const db = require('APP/db')

  const seedUsers = () => db.Promise.map([
    {firstName: 'so many', lastName: 'yo', email: 'god@example.com', phoneNumber:"12345678", password: '1234'},
    {firstName: 'Barack', lastName: 'Obama', email: 'bamad@example.com', phoneNumber:"1223425678", password: '123434'},
    {firstName: 'Bruce', lastName: 'Wayne', email: 'waynecorp@example.com', phoneNumber:"1259376783", password: '5573563'}
  ], user => db.model('users').create(user))

  const seedProducts = () => db.Promise.map([
    {
      name: 'Light Saber',
      category: 'Toy',
      tag: ['Science'],
      imageUrl: 'default.jpg',
      price: 100,
      description: 'Weapon of the Jedi',
      quantity: 200
    },
    {
      name: 'Space Odyessey',
      category: 'Video Game',
      tag: ['Technology'],
      imageUrl: 'default.jpg',
      price: 10000,
      description: 'Space travel in style',
      quantity: 100
    },
    {
      name: 'Math Crisis',
      category: 'Card Game',
      tag: ['Technology', 'Engineering'],
      imageUrl: 'default.jpg',
      price: 999,
      description: 'Undue mistakes of the past',
      quantity: 300
    }
  ], product => db.model('product').create(product));

  const seedReviews = () => db.Promise.map([
    { title: "Best Toy Ever!", stars: 5, content: 'I was so impressed with this product', product_id: 1, user_id: 1 },
    { title: "Not safe for kids!", stars: 1, content: 'My 5 year old chopped my sofa in half with this light saber', product_id: 2, user_id: 3 },
    { title: "pretty good", stars: 4, content: 'not bad, not bad at all', product_id: 3, user_id: 3 }
  ], review => db.model('reviews').create(review));

  const seedAddresses = () => db.Promise.map([
    {street: '123 Fake St', city: 'New York', state: 'NY', country: 'USA', zip: '10036', user_id: 1},
    {street: '5 Hanover Sq', city: 'New York', state: 'NY', country: 'USA', zip: '10004', user_id: 2},
    {street: '2 Hanover Sq', city: 'New York', state: 'NY', country: 'USA', zip: '10004', user_id: 3}
  ], address => db.model('address').create(address));

  const seedOrders = () => db.Promise.map([
    { status: 'in cart', user_id: 1, address_id: 1},
    { status: 'ordered', user_id: 2, address_id: 2},
    { status: 'shipped', user_id: 3, address_id: 3},
    { status: 'shipped', user_id: 3, address_id: 3},
    { status: 'ordered', user_id: 3, address_id: 3}
  ], order => db.model('orders').create(order));


  const seedItems = () => db.Promise.map([
    { quantity: 10, price: 110, order_id: 1, product_id: 1},
    { quantity: 15, price: 50,  order_id: 2, product_id: 2},
    { quantity: 30, price: 171,  order_id: 3, product_id: 3},
    { quantity: 2, price: 55, order_id: 3, product_id: 1},
    { quantity: 4, price: 12, order_id: 4, product_id: 2},
    {quantity: 3, price: 24, order_id: 4, product_id: 3},
    { quantity: 23, price: 555, order_id: 1, product_id: 1},
    { quantity: 33, price: 142, order_id: 2, product_id: 1},
    {quantity: 13, price: 243, order_id: 3, product_id: 2},
    { quantity: 39, price: 99, order_id: 1, product_id: 2},
    { quantity: 30, price: 33, order_id: 2, product_id: 3},
    {quantity: 23, price: 234, order_id: 4, product_id: 3}
  ], item => db.model('items').create(item));

  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedUsers)
    .then(users => console.log(`Seeded ${users.length} users OK`))
    .then(seedProducts)
    .then(products => console.log(`Seeded ${products.length} Products OK`))
    .then(seedReviews)
    .then(reviews => console.log(`Seeded ${reviews.length} Reviews OK`))
    .then(seedAddresses)
    .then(addresses => console.log(`Seeded ${addresses.length} addresses OK`))
    .then(seedOrders)
    .then(orders => console.log(`Seeded ${orders.length} Orders OK`))
    .then(seedItems)
    .then(items => console.log(`Seeded ${items.length} Items OK`))
    .catch(error => console.error(error))
    .finally(() => db.close())
