'use strict';

const db = require('APP/db');
const Order = require('./order');
const Item = require('./item');
const {expect} = require('chai');

describe('Order', () => {
  before('wait for the db', () => db.didSync);

  let order;
  beforeEach(() => {
    order = Order.build({

    });
  });

  describe('Status', () => {
    it('Defaults to in cart', () => {
      return order.save()
        .then(order => expect(order.status).to.equal('in cart'));
    });
  });
  describe('getterMethods', () => {
    it('should display the total price by using the price from items', () => {

      let order2;

      return Order.create({

      })
      .then(function(_order2){
        order2 = _order2;
        return Promise.all([
         Item.create({
        quantity: 2,
        price: 4,
        order_id: order2.id
      }),
       Item.create({
        quantity: 3,
        price: 5,
        order_id: order2.id
      })
        ])
      }).spread(function(item1, item2){
        return order2.totalPrice();
      }).then(function(totalPrice){
            expect(totalPrice).to.equal(23);
      });

      // console.log("ORDER 2", order2);
      // let item = Item.create({
      //   quantity: 2,
      //   price: 4,
      //   order_id: order2.id
      // })

      // let item2 = Item.create({
      //   quantity: 3,
      //   price: 5,
      //   order_id: order2.id
      // })

      // return Promise.all([order2, item, item2])
      //   .then(function(){
      //     return order2.totalPrice()
      //   })
      //   .then(function(totalPrice){
      //       expect(totalPrice).to.equal(23);
      //   });
    });
  });
});
