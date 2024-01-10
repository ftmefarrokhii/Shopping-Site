import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useProduct from "../Product/useProduct";
import Product from "./Product";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function ProductSlider({
  category,
  title,
  bgColor,
  titleColor = "text-gray-900 dark:text-white/70",
  titleLineColor = "bg-gray-900 dark:bg-gray-800",
}){
    const {isLoading ,AllProducts } = useProduct()
    const productsToShow = AllProducts?.filter((p) => p.category === category);
  
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 3,
        arrows: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          }
        ]
      };
      return(
        <div
          className={`relative  flex w-full max-w-[2000px] m-auto flex-col  
          rounded-2xl ${bgColor} items-center justify-center
          py-6 lg:rounded-xl `}
        >
        <div className="container m-auto mr-0 2xl:mr-auto " >
            <div className="flex flex-col gap-3 text-white mr-1 md:mr-10">
                <div className="flex justify-between">
                  <p className={`text-2xl ${titleColor}`}>{title}</p>
                  <Link to={`/categories/${category}`} className="flex items-center">
                    <p className={`text-xl ${titleColor}`}>نمایش همه</p>
                    <IoIosArrowBack />
                  </Link>

                </div>
                <hr className={`h-[2px]${titleLineColor}`} />
            </div>
            <div className="mr-0">
              <Slider {...settings} >
                  {productsToShow && productsToShow.map((product) => {
                    return <Product key={product.id} product={product} />   
                  })}
              </Slider>

            </div>
      </div>
      </div>
      )

}

