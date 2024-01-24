import { useState } from "react";
import { RiFilterOffFill } from "react-icons/ri";
import { useParams, useSearchParams } from "react-router-dom";
import useFilters from "../../hooks/useFilters";
import { ImArrowUp2 } from "react-icons/im";
import Skeleton from "../../ui/Skeleton";
import {React} from "react"
const Filters = () => {
    
    const {category} = useParams()
    const {isLoading ,filters } = useFilters()

    const filtersOption = filters?.[category === "phones" ? 0 : category === "tablets" ? 1 : category === "laptops" ? 2 : category === "consoles" ? 3 : category === "headphones" ? 4 : category === "digitalWatches" ? 5 : category === "speakers" ? 6 : ""][category]
    // console.log("filtersOption" , filtersOption);

    const [searchParams, setSearchParams] = useSearchParams();
    // console.log("searchParams" ,searchParams);

    const serializeFormQuery = () => {
        const allParams = {};
        for (const entry of searchParams.entries()) {
        const [key, value] = entry;
        allParams[key] = value;
        }
        return allParams;
    };

    const generateFiltersState = () => {
        const currentFilters = {};
        filtersOption?.forEach((p) => {
          currentFilters[p.key] = false;
        });
        return currentFilters;
    };
    const [showFilters, setShowFilters] = useState(generateFiltersState);

    const toggleShowFilterOptionHandler = (key)=>{
        setShowFilters({ ...showFilters, [key]: !showFilters[key] })
    }
    const checkBoxHandler = (e, itemkey) => {
        const allParams = serializeFormQuery();
        if (e.target.checked) {
        setSearchParams({ ...allParams, [itemkey]: true });
        } else {
        const newParams = { ...allParams };
        delete newParams[itemkey];
        setSearchParams(newParams);
        }
    }
  
    if(category){
        return(
            <div className="hidden lg:flex lg:flex-col bg-slate-200 dark:bg-slate-600 m-3 mr-0 rounded-xl p-3 space-y-3 w-80 h-auto">
                <div className="flex w-full items-center justify-between">
                    <p className="text-xl text-gray-600 dark:text-white/70">فیلتر ها</p>
                    <button
                        onClick={() => setSearchParams({})}
                        className={`flex items-center justify-center gap-2 rounded-2xl p-2 text-base text-white ${
                            searchParams.toString().length === 0 ? " bg-gray-300 dark:bg-gray-400" : " bg-red-500"
                        }`}
                        >
                        حذف فیلتر ها <RiFilterOffFill />
                    </button>
                </div>

                {filtersOption && filtersOption?.map((filterOpt)=>(
                    <div className="flex w-full flex-col overflow-hidden rounded-lg bg-gray-100 px-4 py-2
                    text-base dark:bg-slate-800">
                        <span className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleShowFilterOptionHandler(filterOpt.key)}
                        >
                            <p
                                className={`flex w-full items-center text-lg justify-between font-EstedadFont lg:cursor-pointer ${
                                    showFilters[filterOpt.key]
                                    ? "text-violet-700 dark:font-bold dark:text-violet-400"
                                    : "text-gray-800 dark:text-white/70"
                                }`}
                                >
                                {filterOpt.title}
                                <ImArrowUp2
                                    className={`${showFilters[filterOpt.key] ? "rotate-180" : ""}`}
                                />
                            </p>
                        </span>

                        <span
                            className={`flex flex-col items-center justify-start gap-1  ${
                            showFilters[filterOpt.key]
                                ? "pt-4 opacity-100 "
                                : "h-0 scale-0 opacity-0"
                            }`}
                        >
                            {filterOpt.options.map((item) => { 
                            const checked = Object.keys(serializeFormQuery()).find(
                                (o) => o === item.key,
                            );
                            return (
                                <label
                                className="flex w-full items-center justify-start gap-2 font-EstedadFont dark:text-white/70"
                                key={item.title}
                                >
                                <input
                                    className="flex h-3 w-3 items-center justify-center rounded-2xl p-1"
                                    type="checkbox"
                                    checked={checked ? true : false}
                                    onChange={(e) => checkBoxHandler(e, item.key)}
                                />
                                {item.title}
                                </label>
                            );
                            })}
                        </span>
                    </div>
                ))}
            </div>
        )
    }else{
        return <Skeleton width={"20rem"} height={"20rem"} radius={"30px"} />
    }
}

export default Filters
