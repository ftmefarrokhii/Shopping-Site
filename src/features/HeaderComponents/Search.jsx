import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import Backdrop from "../../ui/BackDrop";

export default function Search({cls}){
    const[inputValue,setInputValue] = useState("")
    const[searchSelected,setSearchSelected] = useState()

    const searchHandler =(searchValue)=>{
        console.log("searchValue",searchValue);
        setInputValue(searchValue)
        console.log("inputValue",inputValue);

    }
    const searchBoxSelectedHandler = () => {
        setSearchSelected(!searchSelected)
    }
    return (
        <>
            {searchSelected && (
                <Backdrop show={searchSelected} setShow={setSearchSelected} />
            )}
            <div className={searchSelected ? cls : "relative z-[1000] flex w-[25rem] items-center justify-start gap-4 rounded-md bg-white p-3 dark:bg-slate-500"}
                onClick={()=> !searchSelected && searchBoxSelectedHandler() }>
                <MdOutlineSearch size={25}/>
                <input type="text" placeholder="محصول مورد نطرتان را جستجو کنید" 
                    className="flex w-full items-center justify-start bg-transparent"
                    value={inputValue} onChange={(e) => searchHandler(e.target.value)} 
                />
            </div>
        </>
    )
}

