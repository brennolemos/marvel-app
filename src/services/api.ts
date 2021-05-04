import axios from 'axios';

const API_URL = 'https://gateway.marvel.com:443/v1';
const api = axios.create({ baseURL: API_URL });

export default api;
