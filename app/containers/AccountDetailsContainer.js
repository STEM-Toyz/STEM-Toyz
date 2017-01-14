import AccountDetails from '../components/AccountDetails';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {selectUser: state.user.selectUser};
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
