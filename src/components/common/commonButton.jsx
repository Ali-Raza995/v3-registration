/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";

const CommonButton = ({ btnText, imgPath }) => {
  return (
    <Button className="_check-button">
      {btnText ? (
        <span>{btnText}</span>
      ) : (
        <img src={imgPath} alt="" className="checkIcon-image" />
      )}
    </Button>
  );
};

export default CommonButton;
