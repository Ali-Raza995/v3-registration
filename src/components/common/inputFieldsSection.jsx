import Input from "./input";

/* eslint-disable react/prop-types */
const InputFieldsSection = (props) => {
  const { inputFields, radioType, styles } = props;
  return (
    <div className="_section">
      {inputFields.map((field, index) => (
        <div key={index} className="input-wrapper">
          <Input
            type={field.type}
            label={field.label}
            options={field.options}
            radioType={radioType}
            styles={styles}
          />
        </div>
      ))}
    </div>
  );
};

export default InputFieldsSection;
