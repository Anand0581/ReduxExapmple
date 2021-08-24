import {MULTYPLY_COUNT} from '../constants';

const multiplyAction = count => {
  return {
    type: MULTYPLY_COUNT,
    data: count,
  };
};
export default multiplyAction;
