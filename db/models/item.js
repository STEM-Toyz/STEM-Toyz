'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Item = db.define('items', {
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {
    instanceMethods: {
        add: function() {
            this.quantity += 1;
        },
        subtract: function() {
            this.quantity -= 1;
        }
    },
    getterMethods: {
        totalPrice: function() {
            return this.price * this.quantity;
        }
    }
});

module.exports = Item;
