import OrderHistory from '../components/OrderHistory';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {orderHistory: state.orderHistory.orderHistory};
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
