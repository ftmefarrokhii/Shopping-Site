import http from "./HttpService";


export function getFiltersApi(){
    return http.get(`/filters`).then((res)=> res.data)
}
