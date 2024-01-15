import axios from "axios"; 

const request  = axios.create({
    baseURL:'http://103.252.95.181:8000/'
})

export default request;

