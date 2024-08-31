import { useState } from "react";

const ReusableForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit("Ram")
    console.log("submited");
  };
  const handleOnchange = (e) => {
    console.log(e.target.value);
  };
  const generateFields = () => {
    const { fields } = props;
    console.log(fields)
    console.log(props.fields)
    return fields.map((field, index) => (
      <div key={index} className="form-group">
        <label>{field.lable}</label>
        <input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          onChange={handleOnchange}
        />
      </div>
    ));
  };
  return <form onSubmit={handleSubmit} className="reusable-form">
    {generateFields()}
    <button type="submit">Submit</button>
    </form>;
};

export default ReusableForm;
