import axios from 'axios';

export const apiHoxton = axios.create({
    baseURL:'https://hoxton-backend.herokuapp.com/api/'
});