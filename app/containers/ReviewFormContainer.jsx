import ReviewForm from '../components/ReviewForm';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.reviews.reviewUser,
    product: state.reviews.reviewProduct
  }
}

export default connect(mapStateToProps)(ReviewForm);
