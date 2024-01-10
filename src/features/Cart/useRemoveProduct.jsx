import { useMutation, useQueryClient } from "@tanstack/react-query";
import {toast} from "react-toastify";
import { removeProductFromCartApi } from "../../services/CartService";

export default function useRemoveProduct(){
    const queryClient = useQueryClient()
    const {isPending : isDeletingProduct , mutate : removeProduct} = useMutation({
        mutationFn : removeProductFromCartApi ,
        onSuccess : (data)=> {
            console.log("removing" , data);
            toast.success(data.message)
            queryClient.invalidateQueries({   
                queryKey : ["cart"]
            })
        },
        onError : (err) => {
            console.log(err);
            toast.error(err?.response?.data?.message)
        }
    })
    return {isDeletingProduct , removeProduct}
}