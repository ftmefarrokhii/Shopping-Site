import { useQuery } from "@tanstack/react-query";
import { getProductsApi } from "../../services/ProductsService";
import { useParams } from "react-router-dom";

export default function useProduct(){
    const params = useParams()
  
    const {isLoading , data : AllProducts } = useQuery({
        queryKey : ["product"] ,
        queryFn : getProductsApi
        
    })

    const products = AllProducts?.filter((prod)=> {
        return prod.category === params.category
    })
    console.log("productscategory" , products);

    const SingleProduct = AllProducts?.filter((prod)=> {
        return Number(prod.id) === Number(params.id)
    })
    console.log("SingleProduct" , SingleProduct);


    return {isLoading , products , SingleProduct , AllProducts}
}