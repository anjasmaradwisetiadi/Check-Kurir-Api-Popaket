import { enviroments } from '../../enviroments/enviroments';
const axios = require('axios');

const APIKey = enviroments.apiKey;

export const APIUrl = {
  // APIUrlLocation: enviroments.apiUrl + '/v1/public/location',
  APIUrlLocation: enviroments.apiUrl + '/v1/public/location',
  APIUrlRate: enviroments.apiUrl + '/v3/public/rate',
};

export const instanceAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'api-key': APIKey,
  },
});
