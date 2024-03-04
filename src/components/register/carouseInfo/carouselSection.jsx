import { Swiper, SwiperSlide } from "swiper/react";

import { carouselData } from "../../../data/register";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

const CarouselSection = () => {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide per view for screens wider than or equal to 768px (mobile)
          },
          600: {
            slidesPerView: 2, // 1 slide per view for screens wider than or equal to 768px (mobile)
          },
          950: {
            slidesPerView: 3, // 2 slides per view for screens wider than or equal to 1024px (tablet)
          },
        }}
      >
        <div className="carousel-inside-boxes">
          {carouselData.map((curr, ind) => (
            <>
              <SwiperSlide key={ind}>
                <div className="carousel-inside-box">
                  <div>
                    <img className="carousel-img" src={curr.image} alt="" />
                  </div>
                  <h2 className="carousel-heading">{curr.heading}</h2>
                  <p className="carousel-para">{curr.para}</p>
                </div>
              </SwiperSlide>
            </>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default CarouselSection;
