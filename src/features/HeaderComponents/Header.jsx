import TabHeader from "./TabHeader";
import TopHeader from "./TopHeader";

export default function Header(){
    return(
        <div className="sticky left-0 top-0 z-[1000] flex w-full max-w-[2000px] ml-auto mr-auto flex-col items-center rounded-xl
         justify-center gap-4 bg-white p-3 shadow-md shadow-slate-600 dark:bg-gray-800 dark:text-white 
         lg:items-start lg:px-8 lg:py-4">
            <TopHeader />
            <div className="hidden lg:flex">
            <TabHeader />
                </div>
        </div>
    )
    
}