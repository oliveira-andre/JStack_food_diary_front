import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://bg2bv6u1ge.execute-api.us-east-1.amazonaws.com',
});