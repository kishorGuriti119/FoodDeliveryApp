import axios from 'axios';
import {API} from './api';

const Api_Methods = {
  get: async (url, params) => {},
  post: async (url, data) => {
    let response = await axios.post(`${url}`, data);
    return response;
  },
};

export default Api_Methods;
