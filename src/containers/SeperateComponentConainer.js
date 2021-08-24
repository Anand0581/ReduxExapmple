import {connect} from 'react-redux';
import SeperateComponent from '../components/SeperateComponent';
import devideAction from '../services/actions/devideAction';
import multiplyAction from '../services/actions/multiplyAction';

const mapStateToProps = state => ({
  data: state,
});
const mapDispatchToProps = dispatch => ({
  multiplay: data => dispatch(multiplyAction(data)),
  devide: data => dispatch(devideAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SeperateComponent);
