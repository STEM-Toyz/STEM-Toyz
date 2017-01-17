import React from 'react'
import SingleOrderHistory from './SingleOrderHistory';

export default class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const history = this.props.orderHistory;

    return (
      <div className="singleOrder col-xs-12">
        {
          history.map(singleOrder => singleOrder.items.length ? <div key={singleOrder.id} className="row"><SingleOrderHistory setReviewInfo={this.props.setReviewInfo} userId={singleOrder.user_id} order={singleOrder}/></div> : null)
        }
      </div>
    )
  }
}
