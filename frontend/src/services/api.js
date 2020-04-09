import axios from 'axios';

// const cBaseUrl = '';

// if (process.env.NODE_ENV != 'production'){
//     cBaseUrl='http://localhost:33033';
// }
// else{
//     cBaseUrl='https://polar-taiga-63065.herokuapp.com';
// }

const api = axios.create({
    baseURL: 'http://localhost:33033',
});



export default api;