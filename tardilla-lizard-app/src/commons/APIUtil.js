import axios from 'axios';

export default axios.create({
    baseURL: "http://rfigueroa.duckdns.org/tool/api"
});