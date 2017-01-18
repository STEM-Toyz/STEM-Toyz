import React from 'react';
import Review from './Review';
import { Link } from 'react-router';

export default class AccountDetails extends React.Component {

  render() {
    const user = this.props.selectUser;
    const profile = user.profile;
    const addresses = user.addresses;

    return (
      <div className="accountDetails">
        {
          !Object.keys(user).length
          ? null
          :
          (
            <div>
              <div>
                <p className="accountInfo">Name: {`${profile.firstName} ${profile.lastName}`}</p>
              </div>
              <div>
                <h2>Addresses</h2>
                  {
                    addresses.map(address => <div className="addressRow thumbnail" key={address.id}>{address.fullAddress}</div>)
                  }
              </div>
              <div>
                <div><p className="accountInfo">Email: {profile.email}</p></div>
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
