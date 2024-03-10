import Input from "./input";

/* eslint-disable react/prop-types */
const InputFieldsSection = (props) => {
  const { inputFields, radioType, mode } = props;
  return (
    <div className="_section">
      {inputFields.map((field, index) => (
        <div key={index} className="input-wrapper">
          <Input
            type={field.type}
            label={field.label}
            options={field.options}
            radioType={radioType}
            mode={mode}
          />
        </div>
      ))}
    </div>
  );
};

export default InputFieldsSection;
