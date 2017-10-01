// @flow

import get from 'lodash/get';
import axios from 'axios';

import config from '../config';


export default axios.create({
  baseURL: get(config, 'api.baseUrl', '/api'),
});
