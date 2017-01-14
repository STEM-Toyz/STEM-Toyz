import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

// Does nothing right now!!!
const searchProducts = (state) => {
  console.log(state);
};

const mapStateToProps = ({auth}) => {
  return {user: auth};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class extends Component {

  constructor (props) {
    super(props);
    this.state = {
      productQuery: '',
      showLogin: false,
      showCart: false
     };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
  }

  toggleLogin (evt) {
    console.log('IN THE TOGGLE');
    let lastState = this.state.showLogin;
    this.setState({ showLogin: !lastState });
  }

  toggleCart (evt) {
    let lastState = this.state.showCart;
    this.setState({ showCart: !lastState});
  }

  handleChange (value) {
    this.setState({ productQuery: value.target.value });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    // a theoretical function imported to search the database
    searchProducts(this.state);
  }

  render () {
    return (
      <Navbar
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        toggleLogin={this.toggleLogin}
        toggleCart={this.toggleCart}
      />
    );
  }
});
