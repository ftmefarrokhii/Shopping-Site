import Loading from "../ui/Loading";
import useProduct from "../features/Product/useProduct";
import Introduction from "../features/SingleProduct/Introduction";
import Seller from "../features/SingleProduct/Seller";
import Points from "../features/SingleProduct/Points";
import Scores from "../features/SingleProduct/Scores";
import Comments from "../features/SingleProduct/Comments";
import { useRef } from "react";
import Badge from "../ui/Badge";
import AddComment from "../features/SingleProduct/AddComment";

export default function SingleProductPage(){
    const userComments = useRef();
    
    const {isLoading ,SingleProduct} = useProduct()
    if(isLoading ) return <Loading />
    return(
        <div className="w-full max-w-[2000px] m-auto p-5"> 
            {SingleProduct && SingleProduct.map((product)=>{
                return(
                    <div className="max-w-[2000] dark:text-white space-y-3">
                        <p className="fadeShow text-2xl">{product.title}</p>

                        <Badge reference={userComments} title="نظرات کاربران" />

                        <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-row lg:justify-between max-w-[2000]">
                            <Introduction product={product} />
                            <hr className="bg-white/60 lg:h-80 lg:w-[1px]" />
                            <Seller product={product} />
                        </div>
                        <Points advantages={product.positivePoints} disadvantages={product.negativePoints}/>
                        <Scores Specifications={product.Specifications}/>
                        <div ref={userComments} className="w-full dark:rounded-xl ">

                            <Comments comments={product.comments}/>
                        </div>
                        <AddComment product={product}/>
                    </div>
                )
            })}
        </div>
    )
}