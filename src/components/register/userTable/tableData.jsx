/* eslint-disable react/prop-types */
import { useState } from "react";

import { Table } from "react-bootstrap";
import Input from "../../common/input";

const TableData = ({ userData }) => {
  const [checkedRows, setCheckedRows] = useState(
    new Array(userData.length).fill(false)
  );

  const handleChangeCheck = (event, index) => {
    // Create a new array with the updated checked state for the specific row.
    const newCheckedRows = [...checkedRows];
    newCheckedRows[index] = event.target.checked;
    setCheckedRows(newCheckedRows);
  };

  return (
    <Table className="user-table" striped bordered responsive hover size="sm">
      <thead>
        <tr>
          <th>Mener du en av disse?</th>
          <th>Mobnr. match</th>
          <th>E-post match</th>
        </tr>
      </thead>
      <tbody>
        {userData?.map((content, ind) => (
          <tr key={ind}>
            <td>{content}</td>
            <td>
              {checkedRows[ind] && (
                <img
                  className="tick-img"
                  src="/assets/icons8-tick-30-green.png"
                  alt=""
                />
              )}
            </td>
            <td>
              {checkedRows[ind] && (
                <img
                  className="tick-img"
                  src="/assets/icons8-tick-30-green.png"
                  alt=""
                />
              )}
            </td>
            <td>
              <Input
                type={"checkbox"}
                handleChangeCheck={handleChangeCheck}
                index={ind}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableData;
