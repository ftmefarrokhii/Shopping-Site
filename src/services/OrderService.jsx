import http from "./HttpService";

export function addOrderApi(order){
    return http.post('/orders',order).then((res)=> res.data)
}
