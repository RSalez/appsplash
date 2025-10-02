
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ipinfo.io/161.185.160.93/geo',
});

export default api;
