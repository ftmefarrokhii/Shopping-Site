import { useQuery } from "@tanstack/react-query"
import { getFiltersApi } from "../services/FilterService"

export default function useFilters(){
    const {isLoading , data : filters} = useQuery({
        queryKey : ["Filters"] , 
        queryFn : () => getFiltersApi(),
    })
    return {isLoading ,filters }
}