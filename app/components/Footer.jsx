'use strict'

import React from 'react';
import { Link } from 'react-router';


export default (props) => {
  return (
    <footer className="row">
        <div className="col-md-3">
          <h4>About us</h4>
            <ul className="list-unstyled">
            <li>Career</li>
            <li>Our Company</li>
            </ul>
        </div>
        <div className="col-md-3">
          <h4>Link</h4>
            <ul className="list-inline">
            <li>Facebook</li>
            <li>LinkedIn</li>
            </ul>
        </div>
        <div className="col-md-3">
          <h4>Placeholder</h4>
            <ul className="list-unstyled">
            <li>Facebook</li>
            <li>blahblah</li>
            </ul>
        </div>
        <div className="col-md-3">
          <h4>Placeholder</h4>
            <ul className='list-unstyled'>
            <li>Tumblr</li>
            <li>Instagram</li>
            </ul>
        </div>
      </footer>
  )
}
