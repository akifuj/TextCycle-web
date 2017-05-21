import axios from 'axios';

export const REQ_POSTS = 'REQ_POSTS';
export const RECV_POSTS = 'RECV_POSTS';
export const RECV_POSTS_ERROR = 'RECV_POSTS_ERROR';

function requestPosts() {
  return {
    type: REQ_POSTS,
  }
}

function receivePosts(json) {
  return {
    type: RECV_POSTS,
    data: json,
  }
};

function receivePostsError(json) {
  return {
    type: RECV_POSTS_ERROR,
    data: json,
  }
};

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());
    return axios({
      url: '/api/books',
      method: 'get',
      responseType: 'json',
      //timeout: 20000,
    })
    .then(function(response) {
      dispatch(receivePosts(response.data));
    })
    .catch(function(response) {
      dispatch(receivePostsError(response.error));
    })
  }
};
