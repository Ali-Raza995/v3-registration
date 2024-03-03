// import React from 'react'

import { userDetailsInput, userTableData } from "../../../data/register";
import CheckButton from "../../common/checkButton";
import InputFieldsSection from "../../common/inputFieldsSection";
import TableData from "./tableData";

const UserTable = () => {
  return (
    <>
      <h1 className="heading">Kundeopplysninger</h1>
      <div className="register-content user-contact">
        <div className="_section">
          <InputFieldsSection inputFields={userDetailsInput} />
        </div>
        <div />
        <div>
          <TableData userData={userTableData} />
          <div className="check-btn">
            <CheckButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
