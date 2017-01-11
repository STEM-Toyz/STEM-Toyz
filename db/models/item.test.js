'use strict';

const db = require('APP/db');
const Item = require('./item');
const {expect} = require('chai');

describe('Item', () => {
  before('wait for the db', () => db.didSync);

  let item;
  beforeEach(() => {
    item = Item.build({
      price: 4
    });

  });


  describe('Quantity', () => {
    it('Defaults to 1', () => {
      return item.save()
        .then(item => expect(item.quantity).to.equal(1));
    });

    it('Has an instance method for adding qty.', () => {
      return item.save()
        .then(item => {
          item.add();
          return item;
        })
        .then(item => expect(item.quantity).to.equal(2));
    });

    it('Has an instance method for subtracting qty.', () => {
      return item.save()
        .then(item => {
          item.subtract();
          return item;
        })
        .then(item => expect(item.quantity).to.equal(0));
    });
    it('Has an getter method for to calculate total price.', () => {
      let item2 = Item.build({
        quantity: 2,
        price: 4
      })

      return item2.save()
        .then(item => {
          expect(item.totalPrice).to.equal(8);
        })
    });
  });
});
