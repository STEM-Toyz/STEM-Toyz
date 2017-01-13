import AccountDetails from './AccountDetails';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {state: state};
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
