import {combineReducers, createStore} from 'redux';
import countReducer from './reduce';

const rootReducer = combineReducers({
  count: countReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
