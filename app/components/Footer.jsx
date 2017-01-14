'use strict'

import React from 'react';
import { Link } from 'react-router';


export default (props) => {
  return (
    <footer className="row">
        <div className="col-md-3">
          <h4>About us</h4>
            <ul className="list-unstyled">
            <li><Link>Career</Link></li>
            <li><Link>Our Company</Link></li>
            </ul>
        </div>
        <div className="col-md-3">
          <h4>Link</h4>
            <ul className="list-unstyled">
            <li><Link>Facebook</Link></li>
            <li><Link>LinkedIn</Link></li>
            </ul>
        </div>
        <div className="col-md-3">
          <h4>Placeholder</h4>
            <ul className="list-unstyled">
            <li><Link>Facebook</Link></li>
            <li><Link>blahblah</Link></li>
            </ul>
        </div>
        <div className="col-md-3">
          <h4>Placeholder</h4>
            <ul className='list-unstyled'>
            <li><Link>Tumblr</Link></li>
            <li><Link>Instagram</Link></li>
            </ul>
        </div>
      </footer>
  )
}
