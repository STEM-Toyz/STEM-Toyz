'use strict';

import React from 'react';
import chai, {expect} from 'chai';
chai.use(require('chai-enzyme')());
import {shallow} from 'enzyme';
import {spy} from 'sinon';
chai.use(require('sinon-chai'));

import {Navbar} from './Navbar'

describe('<Navbar />', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Navbar />)
  )
  it('contains login component', () =>
    expect(root.find())
  )
})
