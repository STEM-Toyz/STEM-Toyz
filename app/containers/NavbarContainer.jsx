import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

import {toggleLogin} from 'APP/app/reducers/login';
import {toggleShoppingCart} from 'APP/app/reducers/toggleShoppingCart';
import store from '../store';
import { filterProducts } from '../reducers/products';


// Does nothing right now!!!
const searchProducts = (products, query) => {
  if(query) {
    const queryString = query.toLowerCase();
    const filtered = products.filter(product => product.name.toLowerCase().indexOf(queryString) !== -1);
    store.dispatch(filterProducts(filtered));
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    showLogin: state.showLogin,
    showShoppingCart: state.showShoppingCart,
    allProducts: state.products.allProducts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLogin (show) {
      dispatch(toggleLogin(show));
    },
    toggleShoppingCart(toggle) {
      dispatch(toggleShoppingCart(toggle));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class extends Component {

  constructor (props) {
    super(props);
    this.state = {
      productQuery: '',
     };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleCart (evt) {
    let lastState = this.state.showCart;
    this.setState({ showCart: !lastState});
  }

  handleChange (value) {
    this.setState({ productQuery: value.target.value });
  }

  handleSubmit (evt, products) {
    evt.preventDefault();
    // a theoretical function imported to search the database
    searchProducts(products, this.state.productQuery);
  }

  render () {
    return (
      <Navbar
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
});
