import axios from "axios";
let Base_URL = 'https://monstarpay-api.herokuapp.com/v1';

let token = localStorage.getItem('mtdLender') ? JSON.parse(localStorage.getItem('mtdLender')).data?.access : null
const api = axios.create({
    baseURL: Base_URL,
    headers: {
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`
    }
});

export default api;