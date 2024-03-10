import { userDetailsInput, userTableData } from "../../../data/register";
import InputFieldsSection from "../../common/inputFieldsSection";
import CheckButton from "../../common/checkButton";
import TableData from "../userTable/tableData";
import { useState } from "react";

const UserContact = () => {
  const [isTableShow, setIsTableShow] = useState(false);

  const handleClick = () => {
    setIsTableShow((prev) => !prev);
  };
  return (
    <>
      <h1 className="heading">Kundeopplysninger</h1>
      <div className="register-content user-contact">
        <div className="_section">
          <InputFieldsSection inputFields={userDetailsInput} />

          <div className="_check-button-parent">
            {!isTableShow && <CheckButton onClick={handleClick} />}
          </div>
        </div>
        <div />

        <div>
          {isTableShow && (
            <>
              <TableData userData={userTableData} />
              <div className="check-btn _table-btn">
                <CheckButton />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserContact;
