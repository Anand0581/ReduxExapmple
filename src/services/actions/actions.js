import {ADD_COUNT, MINUS_COUNT} from '../constants';

const addCount = count => {
  return {
    type: ADD_COUNT,
    data: count,
  };
};
export default addCount;
