import { useQuery } from "@tanstack/react-query";
import { getCartApi } from "../services/CartService";

export default function useCart(){
    const {isLoading , data : cart } = useQuery({
        queryKey : ["cart"],
        queryFn : getCartApi
    })

    const productsTotalPrice = cart?.reduce((accumulator, item) => {
        const itemTotal = item.quantity * item.price;
        return accumulator + itemTotal;
    }, 0);    

    return {isLoading , cart ,productsTotalPrice}
}