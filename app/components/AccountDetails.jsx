import React from 'react';

export default class AccountDetails extends React.Component {
  //Needs currentUser for the user info like name and email
  //Needs to grab all addresses of currentUser as currentUserAddresses
  //Needs a button for changing password, viewing order history and viewing reviews
  constructor(props) {
    super(props);
  }

  render() {

    const user = this.props.selectUser;
    const profile = user.profile;
    const addresses = user.addresses;
    const reviews = user.reviews;
    console.log(reviews);

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
                <h2>Reviews</h2>
                  {
                    reviews.map(review => {
                      return <div key={review.id}>
                        <p>{`${review.title}\t${review.created_at.replace(/[A-Z]/, ' ')}`}</p>
                        <p>By: {review.user.firstName} {review.user.lastName[0]}. Rating: { Array(review.stars).fill(0).map((val, idx) => {
                          return <span key={idx} className="glyphicon glyphicon-star"/> })}
                        </p>
                        <p>{review.content}</p>
                      </div>
                    })
                  }
              </div>
              <div>
                <label>Email: {profile.email}</label>
                <div><button>Change Password</button></div>
              </div>
              <br/>
              <div>
                <button>View Orders</button><button>View Reviews</button>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
