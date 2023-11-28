import axios from "axios";

const BASE_URL = "http://localhost:5555";

const server = axios.create({
    baseURL: BASE_URL,
 });

 export default async function request({...options}){

    const onSuccess = response => response;
    const onError = error => {
        console.log("Error while axios request", error);
    };

    return await server(options).then(onSuccess).catch(onError)

 }