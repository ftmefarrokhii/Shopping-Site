import { AiFillTag ,AiOutlineShoppingCart , AiOutlineMinus} from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { FaRibbon } from "react-icons/fa";
import { Link } from "react-router-dom";
import fastSubmit from "../../assets/esraleSari.png";
import useCart from "../../hooks/useCart";
import useAddToCart from "../Cart/useAddToCart";
import useUpdateProduct from "../Cart/useUpdateProduct";
import useRemoveProduct from "../Cart/useRemoveProduct";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/CartProvider";

const Seller = ({ product }) => {
  const {title, price, imageURL, id , quantity } = product;

  const {cart} = useCart()
    
  const isInCart = cart?.find((p) => p.id === id);
  // console.log("isInCart",isInCart);

  const { isAddingToCart , addToCart } = useAddToCart()
  const {isUpdatingProduct , updateProduct} = useUpdateProduct()
  const {isDeletingProduct , removeProduct} = useRemoveProduct()
  const {addToCartHandler , incrementHandler} = useCartContext()

  const decrementHandler = (productId) => {
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
          className="fixed bottom-0 right-0 z-[100] flex w-full items-center justify-center gap-2 bg-violet-700 p-4 text-lg text-white  lg:relative lg:rounded-full lg:px-4 lg:py-2 lg:text-base"
        >
          <AiFillTag />
          <p>در سبد خرید</p>
          <p className="text-sm">{isInCart.quantity}</p>

        </Link>
        <button
                className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-white lg:hover:bg-violet-700"
                onClick={() => decrementHandler(isInCart.id)}
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
          className="fixed bottom-0 right-0 z-[100] flex w-full items-center justify-center gap-2 bg-gray-900 p-4 text-lg text-white dark:border-2 dark:border-violet-500 dark:bg-violet-500 lg:relative lg:rounded-full lg:px-4 lg:py-2 lg:text-base lg:hover:bg-violet-700 lg:dark:bg-transparent"
          onClick={()=>addToCartHandler(product)}
          >
          <AiOutlineShoppingCart />
          <p>افزودن به سبد خرید</p>
        </button>
      );
    }
  };

  return (
    <>
      <div className="flex w-full flex-col justify-center gap-6 px-6 py-0 text-lg text-gray-700 dark:text-white/60 lg:w-3/4 lg:text-base ">
        <div className="flex flex-col items-start gap-4">
          <img
            src={fastSubmit}
            alt={fastSubmit}
            className="w-[17rem] dark:hidden"
          />
          <div className="flex w-full items-center justify-start gap-2 text-base">
            <span className="h-[2px] w-[16%] bg-violet-700 dark:bg-violet-400 lg:w-[26%]"></span>
            <p className="font-EstedadFont">ارسال سریع به تمام نقاط کشور</p>
            <span className="h-[2px] w-0 bg-violet-700 dark:bg-violet-400 lg:w-[24%]"></span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <div className="flex items-center justify-center gap-2">
            <BsShop />
            فروشنده : حسین عباسی
          </div>
          <div className="flex items-center justify-center gap-2">
            <DiCodeigniter style={{ color: "#f97316" }} />
            18 ماه گارانتی شرکتی
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaRibbon style={{ color: "#eab308" }} />
            قابلیت خرید بیمه نامه
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <p>قیمت : {product.price.toLocaleString("en")} تومان</p>
          {renderAddToCartButton()}
        </div>
      </div>
    </>
  );
};

export default Seller;