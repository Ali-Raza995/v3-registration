// import Header from "../components/common/header";
import { useState } from "react";
import CommonButton from "../components/common/commonButton";
import InputFieldsSection from "../components/common/inputFieldsSection";
import CarDetails from "../components/register/carDetails/carDetails";
import CarouseInfo from "../components/register/carouseInfo/carouseInfo";
import OrderSuccessMessage from "../components/register/orderSuccessMessage/orderSuccessMessage";
import UserContact from "../components/register/userContact/userContact";
import UserDetails from "../components/register/userDetails/userDetails";
import { checkDetailsMap } from "../data/register";

const Register = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsFormSubmitted(true)
  }
  return (

    <div className="_parentContainer">
      {isFormSubmitted ? (
        <>

          <div className="container">
            <OrderSuccessMessage />
          </div>
        </>
      ) : (
        <>
          <div className="container">
            {/* <div className="_btn-parent">
          <Header />
        </div> */}
            <CarDetails />
          </div>
          <div className="container">
            <CarouseInfo />
          </div>
          <div className="container">
            <UserContact />
          </div>
          <div className="container">
            <UserDetails />
          </div>
          <div className="_map-footer">
            <InputFieldsSection inputFields={checkDetailsMap} />

            <CommonButton imgPath="/assets/icons8-tick-30.png" onClick={handleSubmit} />
          </div>
        </>
      )}
    </div>
  );
};

export default Register;
