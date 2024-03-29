import mobileBanner from "../../assets/bannerMobile.webp";
import consoleBanner from "../../assets/bannerConsole.webp";
import airpodsBanner2 from "../../assets/bannerAirpods2.webp";
import digitalWatchBanner from "../../assets/bannerDigitalWatch.webp";
import speakerBanner from "../../assets/bannerSpeaker.webp";
import tabletBanner from "../../assets/bannerTablet.webp";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../../ui/Skeleton";
const desktopSlides = [
  {
    id: 1,
    src: consoleBanner,
    link: "/categories/consoles",
  },
  { id: 2, src: mobileBanner, link: "/categories/phones" },
  {
    id: 3,
    src: airpodsBanner2,
    link: "/categories/headphones",
  },
  {
    id: 4,
    src: digitalWatchBanner,
    link: "/categories/digitalWatches",
  },
  {
    id: 5,
    src: tabletBanner,
    link: "/categories/tablets",
  },
  {
    id: 6,
    src: speakerBanner,
    link: "/categories/speakers",
  },
];
//   {
//     id: 2,
//     src: mobileBannerinMobile,
//     link: "/categories/phones",
//   },
//   {
//     id: 1,
//     src: consoleBannerInMobile,
//     link: "/categories/consoles",
//   },
//   {
//     id: 3,
//     src: airpodsBannerInMobile,
//     link: "/categories/headphones",
//   },
//   {
//     id: 4,
//     src: digitalWatchBannerInMobile,
//     link: "/categories/digitalWatches",
//   },
//   {
//     id: 5,
//     src: speakerBannerInMobile,
//     link: "/categories/speakers",
//   },
//   {
//     id: 6,
//     src: laptopsBannerInMobile,
//     link: "/categories/laptops",
//   },
// ];
const Slider = () => {
  const [slides, setSlides] = useState(desktopSlides);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(1);
  const timerTimeout = useRef();
  const [touchPosition, setTouchPosition] = useState(0);

  useEffect(() => {
    const autoSlideChanger = () => {
      clearTimeout(timerTimeout.current);
      const timeout = setTimeout(nextSlide, 10000);
      timerTimeout.current = timeout;
    };
    autoSlideChanger();

    return function cleanup() {
      clearTimeout(timerTimeout.current);
    };
  }, [index]);

  const fadeShowSlide = (index) => {
    setFade(0.4);
    setTimeout(() => {
      setIndex(index);
      setFade(1);
    }, 200);
  };
  const onTouchStartHandler = (e) => {
    setTouchPosition(e.touches[0].clientX);
  };
  const onTouchMoveHandler = (e) => {
    if (touchPosition === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;
    if (diff > 5) backSlide();
    if (diff < -5) nextSlide();
    setTouchPosition(null);
  };
  const nextSlide = () => {
    if (index !== slides.length - 1) fadeShowSlide(index + 1);
    else fadeShowSlide(0);
  };
  const backSlide = () => {
    if (index !== 0) fadeShowSlide(index - 1);
    else fadeShowSlide(slides.length - 1);
  };
  const renderSlider = () => {
    if (slides) {
      return (
        <div
          className="relative max-w-[2000px] ml-auto mr-auto flex w-full items-center justify-between overflow-hidden bg-none shadow-2xl lg:h-[20rem]  mt-3
          lg:rounded-none 2xl:h-[27rem]"
          onTouchStart={(e) => onTouchStartHandler(e)}
          onTouchMove={(e) => onTouchMoveHandler(e)}
        >
          <button
            className="absolute right-0 z-20 hidden h-full w-20 items-center justify-center rounded-l-full bg-slate-200/50 text-3xl text-white lg:flex lg:cursor-pointer lg:hover:w-24 lg:hover:bg-slate-200/70"
            onClick={nextSlide}
          >
            <IoIosArrowForward />
          </button>
          <Link to={slides[index].link} className="h-full w-full">
            <img
              src={slides[index].src}
              alt={consoleBanner}
              className="sliderAnimation h-full w-full bg-cover object-cover"
              style={{ opacity: fade }}
            />
          </Link>
          <button
            className="absolute left-0 z-20 hidden h-full w-20 items-center justify-center rounded-r-full bg-slate-200/50 text-3xl text-white lg:flex lg:cursor-pointer lg:hover:w-24 lg:hover:bg-slate-200/70"
            onClick={backSlide}
          >
            <IoIosArrowBack />
          </button>
          <div className="absolute bottom-2 left-auto right-auto flex w-full transform items-center justify-center  gap-3 p-2 lg:top-[280px] lg:-scale-x-100 2xl:top-[380px]">
            {slides.map((e, i) => {
              return (
                <div
                  key={e.id}
                  className={`h-2 w-2 rounded-full bg-white shadow-xl lg:cursor-pointer ${
                    slides.indexOf(e) === index
                      ? "w-6 rounded-lg opacity-100"
                      : "opacity-50"
                  }`}
                  onClick={() => fadeShowSlide(i)}
                ></div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <Skeleton width={"100%"} height={"17rem"} radius={"15px"} />;
    }
  };
  return renderSlider();
};

export default Slider;