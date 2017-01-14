import React from 'react';
import Review from './Review';
import { Link } from 'react-router';

export default class AccountDetails extends React.Component {

  render() {
    const user = this.props.selectUser;
    const profile = user.profile;
    const addresses = user.addresses;

    return (
      <div>
        {
          !Object.keys(user).length
          ? null
          :
          (
            <div>
              <div>
                <label>Name:</label><label>{`${profile.firstName} ${profile.lastName}`}</label>
              </div>
              <div>
                <h2>Addresses</h2>
                <ul>
                  {
                    addresses.map(address => <li key={address.id}>{address.fullAddress}</li>)
                  }
                </ul>
              </div>
              <div>
                <label>Email: {profile.email}</label>
                <div><button>Change Password</button></div>
              </div>
              <br/>
              <div>
                <Link to={`/account/${profile.id}/orders`}><button>View Orders</button></Link>
                <Link to={`/account/${profile.id}/reviews`}><button>View Reviews</button></Link>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
