'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Address = require('./address')
const Item = require('./item')
const Order = require('./order')
const Review = require('./review');
const Product = require('./product');

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(Item);
Item.belongsTo(Order);

User.hasMany(Address);
Address.belongsTo(User);

Address.hasMany(Order);
Order.belongsTo(Address);

Product.hasMany(Review);
Review.belongsTo(Product);

User.hasMany(Review);
Review.belongsTo(User);

Product.hasMany(Item);
Item.belongsTo(Product);


module.exports = {
    User,
    Address,
    Item,
    Order,
    Product,
    Review
}
