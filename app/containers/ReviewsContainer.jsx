import Reviews from '../components/Reviews';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {reviews: state.reviews.reviews};
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
