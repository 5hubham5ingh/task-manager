import axios from "axios";

const BASE_URL = "http://localhost:5555";

 export default axios.create({
    baseURL: BASE_URL,
 })