import React from "react";
import { useLocation } from "react-router-dom"
import useProduct from "../features/Product/useProduct"
import Product from "../features/Product/Product";
import Loading from "../ui/Loading";
import Filters from "../features/Product/Filters";
import MobileFilters from "../features/Product/MobileFilters";

export default function ProductsPage(){

    const {isLoading , products } = useProduct()
    const {search} = useLocation()
    let filtered;

    const queryObject = Object.fromEntries(new URLSearchParams(search))
    // console.log("queryObject",queryObject);

    filtered = products?.filter(product => {
        return Object.entries(queryObject).every(([key, value]) => {
            const [property, expectedValue] = key.split('_');
            return product[property] === parseInt(expectedValue);
        });
    });

    if(isLoading) return <Loading />
    return(
        <div className="lg:flex max-w-[2000px] m-auto">
            <Filters />
            <div className="flex flex-col w-full border border-gray-400 rounded-xl shadow-md bg-slate-200 dark:bg-slate-600 m-3" >
                <div className="lg:flex items-center text-lg p-3 text-slate-800 hidden">
                    ترتیب :  
                    <button className="p-3">
                        پرفروش ترین
                    </button>
                    <button className="p-3">
                        کم ترین قیمت
                    </button>
                    <button className="p-3">
                        بیشترین قیمت
                    </button>
                    <button className="p-3">
                        جدیدترین
                    </button>
                    <p className="dark:bg-gray-300 rounded-xl p-2">تعداد محصولات : {filtered?.length}</p>
                </div>
                <div className="lg:hidden">
               
                    <MobileFilters />
                    <p className="rounded-xl p-2 w-auto text-lg text-slate-900 m-2 font-bold">تعداد محصولات : {filtered?.length}</p>
                    

                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full `}>
                    {filtered && filtered.map((product)=> (
                        <Product key={product.id} product={product}/>
                    ))}
                
                </div>
            </div>
        </div>
    )
}
