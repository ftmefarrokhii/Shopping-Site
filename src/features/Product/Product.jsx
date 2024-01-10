import { MdCameraAlt , MdBatteryChargingFull  , MdScreenshot  } from "react-icons/md";
import { AiFillTag ,AiOutlineShoppingCart , AiOutlineMinus} from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { toast } from "react-toastify";
import useUpdateProduct from "../Cart/useUpdateProduct";
import useRemoveProduct from "../Cart/useRemoveProduct";
import { useCartContext } from "../../context/CartProvider";

export default function Product({product}){
    const {title, price, imageURL, id , quantity } = product;
    const {cart} = useCart()
  
    const isInCart = cart?.find((p) => p.id === id);

    const {isUpdatingProduct , updateProduct} = useUpdateProduct()
    const {isDeletingProduct , removeProduct} = useRemoveProduct()
    const {addToCartHandler , incrementHandler} = useCartContext()

  const decrementHandlerr = (productId) => {
      if (isInCart.quantity === 1) {
       
        setTimeout(() => removeProduct(productId, {
          onSuccess : ()=>{console.log("success remove");}
        }), 500);
      } else{
          const updatedProduct = {
              title : isInCart.title,
              price : isInCart.price,
              imageURL : isInCart.imageURL,
              id : isInCart.id ,
              quantity : isInCart.quantity - 1 
          }
          console.log("updated" , updatedProduct);

          updateProduct({id,updatedProduct},{
              onSuccess : ()=> {console.log("success decrement")}
          })
      } 
  };
  

  const renderAddToCartButton = () => {
        if (isInCart) {
          const isInCartProduct = { id : isInCart.id ,quantity :isInCart.quantity , price:isInCart.price ,
            title : isInCart.title , imageURL:isInCart.imageURL}
          return (
            <div className="flex w-full items-center justify-center gap-1">
              <button
                className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-white lg:hover:bg-violet-700"
                onClick={()=>incrementHandler(isInCartProduct)}
              >
                +
              </button>
              <Link
                to="/cart"
                className="flex h-9 w-9/12 items-center 
                justify-between rounded-xl bg-violet-600 p-2 text-sm text-white"
              >
                <div className="flex w-full items-center justify-evenly">
                  <AiFillTag /> در سبد خرید
                  <p className="text-sm">{isInCart.quantity}</p>
                </div>
              </Link>
              <button
                className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-white lg:hover:bg-violet-700"
                onClick={() => decrementHandlerr(isInCart.id)}
              >
                {isInCart.quantity === 1 ? (
                  <FaTrash className="h-1/2 w-1/2" />
                ) : (
                  <AiOutlineMinus />
                )}
              </button>
            </div>
          );
        } else {
          return (
            <button
              className="flex  h-9 w-11/12 items-center justify-center gap-1 rounded-xl bg-slate-800 p-2 text-sm text-white dark:border-2 dark:text-white/70 dark:border-violet-700"
              onClick={()=>addToCartHandler(product)}
            >
              <AiOutlineShoppingCart />
              <p>افزودن به سبد خرید</p>
            </button>
          );
        }
  };


    return(
        <div className="flex flex-col m-3 shadow shadow-slate-800 p-2 pb-4 rounded-lg justify-between">
            <Link to={`/product/${id}`}>

            <p className="lg:hidden text-xl text-slate-800 p-2">{product.title}</p>

            <div className="flex flex-row lg:flex-col items-center">

               <div className="bg-white rounded-full p-7 shadow-md shadow-slate-400">
                <img className="w-32 h-32" src={product.imageURL} alt="" />
                </div>

                <div className="flex flex-col flex-grow m-3 items-end lg:items-center">
                    <p className="hidden lg:flex text-xl text-slate-800 p-2">{product.title}</p>

                    <div className="lg:hidden flex w-full items-center justify-between rounded-xl bg-violet-100 p-3 text-lg text-gray-800 ">
                        <span>
                            <MdScreenshot />
                            {product.screen}
                        </span>
                        <span>
                            <MdCameraAlt /> 
                            {product.camera}
                        </span>
                        <span>
                            < MdBatteryChargingFull/>
                            {product.battery}
                        </span>
                    </div>
                   
                    <div className="mt-5">{product.price} تومان</div>
                </div>

            </div>
            </Link>
            
            <div className="flex w-full justify-center text-center text-xl">
              {renderAddToCartButton()}
            </div>
        </div>  
    )
}