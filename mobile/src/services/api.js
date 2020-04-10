import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.27.103:33033',
});

export default api;