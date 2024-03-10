/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";

const CommonButton = ({ btnText, imgPath, width = "90px", onClick }) => {
  return (
    <Button className="_check-button" style={{width:width}} onClick={onClick}>
      {btnText ? (
        <span>{btnText}</span>
      ) : (
        <img src={imgPath} alt="" className="checkIcon-image" />
      )}
    </Button>
  );
};

export default CommonButton;
