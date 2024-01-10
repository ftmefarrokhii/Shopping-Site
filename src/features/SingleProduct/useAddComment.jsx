import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { addCommentApi } from "../../services/ProductsService";
import { toast } from "react-toastify";

export default function useAddComment(){
    const queryClient = useQueryClient() 

    const {isPending , mutate : addComment} = useMutation({
        mutationFn : addCommentApi , 
        queryKey : ["product"],
        onSuccess : (data)=>{
            console.log("comment successfully added",data);
            toast.success(data.message)

            queryClient.invalidateQueries({  
                queryKey : ["product"]
            })
        },
        onError : (err) => {
            toast.error(err?.response?.data?.message)
        }
    })
    return {addComment , isPending}
}