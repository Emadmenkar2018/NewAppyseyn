import {TEST_ACTION} from '../actions/index.actions';

const INITIAL_STATE = {
    message: ''
}

const test = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TEST_ACTION: {
    return {message: action.message};
  }
  default:
    return state;
  }
};

export default test;