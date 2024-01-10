import http from "./HttpService";

export function createUser(data){
    return http.post(`/users`,data).then((res)=> res.data)
}
export function getUsers(){
    return http.get(`/users`).then((res)=> res.data)

}