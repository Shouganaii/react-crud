import axios from 'axios';

const base = 'http://desafio-apirest-produtos.herokuapp.com/api/';

const api = axios.create({
    baseURL: base
});
axios.defaults.headers.post['Content-Type'] = 'application/json';
export default api;