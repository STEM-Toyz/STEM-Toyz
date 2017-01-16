'use strict';

import React from 'react';
import chai, {expect} from 'chai';
chai.use(require('chai-enzyme')());
import {shallow} from 'enzyme';
import {spy} from 'sinon';
chai.use(require('sinon-chai'));

import Navbar from './Navbar';
import Login from './Login';
import WhoAmI from './WhoAmI';

describe('Navbar component', () => {
  const handleChange = () => {};
  const handleSubmit = () => {};
  const user = { firstName: 'Name' };
  let nav;

  describe('when the user isn\'t logged in', () => {
    beforeEach('render the root', () => {
      nav = shallow(<Navbar />);
    });

    it('should be a <nav>', () =>
      expect(nav.is('nav')).to.equal(true)
    );

    //TODO: add more tests
  });

  describe('when the user is logged in', () => {
    beforeEach('render the root', () => {
      nav = shallow(<Navbar user={user}/>);
    });

    it('should render <WhoAmI > if there is a user', () => {
      expect(nav.find(WhoAmI).length).to.equal(1);
    });
  });

});
