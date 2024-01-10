import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, price, imageURL } = product;
          
  return (
    <Link to={`/product/${id}`}>
      <div className="relative flex h-[17.5rem] w-[12.5rem] flex-col items-center justify-end gap-4 rounded-xl
      bg-white p-2 shadow-lg dark:bg-gray-800 dark:text-white/80 lg:h-[19.5rem] mt-20">
      
        <div className="outline-3 absolute left-auto right-auto top-[-2rem] w-10/12 rounded-full bg-white 
        p-2 shadow-lg outline-gray-500 dark:bg-gray-700 dark:outline dark:outline-offset-1
        dark:outline-violet-500/80 lg:top-[-2rem] lg:w-11/12 lg:cursor-pointer">
          <img
            className="scale-90" 
            src={imageURL}
            alt={title}
          />
        </div>
        <p className="w-full text-center font-EstedadFont text-[0.85rem] lg:cursor-pointer">
          {title.length > 24 ? title.slice(0, 24) + "..." : title}
        </p>
        <div className="flex w-full flex-col items-center justify-end gap-4"> 
          <p className={`text-base`}>{price.toLocaleString("en")} تومان</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
