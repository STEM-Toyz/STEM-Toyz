import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))

import {Login} from './Login'

xdescribe('<Login />', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Login/>)
  )

  it('shows a login form and sign-up form', () => {
    expect(root.find('input[name="username"]')).to.have.length(2)
    expect(root.find('input[name="password"]')).to.have.length(3)
  })

  it('shows a password field for login and sign-up', () => {
    const pw = root.find('input[name="password"]')
    expect(pw).to.have.length(3)
    expect(pw.at(0)).to.have.attr('type').equals('password')
  })

  it('has a login button and a sign-up button', () => {
    const submit = root.find('input[type="submit"]')
    expect(submit).to.have.length(2)
  })

  xdescribe('when submitted', () => {
    const login = spy()
    const root = shallow(<Login login={login}/>)
    const form = root.find('form');
    const submitEvent = {
      preventDefault: spy(),
      target: {
        username: {value: 'bones@example.com'},
        password: {value: '12345'},
      }
    }
    //TODO: Make submit tests work with two forms
    beforeEach('submit', () => {
      login.reset()
      submitEvent.preventDefault.reset()
      root.simulate('submit', submitEvent)
    })

    it('calls props.login with credentials', () => {
      expect(login).to.have.been.calledWith(
        submitEvent.target.username.value,
        submitEvent.target.password.value
      )
    })

    it('calls preventDefault', () => {
      expect(submitEvent.preventDefault).to.have.been.called
    })
  })
})
