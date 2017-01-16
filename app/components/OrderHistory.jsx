import React from 'react'
import SingleOrderHistory from './SingleOrderHistory';

export default class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props);
    const history = this.props.orderHistory;

    return (
      <div className="singleOrder col-xs-12">
        {
          history.map(singleOrder => singleOrder.items.length ? <div className="row"><SingleOrderHistory key={singleOrder.id} order={singleOrder}/></div> : null)
        }
      </div>
    )
  }
}
