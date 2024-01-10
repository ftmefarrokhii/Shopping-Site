import {FaShoppingCart} from "react-icons/fa"
import useCart from "../../hooks/useCart";

export default function HeaderOfCart(){
    const {isLoading , cart ,productsTotalPrice} = useCart()
    return (
      <div className="flex items-center gap-2 px-6 dark:text-white/80">
        <FaShoppingCart style={{ transform: "scaleX(-1)" }} />
        <p>جمع کل : {productsTotalPrice.toLocaleString("en")} تومان</p>
      </div>
    );
  
}