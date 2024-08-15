import axios from 'axios';

const SERVER_URL = 'http://132.248.32.14:8080'; // URL del servidor Spring Boot

const AxiosClient = axios.create({
    baseURL: SERVER_URL,
    withCredentials: true, 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

AxiosClient.interceptors.response.use(
    (response) => response, 
    (error) => Promise.reject(error)
);

export default AxiosClient;
