import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, FreeMode, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
// import { useRef } from "react"

// icons
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function SloderSwiper({ data }) {
  
  return (
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
      autoplay={{ delay: 3000 }}
      modules={[FreeMode, Pagination, Navigation, Autoplay]}
      loop={true}
      // key={key}
      className="group/swiper  rounded-md w-full flex gap-4 items-center  shadow-2xl    justify-center  relative "
    >
      {data.map((data, k) => {
        const {name,img,desc} =data
        return <SwiperSlide key={k}>
          <div className="h-[480px] w-full bg-black/30  flex  items-center  justify-center relative ">
            <div
              className="h-full w-full bg-cover bg-center "
              style={{ backgroundImage: `url(${img})` }}
            ></div>
            <div className="flex flex-col gap-3  items-center  w-full px-2 absolute text-gay-800 bg-slate-50/25 p-[60px] rounded backdrop-blur-sm ">
              <p className="font-semibold md:text-lg z-30 w-2/3 ">
               {desc}
              </p>
              <Link
                to={`/all-product/${name}`}
                className="p-3 bg-blue-400 w-max rounded-md mx-auto capitalize"
              >
                {name}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      })}
      {/* icons of slider */}
      <div className="   w-full flex absolute justify-between items-center  top-[50%] px-3">
        <button className="prev  group-hover/swiper:bg-white  z-10  bg-white/25  trasintion duration-300 text-black   rounded-full p-4 cursor-pointer">
          <FaChevronLeft />
        </button>
        <button className="next  group-hover/swiper:bg-white z-10 bg-white/25  trasintion duration-300 text-black  rounded-full   p-4 cursor-pointer">
          <FaChevronRight />
        </button>
      </div>
    </Swiper>
  );
}
