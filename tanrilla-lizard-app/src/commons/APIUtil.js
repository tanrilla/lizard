import axios from 'axios';

export default axios.create({
    baseURL: "http://rfigueroa.duckdns.org/lizard/api/v1"
});