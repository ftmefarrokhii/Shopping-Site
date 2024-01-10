import { Link } from "react-router-dom";
import useCategories from "./useCategories";
import Loading from "../../ui/Loading"
export default function CircleCategories() {
    
    const {isLoading ,categories } = useCategories()
    console.log("categories",categories);
    if(isLoading) return <Loading />

    return (
        <div className="no-scrollbar max-w-[2000px] ml-auto mr-auto flex w-full items-center mt-4
         justify-start gap-2 overflow-auto p-4 lg:justify-evenly">
          {categories && categories.map((item) => {
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex w-full min-w-[40%] flex-col items-center justify-center gap-2 lg:min-w-max lg:cursor-pointer lg:hover:scale-105"
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageUrl}
                  className="h-32 w-32 rounded-full border-2 border-pink-600 p-1 dark:border-2 lg:h-36 lg:w-36"
                />
                <p className="text-slate-600 dark:text-white text-xl">
                  {item.title}
                </p>
              </Link>
            );
          })}
        </div>
    );  
};

