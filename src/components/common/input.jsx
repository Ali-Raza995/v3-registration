/* eslint-disable react/prop-types */
// import React from 'react'

import { Form } from "react-bootstrap";

const Input = (props) => {
  const { label, type, options, radioType, handleChangeCheck, index } = props;
  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <>
            <Form.Label htmlFor="inputPassword5">{label}</Form.Label>
            <Form.Select aria-label="Default select example">
              {options?.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </>
        );
      case "text":
        return (
          <>
            <Form.Label htmlFor="inputPassword5">{label}</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </>
        );
      case "textarea":
        return (
          <>
     <Form.Control
        as="textarea" // Use "as" instead of "type" for textarea
        className="_text-area-input"
        style={{ height: "130px", resize: "none" }} 
        placeholder="Enter text"
      />
          </>
        );
      case "number":
        return (
          <>
            <Form.Label htmlFor="inputPassword5">{label}</Form.Label>
            <Form.Control type="number" placeholder="Enter your number" />
          </>
        );
      case "password":
        return (
          <>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </>
        );
      case "radio":
        return (
          <div className="_input-radio">
            {radioType.map((radio, index) => (
              <Form.Check
                key={index}
                type="radio"
                id="radio-1"
                label="Nybil"
                name="formHorizontalRadios"
              />
            ))}
          </div>
        );
      case "date":
        return (
          <>
            <Form.Label htmlFor="inputPassword5">Hentedato</Form.Label>
            <Form.Control type="date" placeholder="date" />
          </>
        );
      case "checkbox":
        return (
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              onChange={(e) => handleChangeCheck(e, index)}
              type="checkbox"
              className="largerCheckbox"
              label={label}
            />
          </Form.Group>
        );
      default:
        return <p>Unsupported input type.</p>;
    }
  };

  return <div className="input-content">{renderInput()}</div>;
};

export default Input;
