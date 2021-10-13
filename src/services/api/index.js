import axios from 'axios';

const connection = axios.create({
    baseURL: 'http://192.168.0.110:8000/',
    timeout: 10000
});

export { connection }