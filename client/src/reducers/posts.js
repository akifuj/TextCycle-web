import * as types from '../actions/posts';

const INITIAL_STATE = {
  posts: [],
  error: false,
  isLoading: false,
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.REQ_POSTS:
      return Object.assign({}, state, {
        posts: [],
        error: false,
        isLoading: true,
      })
    case types.RECV_POSTS:
      return Object.assign({}, state, {
        posts: action.data,
        error: false,
        isLoading: false,
      })
    case types.RECV_POSTS_ERROR:
      return Object.assign({}, state, {
        posts: [],
        error: true,
        isLoading: false,
      })
    default:
      return state;
  }
}
