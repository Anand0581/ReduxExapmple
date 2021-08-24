import {ADD_COUNT, DEVIDE_COUNT, MINUS_COUNT, MULTYPLY_COUNT} from '../constants';

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case MINUS_COUNT:
      return {
        ...state,
        count: state.count === 0 ? state.count : state.count - 1,
      };
    case MULTYPLY_COUNT:
      return {
        ...state,
        count: state.count === 0 ? 1 : state.count * 2,
      };
    case DEVIDE_COUNT:
      return {
        ...state,
        count: state.count === 1 ? state.count : state.count/2,
      };
    default:
      return state;
  }
};

export default countReducer;
