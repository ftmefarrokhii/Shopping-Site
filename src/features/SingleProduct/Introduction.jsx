import { BsCpu } from "react-icons/bs";
import { MdScreenshot } from "react-icons/md";
import { RiSpeakerLine } from "react-icons/ri";
import { CgSmartphoneRam } from "react-icons/cg";
import { FiCamera } from "react-icons/fi";
import { FaDigitalTachograph } from "react-icons/fa";
import { GiBatteryPackAlt } from "react-icons/gi";

const Introduction = ({product}) => {
    const productProperties = [];
    Object.values(product.Specifications).forEach((value) => {
      productProperties.push({ title: value.title, icon: value.icon });
    });

    return (
      <div className="flex w-full flex-col gap-3 md:flex-row  lg:justify-between text-black dark:text-white">
        <div className="order-1  flex w-full flex-col justify-center gap-3 lg:order-none">
          <h3 className="text-lg">ویژگی های اصلی</h3>
          <div className="flex w-full flex-col items-start justify-center gap-1">
            {productProperties.map((p) => {
              return (
                <div
                  className="flex w-full items-center justify-start gap-4 border-b border-gray-300 p-1"
                  key={p.title}
                >
                  {/* {p.icon} */}
                  {p.title === "پردازنده / Apple A15 Bionic" ? <BsCpu />  : (
                    p.title === "صفحه نمایش / 6.1 اینچ" ? <MdScreenshot /> : (
                    p.title === "اسپیکر / استریو ( دوگانه )" ? <RiSpeakerLine /> : (
                    p.title === "رم / 4 گیگابایت رم" ? <CgSmartphoneRam /> : (
                    p.title === "دوربین اصلی / 12 مگاپیکسل" ? <FiCamera /> : (
                    p.title === "حافظه داخلی / 256 گیگابایت" ? <FaDigitalTachograph /> : (
                    p.title === "باتری / 3240 میلی آمپر ساعت" ? <GiBatteryPackAlt /> : ""))))))
                  }
                  <p>{p.title}</p>

                </div>
              );
            })}
          </div>
        </div>
        <img
          className="h-[21rem] w-full lg:w-1/2 md:order-1 "
          src={product.imageURL}
          alt={product.title}
        ></img>
        
      </div>
    );
}

export default Introduction;