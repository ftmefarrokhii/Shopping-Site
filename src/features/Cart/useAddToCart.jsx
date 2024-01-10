import { useMutation, useQueryClient } from "@tanstack/react-query";
import {toast} from "react-toastify";
import { addToCartApi } from "../../services/CartService";

export default function useAddToCart(){
    const queryClient = useQueryClient() 

    const {isPending : isAddingToCart, mutate : addToCart} = useMutation({ 
        mutationFn : addToCartApi,
        queryKey : ["cart"],
        onSuccess : (data)=> {
            console.log("success",data);
            toast.success(data.message)
            queryClient.invalidateQueries({   
                queryKey : ["cart"]
            })
        },
        onError : (err) => {
            console.log("err",err?.response?.data?.message);
            toast.error(err?.response?.data?.message)
        }
    })
    return { isAddingToCart , addToCart }
}