import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAddOrder from "../../hooks/useAddOrder";

export default function PurchaseSummary(){
    const {isLoading , cart ,productsTotalPrice} = useCart()
    const { addOrder , isPending} = useAddOrder()
    const navigate = useNavigate();
    const userInformation = JSON.parse(localStorage.getItem('userInfo'));

    const orderHandler = () => {
      if (userInformation?.name) {
        alert("به سفارش شما رسیدگی خواهد شد :)");
        
        const newOrder = { ...cart, userInformation }
        // console.log("newOrder",newOrder);
        addOrder(newOrder , {
          onSuccess : () => {
            CleanCart()
            navigate("/");
          }
        })
        
      } else {
        alert("لطفا ثبت نام کنید !");
        setTimeout(() => navigate("/SignUp"), 200);
      }
    };
    return (
      <div className="fixed bottom-0 right-0 z-[150] mt-6 flex w-full flex-row justify-center gap-4 rounded-none bg-white dark:bg-gray-700 dark:text-white/80 p-8 shadow-lg lg:relative lg:w-1/2 lg:flex-col lg:rounded-lg">
        <h3>قیمت کالا ها : {productsTotalPrice.toLocaleString("en")} تومان</h3>
        <button
          className="flex w-9/12 items-center justify-center rounded-md bg-violet-700 px-4 py-2 text-base text-white lg:w-full lg:rounded-full"
          onClick={orderHandler}
        >
          سفارش
        </button>
      </div>
    );

}



