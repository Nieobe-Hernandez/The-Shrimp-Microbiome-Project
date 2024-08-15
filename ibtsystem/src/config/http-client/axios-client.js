import axios from 'axios';

const SERVER_URL = 'http://localhost:8080'; // URL del servidor Spring Boot

const AxiosClient = axios.create({
    baseURL: SERVER_URL,
    withCredentials: true, // Permitir credenciales en las peticiones
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

AxiosClient.interceptors.response.use(
    (response) => response, // Retorna la respuesta completa
    (error) => Promise.reject(error)
);

export default AxiosClient;
