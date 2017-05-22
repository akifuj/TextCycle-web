import axios from 'axios';

export function sendMailRequest(data) {
  return dispatch => {
    return axios.post('/api/mail/send', data);
  }
}
