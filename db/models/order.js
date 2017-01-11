'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');
const Item = require('./item');

const Order = db.define('orders', {
    status: {
        type: Sequelize.ENUM,
        values: ['in cart', 'ordered', 'shipped', 'completed'],
        defaultValue: 'in cart',
    },
    price: {
        type: Sequelize.FLOAT,
        defaultValue: 0
    },
}, {
    instanceMethods: {
        totalPrice: function() {
            return Item.findAll({
                    where: {
                        order_id: this.id
                    }
                })
                .then(function(items) {
                    return items.reduce(function(sum, current) {
                        return sum + current.totalPrice;
                    }, 0);
                });
        }
    }
});

module.exports = Order;
