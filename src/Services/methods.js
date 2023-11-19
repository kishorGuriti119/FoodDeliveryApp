import axios from 'axios';
import {API} from './api';

const Api_Methods = {
  get: async (url, params) => {},
  post: async (url, data = {}, params = {}, token) => {
    let headers = token
      ? {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}
      : {};

    let response = await axios.post(`${url}`, data, {headers});
    return response;
  },
};

export default Api_Methods;
