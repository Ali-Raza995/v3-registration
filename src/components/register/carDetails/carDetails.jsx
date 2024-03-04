/* eslint-disable react/prop-types */
import {
  inputFields,
  inputFieldsSection2,
  radioType,
} from "../../../data/register";
import InputFieldsSection from "../../common/inputFieldsSection";

const CarDetails = () => {
  return (
    <>
      <h1 className="heading">Kjøretøyinfo</h1>
      <div className="register-content userInfo">
        <div className="_section">
          <InputFieldsSection inputFields={inputFields} />
        </div>
        <div className="_section">
          <InputFieldsSection
            inputFields={inputFieldsSection2}
            radioType={radioType}
          />
        </div>
        <div className="_image-section">
          <img src="/assets/car-image.png" alt="car-image" />
          <div>
            <img src="/assets/brandlogo-2.png" alt="logo-image" />
          </div>
        </div>
      </div>
    </>
  );
};
export default CarDetails;
