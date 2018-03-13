import React from 'react';

const TextInput = ({ type, name, maxLength,label, placeholder, handleChange }) => {
  let wrapperClass = 'form-group col-md-6';

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          maxLength={maxLength}
          className="form-control"
          placeholder={placeholder}
          onChange={handleChange}
        />
    </div>
  );
};

export default TextInput;
