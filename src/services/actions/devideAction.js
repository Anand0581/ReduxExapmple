import {DEVIDE_COUNT} from '../constants';

const devideAction = count => {
  return {
    type: DEVIDE_COUNT,
    data: count,
  };
};
export default devideAction;
