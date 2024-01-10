import CircleCategories from "../features/Categories/CircleCategories";
import LandingBanner from "../features/HomeComponents/LandingBanner";
import Slider from "../features/HomeComponents/Slider";
import ProductSlider from '../features/HomeComponents/ProductSlider'
import Text from "../features/HomeComponents/Text";

export default function HomePage(){
    return(
        <div>
            <Slider/>
            <CircleCategories />
            <ProductSlider 
                title="موبایل ها"
                bgColor="bg-indigo-100 dark:bg-indigo-500/30"
                category="phones"
            />
            <LandingBanner />
            <Text />
            <ProductSlider 
                title="لپتاپ ها"
                bgColor="bg-violet-100 dark:bg-gray-700/50"
                category="laptops"
            />
       
        </div>
    )
}