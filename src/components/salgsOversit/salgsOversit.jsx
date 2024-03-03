import Header from "../common/header";
import CarouselSection from "../register/carouseInfo/carouselSection";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SalgsOversitPage = () => {
  return (
    <div className="container">
      <div className="_btn-parent">
        <Header />
      </div>
      <div className="_noContent-text">
        <CarouselSection />
      </div>
    </div>
  );
};

export default SalgsOversitPage;
