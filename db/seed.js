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
      tag: ['Engineering'],
      imageUrl: 'light-saber.jpg',
      price: 180,
      description: 'Weapon of the Jedi',
      quantity: 200
    },
    {
      name: 'Global Crisis',
      category: 'Video Game',
      tag: ['Science', 'Technology'],
      imageUrl: 'planet-hologram.jpeg',
      price: 60,
      description: 'Save the planet in the fight against global warming',
      quantity: 120
    },
    {
      name: 'Robo walkers',
      category: 'Board Game',
      tag: ['Engineering'],
      imageUrl: 'robot-on-tight-rope.jpg',
      price: 45,
      description: 'Build a robot that can walk on a tightrope',
      quantity: 50
    },
    {
      name: 'Wounders of Science',
      category: 'Card Game',
      tag: ['Science'],
      imageUrl: 'wonders-of-science.jpg',
      price: 10,
      description: 'Discover real facts about such aspects of science as energy, motion, and gases',
      quantity: 70
    },
    {
      name: 'RoboBee',
      category: 'Toy',
      tag: ['Technology', 'Engineering'],
      imageUrl: 'robotic-bee.png',
      price: 300,
      description: 'Fly your very own robotic bee',
      quantity: 80
    },
    {
      name: 'Science Kombat',
      category: 'Video Game',
      tag: ['Science', 'Engineering'],
      imageUrl: 'science-kombat.jpg',
      price: 60,
      description: 'have 1v1 online battles using science in this futuristic kombat game.',
      quantity: 150
    },
    {
      name: 'SMATH',
      category: 'Board Game',
      tag: ['Math'],
      imageUrl: 'SMATH.jpg',
      price: 20,
      description: 'Learning Math is fun witht his educational card game.',
      quantity: 60
    },
    {
      name: 'The Game of Earth',
      category: 'Board Game',
      tag: ['science'],
      imageUrl: 'the-game-of-earth.jpg',
      price: 20,
      description: 'Learning Math is fun witht his educational card game.',
      quantity: 60
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
    { quantity: 2, price: 55, order_id: 3, product_id: 4},
    { quantity: 4, price: 12, order_id: 4, product_id: 5},
    {quantity: 3, price: 24, order_id: 4, product_id: 6},
    { quantity: 23, price: 555, order_id: 1, product_id: 7},
    { quantity: 33, price: 142, order_id: 2, product_id: 8},
    {quantity: 13, price: 243, order_id: 3, product_id: 1},
    { quantity: 39, price: 99, order_id: 1, product_id: 2},
    { quantity: 30, price: 33, order_id: 2, product_id: 3},
    {quantity: 23, price: 234, order_id: 4, product_id: 4}
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
