import axios, {AxiosInstance} from 'axios';

const API: AxiosInstance = axios.create({
    baseURL: "http://3.6.14.77:8080/api/v1"
});

export default API;
