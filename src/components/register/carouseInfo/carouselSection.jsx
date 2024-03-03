// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

const CarouselSection = () => {
  return (
    <div className="carousel-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <div className="carousel-inside-boxes">
          <SwiperSlide>
            <div className="carousel-inside-box">
              <img
                className="carousel-img"
                src="/assets/car-image.png"
                alt=""
              />
              <h2 className="carousel-heading">Hjulskift</h2>
              <p className="carousel-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                natus beatae inventore voluptatum quasi officiis molestias,
                veniam aliquid praesentium, dignissimos ex nisi cumque vero in,
                reiciendis ipsa possimus aperiam. Molestiae.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-inside-box">
              <img
                className="carousel-img"
                src="/assets/car-image.png"
                alt=""
              />
              <h2 className="carousel-heading">Hjulskift</h2>
              <p className="carousel-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                natus beatae inventore voluptatum quasi officiis molestias,
                veniam aliquid praesentium, dignissimos ex nisi cumque vero in,
                reiciendis ipsa possimus aperiam. Molestiae.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-inside-box">
              <img
                className="carousel-img"
                src="/assets/car-image.png"
                alt=""
              />
              <h2 className="carousel-heading">Hjulskift</h2>
              <p className="carousel-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                natus beatae inventore voluptatum quasi officiis molestias,
                veniam aliquid praesentium, dignissimos ex nisi cumque vero in,
                reiciendis ipsa possimus aperiam. Molestiae.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-inside-box">
              <img
                className="carousel-img"
                src="/assets/car-image.png"
                alt=""
              />
              <h2 className="carousel-heading">Hjulskift</h2>
              <p className="carousel-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                natus beatae inventore voluptatum quasi officiis molestias,
                veniam aliquid praesentium, dignissimos ex nisi cumque vero in,
                reiciendis ipsa possimus aperiam. Molestiae.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-inside-box">
              <img
                className="carousel-img"
                src="/assets/car-image.png"
                alt=""
              />
              <h2 className="carousel-heading">Hjulskift</h2>
              <p className="carousel-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                natus beatae inventore voluptatum quasi officiis molestias,
                veniam aliquid praesentium, dignissimos ex nisi cumque vero in,
                reiciendis ipsa possimus aperiam. Molestiae.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-inside-box">
              <img
                className="carousel-img"
                src="/assets/car-image.png"
                alt=""
              />
              <h2 className="carousel-heading">Hjulskift</h2>
              <p className="carousel-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                natus beatae inventore voluptatum quasi officiis molestias,
                veniam aliquid praesentium, dignissimos ex nisi cumque vero in,
                reiciendis ipsa possimus aperiam. Molestiae.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-inside-box">
              <img
                className="carousel-img"
                src="/assets/car-image.png"
                alt=""
              />
              <h2 className="carousel-heading">Hjulskift</h2>
              <p className="carousel-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                natus beatae inventore voluptatum quasi officiis molestias,
                veniam aliquid praesentium, dignissimos ex nisi cumque vero in,
                reiciendis ipsa possimus aperiam. Molestiae.
              </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default CarouselSection;
