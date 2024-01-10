import { useMutation,useQueryClient } from "@tanstack/react-query";
import {toast} from "react-toastify";
import { updateProductApi } from "../../services/CartService";

export default function useUpdateProduct(){
    const queryClient = useQueryClient() 

    const {isPending : isUpdatingProduct, mutate : updateProduct} = useMutation({
        mutationFn : updateProductApi , 
        onSuccess : (data)=>{
            console.log("decrement or increment success",data);
            toast.success(data.message)

            queryClient.invalidateQueries({  
                queryKey : ["cart"]
            })
        },
        onError : (err) => {
            toast.error(err?.response?.data?.message)
        }
    })
    return {isUpdatingProduct , updateProduct}
}