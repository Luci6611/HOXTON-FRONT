import axios from 'axios';

export const menusAdmin = axios.create({
    baseURL:'https://hoxton-backend.herokuapp.com/api/'
});
