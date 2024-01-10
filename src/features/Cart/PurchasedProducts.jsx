import useCart from "../../hooks/useCart"
import { FaCheckCircle, FaRibbon, FaSketch, FaTrash } from "react-icons/fa";
import {AiOutlineClose, AiOutlineMinus} from "react-icons/ai"
import { useState } from "react";
import useRemoveProduct from "./useRemoveProduct";
import useUpdateProduct from "./useUpdateProduct";
import { useCartContext } from "../../context/CartProvider";
export default function PurchasedProducts(){
    const {isLoading , cart} = useCart();

    return(
        <div className="flex w-full flex-col items-center justify-center gap-4 overflow-auto rounded-lg p-4">
            {cart && cart.map((cartItem)=>{
                return <PurchasedProduct key={cartItem.id} cartItem={cartItem} />;
            })}
        </div>
    )
}

const PurchasedProduct = ({ cartItem }) => {
    const { title, price, imageURL, quantity, id } = cartItem;
    const [fade, setFade] = useState(1);
    const {isUpdatingProduct , updateProduct} = useUpdateProduct()
    const {isDeletingProduct , removeProduct} = useRemoveProduct()
    const { incrementHandler} = useCartContext()

    const decrementHandler = (productId) => {
        if (quantity === 1) {
          setFade(0);
          setTimeout(() => removeProduct(productId, {
            onSuccess : ()=>{console.log("success remove");}
          }), 500);
        } else{
            const updatedProduct = {
                title, price, imageURL, id , quantity : quantity - 1 
            }
            console.log("updated" , updatedProduct);

            updateProduct({id,updatedProduct},{
                onSuccess : ()=> {console.log("success decrement")}
            })
        } 
    };
    

    const deleteProductHandler =(productId)=>{
        setFade(0);
        console.log(productId);
        setTimeout(() => removeProduct(productId, {
            onSuccess : ()=>{console.log("success remove")}
        }), 500);
    }
  

    return(
        <div
        className={`flex w-full items-center justify-between shadow-md shadow-gray-300 gap-4 overflow-auto rounded-lg bg-white p-2  dark:bg-gray-700 dark:text-white/80 ${
            fade ? "scale-100" : "scale-0"
        }`}
        >
        <div className="flex w-full items-center justify-between lg:w-1/2">
            <div className="mb-10 scale-125 lg:cursor-pointer"
                onClick={()=>deleteProductHandler(id)}
                >
                <AiOutlineClose />      
            </div>
            
            <img
                className="h-24 w-24 lg:h-28 lg:w-28 lg:cursor-pointer"
                src={imageURL}
                alt={title}
            />

            <div className="flex flex-col gap-3">
                
                <p className="text-sm">
                    {title}
                </p>
                <p>{price?.toLocaleString("en")} تومان</p>
                <div className="mr-4 flex w-24 items-center justify-between rounded-2xl bg-slate-100 dark:bg-gray-800 lg:mr-0">
                <button
                className="flex h-7 w-7 items-center justify-center rounded-2xl bg-slate-700 dark:bg-slate-900 p-2 text-white lg:cursor-pointer"
                onClick={()=>incrementHandler(cartItem)}
                >
                +
                </button>
                <p>{quantity}</p>
                <button className="flex h-7 w-7 items-center justify-center rounded-2xl bg-slate-700
                 dark:bg-slate-900 p-2 text-white lg:cursor-pointer"
                    onClick={()=>decrementHandler(id)}
                >
                    {quantity === 1 ? <FaTrash /> : <AiOutlineMinus />}
                </button>
            </div>


            </div>

        </div>
        <div className="hidden w-48 flex-col items-start justify-center gap-3 lg:flex">
            <div className="flex items-center justify-end gap-4">
            <FaSketch className="text-sky-500" />
            <p>ضمانت هفت روزه کالا</p>
            </div>
            <div className="flex items-center justify-end gap-4">
            <FaRibbon className="text-yellow-400" />
            <p>18 ماه گارانتی</p>
            </div>
            <div className="flex items-center justify-end gap-4">
            <FaCheckCircle className="text-green-600" />
            <p>ارسال سریع</p>
            </div>
        </div>
    </div>
    )

}