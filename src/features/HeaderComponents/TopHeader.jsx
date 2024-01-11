import { useEffect, useState } from "react";
import { MdOutlineSearch , MdShoppingCart} from "react-icons/md";
import DarkModeToggle from "../../ui/DarkModeToggle";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import Backdrop from "../../ui/BackDrop";
import { HiSquares2X2 } from "react-icons/hi2";
import useProduct from "../Product/useProduct";

export default function TopHeader(){
    const[inputValue,setInputValue] = useState("")
    const[searchSelected,setSearchSelected] = useState()
    const [productsFound, setProductsFound] = useState("");
    const {isLoading ,AllProducts } = useProduct()
    const[user,setUser] = useState("")

    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('userInfo'));
        if(items){
            setUser(items?.name)
        }
    },[])

    const searchHandler =(searchValue)=>{
        setInputValue(searchValue)
        setProductsFound(
            AllProducts?.filter((p) => p.title.toLowerCase().includes(searchValue)),
        );
    }
    const searchBoxSelectedHandler = () => {
        setSearchSelected(!searchSelected)
        setInputValue("");
        setProductsFound("");
    }
    const { cart } = useCart()
    // const logoutHandler = () => {
    //     localStorage.removeItem("userInfo")
    // }

    return (
        <div className="flex flex-col lg:flex-row gap-y-3 w-full justify-between">
            
            <div className="flex lg:gap-12 justify-between items-center">
                
                <Menu />
                <div>  
                    <img src="../src/assets/logo2.svg" className="hidden dark:block w-20 md:w-40" alt="" />  {/* logo for dark theme*/}
                    <img src="../src/assets/logo.svg" className="dark:hidden w-20 md:w-40 " alt="" />
                </div>

                {searchSelected && (
                    <Backdrop show={searchSelected} setShow={setSearchSelected} />
                )}
                <div className=" relative w-full justify-start  rounded-lg gap-x-3
                border hidden lg:flex border-gray-400 items-center  bg-gray-200 p-3 dark:bg-slate-600"
                onClick={()=> !searchSelected && searchBoxSelectedHandler() }>
                
                    <MdOutlineSearch size={25}/>
                    <input type="text" placeholder="محصول مورد نطرتان را جستجو کنید" 
                    className="flex w-full items-center justify-start bg-transparent"
                        value={inputValue} onChange={(e) => searchHandler(e.target.value.toLowerCase())} 
                    />
                </div>

                {productsFound && searchSelected && (
                    <div className="absolute right-3 top-[140px] z-[1000] flex max-h-64 w-[90%] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white p-4 dark:bg-gray-800 lg:right-[200px]  2xl:right-[350px] lg:top-[100px] lg:max-h-[30rem] lg:w-[28rem]">
                    <div className="mr-8 flex w-full items-center justify-start gap-2 text-lg text-gray-700 dark:text-white/80">
                        <HiSquares2X2 />
                        جستجو برای ...
                        {inputValue}
                    </div>
                    {productsFound.length !== AllProducts.length && (
                        <div className="flex h-full w-full flex-col items-center justify-start gap-6 overflow-auto">
                        {productsFound.map((product) => {
                            return <Product key={product.id} product={product} searchBoxSelectedHandler={searchBoxSelectedHandler}/>
                        })}
                        </div>
                    )}
                    </div>
                )}




                <div className="lg:hidden border border-slate-500 p-2 rounded-md flex">
                    <DarkModeToggle />
                </div >

                {user ? (
                    <div className=" lg:hidden flex items-center gap-3 justify-between">
                        {/* <button onClick={logoutHandler}>log out</button> */}
                        <span>{user}</span>
                    </div>

                ):(
                <Link to="/SignUp">
                    <button  className="rounded-lg border lg:hidden border-slate-500 px-4 py-2 ml-2">
                            ثبت نام | ورود
                    </button>
                </Link>

                )}


                 
                

            </div>

            <div className="flex justify-between items-center ml-2 mr-2 lg:gap-6  gap-x-10">

                <div className="flex items-center border lg:hidden border-gray-100 gap-x-3 flex-grow
                 bg-gray-200 p-3 dark:bg-slate-600 rounded-lg"
                 onClick={()=> !searchSelected && searchBoxSelectedHandler() }>
                 
                    <MdOutlineSearch size={25}/>
                    <input type="text" placeholder="محصول مورد نطرتان را جستجو کنید"  
                    className="flex w-full items-center justify-start bg-transparent"
                        value={inputValue} onChange={(e) => searchHandler(e.target.value.toLowerCase())} 
                    />
                </div>
                {user ? (
                    <div className="hidden lg:flex items-center gap-3 justify-between">
                        {/* <button onClick={logoutHandler}>log out</button> */}
                        <span>{user}</span>
                    </div>
                ):(
                <Link to="/SignUp">
                    <button className="rounded-lg border hidden lg:flex border-slate-500 px-4 py-2">ورود | ثبت نام</button>
                </Link>

                )}
                
                <div className="hidden lg:flex border border-slate-500 p-2 rounded-md">
                    <DarkModeToggle />
                </div >
                <Link to="/cart">
                    <div className=" p-2 border border-slate-500 rounded-md relative">
                        <MdShoppingCart size={25}/>
                        <span className="absolute right-0 top-0 m-1 flex w-4 items-center justify-center rounded-lg bg-violet-700 text-xs text-white dark:bg-violet-700 dark:text-white">{cart?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

const Product = ({product , searchBoxSelectedHandler}) => {
    
    const { id, imageURL, title } = product;
    return (
        <Link to={`/product/${id}`} >
            <div onClick={()=> {
                searchBoxSelectedHandler()
            }}
            className="flex h-24 w-11/12 items-center justify-start gap-4 rounded-2xl p-2 lg:cursor-pointer"
            >
            <img className="w-1/4" src={imageURL} alt={title} />
            <p className="text-lg text-gray-600 dark:text-white/80">{title}</p>
        </div>
        </Link>
      
     );
  };


