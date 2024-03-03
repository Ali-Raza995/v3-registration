import { userDetailsInput } from "../../../data/register";
import InputFieldsSection from "../../common/inputFieldsSection";
import CheckButton from "../../common/checkButton";

const UserContact = () => {
  return (
    <>
      <h1 className="heading">Kundeopplysninger</h1>
      <div className="register-content user-contact">
        <div className="_section">
          <InputFieldsSection inputFields={userDetailsInput} />

          <div className="_check-button-parent">
            <CheckButton />
          </div>
        </div>
        <div />
        <div />
      </div>
    </>
  );
};

export default UserContact;
