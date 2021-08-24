import HomePage from '../components/HomePage';
import {connect} from 'react-redux';
import addCount from '../services/actions/actions';
import minusCount from '../services/actions/minusAction';

const mapStateToProps = state => ({
  data: state,
});
const mapDispatchToProps = dispatch => ({
  addCount: data => dispatch(addCount(data)),
  minusCount: data => dispatch(minusCount(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
