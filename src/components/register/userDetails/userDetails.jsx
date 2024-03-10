import { Form } from "react-bootstrap";
import {
  checkDetails,
  userDetailsSection,
  userDetailsSection2,
} from "../../../data/register";
import InputFieldsSection from "../../common/inputFieldsSection";

const UserDetails = () => {
  return (
    <>
      <h1 className="heading">Kundeopplysninger</h1>
      <div className="register-content user-contact">
        <div className="_section">
          <div>
            <p className="text-one">Fornavn</p>
            <p className="text-two">Kjetil André</p>
          </div>
          <div>
            <p className="text-one">Etternavn</p>
            <p className="text-two">Flor</p>
          </div>
          <InputFieldsSection inputFields={userDetailsSection} />

          <div>
            <Form.Label htmlFor="inputPassword5">Postnummer og sted</Form.Label>
            <div className="_input-post">
              <Form.Control
                type="number"
                placeholder="1366"
                className="_input-post-field"
              />
              <p className="text-two">Lysaker</p>
            </div>
          </div>

          <InputFieldsSection inputFields={checkDetails} />
        </div>
        <InputFieldsSection inputFields={userDetailsSection2} />

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6620.561625547313!2d-117.94504060664674!3d33.933904942806855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x80dd2aaeff6e9f5b%3A0xe96225ab1cf18422!2sLa%20Habra%2C%20CA%2090631%2C%20United%20States!3m2!1d33.93194!2d-117.933618!4m5!1s0x80dd2ab4c367e0c3%3A0x5bc18fc369be1d28!2s210%20E%20Rose%20Ave%2C%20La%20Habra%2C%20CA%2090631%2C%20United%20States!3m2!1d33.9357519!2d-117.9446023!5e0!3m2!1sen!2sin!4v1706692189905!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          />
          <div className="_map-elements-parent">
          <div className="_map-elements">
            <img src="/assets/red-map-icon.png" alt="" width="20" height="20" />
            <p>Valgt avdeling </p>
          </div>
          <div className="_map-elements">
            <img
              src="/assets/grey-map-icon.png"
              alt=""
              width="20"
              height="20"
            />
                        <p>Mittdekkhotell avdelinger </p>
          </div>

          <div className="_map-elements">

            <img
              src="/assets/blue-map-icon.png"
              alt=""
              width="20"
              height="20"
            />
            <p>Kundens adresse</p>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
