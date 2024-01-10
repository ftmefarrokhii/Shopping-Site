import http from "./HttpService";

export function getProductsApi(){
    return http.get(`/allProducts`).then((res)=> res.data)
}
export function addCommentApi({id,newComment}){
    return http.patch(`/allProducts/${id}` , newComment).then((res)=> res.data)
}


