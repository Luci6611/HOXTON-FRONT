import axios from 'axios';

export const homeProducts = axios.create({
    baseURL:'https://hoxton-backend-65poh53y6-luci6611.vercel.app/api/'
});
