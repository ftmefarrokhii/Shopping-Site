import {AiOutlineDislike, AiOutlineLike, AiOutlinePlusCircle} from "react-icons/ai"
export default function Points({advantages , disadvantages}){
    console.log("advantages",advantages);
    console.log("disadvantages",disadvantages);

    
    return(
        <div className="flex flex-col lg:flex-row gap-3 max-w-[2000] mt-3">
            <div className="flex w-full flex-col items-start justify-start gap-2 rounded-md bg-violet-100 p-5 dark:bg-gray-700">
                <div className="flex items-center justify-start gap-2 text-2xl text-violet-700 dark:text-violet-100">
                    <AiOutlineLike />مزایا :
                </div>
                {advantages && advantages.map((adv)=>(
                    <div key={adv} className="flex w-full items-center justify-start gap-2">
                        <AiOutlinePlusCircle />
                        {adv}
                    </div>
                ))}
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2 rounded-md bg-violet-100 p-5 dark:bg-gray-700">
                <div className="flex items-center justify-start gap-2 text-2xl text-violet-700 dark:text-violet-100">
                    <AiOutlineDislike />معایب :
                </div>
                {disadvantages && disadvantages.map((disadv)=>(
                    <div key={disadv} className="flex w-full items-center justify-start gap-2">
                        <AiOutlinePlusCircle />
                        {disadv}
                    </div>
                ))}
            </div>
        </div>
    )
    
}