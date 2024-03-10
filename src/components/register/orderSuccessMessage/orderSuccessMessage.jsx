import CommonButton from "../../common/commonButton";

const OrderSuccessMessage = () => {
  return (
    <>
      {/* <div className="_btn-parent">
        <Header />
      </div> */}
      <div className="_orderSuccess">
        <p className="_thanks-message">
          Tusen takk for bestilling av dekkhotell!
        </p>
        <div className="_image-section">
          <img src="/assets/car-image.png" alt="car-image" />
          <div>
            <img src="/assets/brandlogo-2.png" alt="logo-image" />
          </div>
        </div>

        <div className="_text-content">
          <p>Volkswagen</p>
          <p>ID.BUZZ PRO 77</p>
          <p>DR92828</p>
          <p>WVGZZZA1ZMV116508</p>
        </div>

        <div className="_btn-footer">
          <CommonButton btnText="Registrer ny" width="120px" />
          <CommonButton btnText="Til behandling" width="120px" />
        </div>
      </div>
    </>
  );
};

export default OrderSuccessMessage;
