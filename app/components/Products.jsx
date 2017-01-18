'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProductsFilterContainer from '../containers/ProductsFilterContainer'
export default class Products extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const order = this.props.shoppingCart;

    return (

    <div className="row">
      <div className="col-xs-2">
        <ProductsFilterContainer allProducts={this.props.allProducts} />
      </div>
      <div className="col-xs-10">
        {
          this.props.filteredProducts.length
          ? this.props.filteredProducts.map(product => {
            return (
              <div className="col-xs-2" key={ product.id }>
                <Link className="thumbnail" to={`/products/${product.id}`}>
                  <img src={`/img/${product.imageUrl}`} height="100" width="170" />
                  <h4>{product.name}</h4>
                  <h5>Price: {product.price}</h5>
                  <p>Category: {product.category}</p>
                </Link>
                <button className="btn btn-primary btn-outline-success my-2 my-sm-0" onClick={() => {
                    order.product = product;
                    if (this.props.auth) {
                      this.props.saveItem(order)
                      setTimeout(() => {
                        this.props.toggleShoppingCart(!this.props.showShoppingCart);
                        this.props.toggleShoppingCart(!this.props.showShoppingCart);
                      }, 0);
                    } else {
                      this.props.unAuthAddToCart(product);
                      this.props.toggleShoppingCart(this.props.showShoppingCart);
                    }
                  }}>
                  Add to cart
                </button>
              </div>
            );
          })
          : <h3>No Items found</h3>
        }
      </div>
    </div>
  )}
}
