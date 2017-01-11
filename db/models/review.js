'use strict'

const Sequelize = require('sequelize');
const db = require ('APP/db');

const Review = db.define('reviews', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      isIn: [[1, 2, 3, 4, 5]]
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    notEmpty: true
  }
}
, {
  classMethods: {
    getAverageScore: function(productId) {
      return Review.findAll({where: {product_id: productId}})
      .then(reviews => {
        let total = 0;
        for(let review of reviews) total += review.stars;
        return total / reviews.length;
      })
    }
  }
})

module.exports = Review;
