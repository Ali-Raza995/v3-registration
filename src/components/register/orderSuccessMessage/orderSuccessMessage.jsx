import Header from "../../common/header";
import CommonButton from "../../common/commonButton";

const OrderSuccessMessage = () => {
  return (
    <>
      <div className="_btn-parent">
        <Header />
      </div>
      <div className="_orderSuccess">
        <p className="_thanks-message">
          Tusen takk for bestilling av dekkhotell!
        </p>
        <div className="_image-section">
          <img src="/assets/car-image.png" alt="car-image" />
        </div>

        <div className="_text-content">
          <p>Volkswagen</p>
          <p>ID.BUZZ PRO 77</p>
          <p>DR92828</p>
          <p>WVGZZZA1ZMV116508</p>
        </div>

        <div className="_btn-footer">
          <CommonButton btnText="Registrer ny" />
          <CommonButton btnText="Til behandling" />
        </div>
      </div>
    </>
  );
};

export default OrderSuccessMessage;
