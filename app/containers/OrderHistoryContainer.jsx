import OrderHistory from '../components/OrderHistory';
import { connect } from 'react-redux';
import { setReviewUserProduct } from '../reducers/reviews';

const mapStateToProps = state => {
  return {orderHistory: state.orderHistory.orderHistory};
}

const mapDispatchToProps = dispatch => {
  return {
    setReviewInfo: function(product, user) {
      dispatch(setReviewUserProduct(product, user));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
