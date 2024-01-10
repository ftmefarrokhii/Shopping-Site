import BackToUp from "../utils/BackToUp";
import { FaLongArrowAltUp } from "react-icons/fa";

export default function BackToUpComponent(){
    return(
        <div className="mt-12 mb-12 flex w-full items-center justify-center">
        <button
            className="flex items-center font-EstedadFont justify-center gap-2 rounded-lg border-2 font-bold
             border-slate-800 bg-none px-4 py-2 text-slate-800 dark:border-slate-100 dark:text-white" 
            onClick={() => BackToUp()}
        >
            بازگشت به بالا<FaLongArrowAltUp />
        </button> 
        </div>
    )
}