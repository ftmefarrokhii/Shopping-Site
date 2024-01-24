import axios from "axios"

const BASE_URL = "http://localhost:3000";

const app = axios.create({
    baseURL: BASE_URL,
    withCredentials:true
})

const http = {
    get : app.get,
    post : app.post,
    patch : app.patch,
    put : app.put,
    delete : app.delete
}

export default http;