import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../services/UserService";

export default function useAddUser(){
    const queryClient = useQueryClient() 
    const { mutate : addUser , isPending} = useMutation({
        mutationFn : createUser,
        queryKey : ["users"],
        onSuccess : () => {
            queryClient.invalidateQueries({  
                queryKey : ["users"]
            })
        },
        onError : (err) => {
            console.log(err?.response?.data?.message)
        }
    })
    return { addUser , isPending}
}

