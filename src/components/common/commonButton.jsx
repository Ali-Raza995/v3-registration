/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";

const CommonButton = ({ btnText, imgPath, width = "90px" }) => {
  return (
    <Button className="_check-button" style={{width:width}}>
      {btnText ? (
        <span>{btnText}</span>
      ) : (
        <img src={imgPath} alt="" className="checkIcon-image" />
      )}
    </Button>
  );
};

export default CommonButton;
