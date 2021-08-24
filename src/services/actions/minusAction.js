import {MINUS_COUNT} from '../constants';

const minusCount = count => {
  return {
    type: MINUS_COUNT,
    data: count,
  };
};
export default minusCount;
