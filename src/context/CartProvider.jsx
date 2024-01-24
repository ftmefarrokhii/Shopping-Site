import { createContext, useContext } from "react";
import useAddToCart from "../features/Cart/useAddToCart";
import useUpdateProduct from "../features/Cart/useUpdateProduct";
import { toast } from "react-toastify";

const  CartContext  =  createContext();

export default function CartProvider({children}){

    const { isAddingToCart , addToCart } = useAddToCart()
    const {isUpdatingProduct , updateProduct} = useUpdateProduct()

    const addToCartHandler = (product) =>{
        const newCartItem = {
            id: product.id,
            quantity : 1,
            title : product.title,
            price : product.price,
            imageURL : product.imageURL
        }
        // console.log("newCartItem",newCartItem);
        addToCart(newCartItem , { 
            onSuccess : (data) => {  
                console.log("dataadd shode", data);
            },
            onError : (err)=>{
                toast.error(err?.response?.data?.message)
            }
        })
    }

    const incrementHandler = (product) => {
        const id = product.id

        const updatedProduct = {
            title : product.title,
            price : product.price,
            imageURL : product.imageURL,
            id : product.id,
            quantity : product.quantity + 1
        }
        // console.log("updated quantity" , updatedProduct);

        updateProduct({id,updatedProduct},{
            onSuccess : ()=> {console.log("success increment")}
        })
    };

    return  (
        <CartContext.Provider value={{addToCartHandler , incrementHandler }}>
            {children}
        </CartContext.Provider>
    );

}
export function useCartContext(){
    const context = useContext(CartContext)
    if(context === undefined) throw new Error("cart context was used outside of cartProvider")
    return context
}
