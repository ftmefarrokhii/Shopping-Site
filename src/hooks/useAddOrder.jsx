import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addOrderApi } from "../services/OrderService"

export default function useAddOrder(){
    const queryClient = useQueryClient() 
    const { mutate : addOrder , isPending} = useMutation({
        mutationFn : addOrderApi,
        queryKey : ["orders"],
        onSuccess : () => {
            queryClient.invalidateQueries({  
                queryKey : ["orders"]
            })
        },
        onError : (err) => {
            console.log(err?.response?.data?.message)
        }
    })
    return { addOrder , isPending}
}