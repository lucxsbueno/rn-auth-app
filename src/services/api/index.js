import axios from 'axios';

const connection = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000
});

export default connection;