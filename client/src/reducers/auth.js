import { SET_CURRENT_USER } from '../actions/auth';
import isEmpty from 'lodash/isEmpty';

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
    return {
      isAuthenticated: !isEmpty(action.user),
      user: action.user
    };
    default: return state;
  }
}
