import { carouselInfoSections } from "../../../data/register";
import InputFieldsSection from "../../common/inputFieldsSection";
import CarouselSection from "./carouselSection";

const CarouseInfo = () => {
  return (
    <>
      <h1 className="heading">Kjøretøyinfo</h1>
      <div className="register-content">
        <div className="_section">
          <InputFieldsSection inputFields={carouselInfoSections} />
        </div>
        <div className="_section">
          <div className="plain-text">
            <p className="text-one">Gratisperiode</p>
            <p className="text-two">Fyll inn hentedato</p>
          </div>
          <p className="text-three">Sesongpris etter gratisperiode</p>
          <p className="price-section">2 395,-</p>
        </div>
        <div className="carousel-main">
          <CarouselSection />
        </div>
      </div>
    </>
  );
};

export default CarouseInfo;
