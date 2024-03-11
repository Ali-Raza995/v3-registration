import { Swiper, SwiperSlide } from "swiper/react";

import { carouselData } from "../../../data/register";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

const CarouselSection = () => {
  return (
    <div className="_carousel-parent">
      <p className="_carousel-header">Hva er inkludert?</p>
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
            500: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
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
    </div>
  );
};

export default CarouselSection;
