import useCart from "../hooks/useCart";
import Loading from "../ui/Loading";
import EmptyCart from "../features/Cart/EmptyCart";
import HeaderOfCart from "../features/Cart/HeaderOfCart";
import PurchasedProducts from "../features/Cart/PurchasedProducts";
import PurchaseSummary from "../features/Cart/PurchaseSummary";

export default function CartPage(){
    const {isLoading , cart} = useCart()

    if(isLoading) return <Loading />

    function render(){
        if(cart?.length === 0 ){
            console.log("empty")
            return(
                <EmptyCart />
            )
        }else {
            return(
                <div className=" ml-auto mr-auto mt-4 flex min-h-[33rem] w-full max-w-[2000px] flex-col items-start">
                    <HeaderOfCart />
                    <div className="flex w-full flex-col items-start justify-between gap-8 lg:flex-row">
                        <PurchasedProducts />
                        <PurchaseSummary />
                    </div>
                </div>
            )
        }
    }

    return(
        <div >
            {render()}
        </div>
    )
}