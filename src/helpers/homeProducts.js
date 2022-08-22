import axios from 'axios';

export const homeProducts = axios.create({
    baseURL:'https://hoxton-backend.herokuapp.com/api/'
});
