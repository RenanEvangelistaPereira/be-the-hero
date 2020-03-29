import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:33033',
});

export default api;