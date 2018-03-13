import React from 'react';

const SelectInput = ({ name, label, handleChange, defaultOption, options= [] }) => {
  return (
    <div className="form-group col-md-6">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          onChange={handleChange}
          className="form-control col-md-6">
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.value}</option>;
          })
          }
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
