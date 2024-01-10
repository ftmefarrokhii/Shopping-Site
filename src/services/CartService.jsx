import http from "./HttpService";

export function getCartApi(){
    return http.get('/cart').then((res)=> res.data)
}
export function addToCartApi(newCartItem){
    return http.post('/cart',newCartItem).then((res)=> res.data)
}
export function removeProductFromCartApi(id){
    return http.delete(`/cart/${id}`).then((res)=> res.data)
}
export function updateProductApi({id,updatedProduct}){
    return http.patch(`/cart/${id}`,updatedProduct).then((res)=> res.data)
}
