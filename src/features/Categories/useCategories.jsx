import {useQuery} from "@tanstack/react-query"
import { getCategoriesApi } from "../../services/CategoryService";

export default function useCategories(){

     const {isLoading , data : categories} = useQuery({
        queryKey : ["categoriesData"] , 
        queryFn : () => getCategoriesApi(),
    })
    return {isLoading ,categories }
    
}

