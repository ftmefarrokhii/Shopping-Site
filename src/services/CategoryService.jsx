import http from "./HttpService";

export function getCategoriesApi(){
    return http.get('/categories').then((res)=> res.data)
}
