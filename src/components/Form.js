import React from 'react';
import TextInput from './common/TextInput';
import SelectInput from './common/SelectInput';
import DatePickerInput from './common/DatePicker.js';
import Button from './common/Button';

const Form = ({selectDate, submitFormData, handleChange}) => {
  return (
    <div className="container">
      <form>
        <div className="form-row">
          <TextInput
            type="text"
            name="store"
            label="Store / Group"
            placeholder="Store Number"
            handleChange={handleChange}
          />
          <TextInput
            type="text"
            name="productGroup"
            label="Product Group"
            placeholder="MGP"
            handleChange={handleChange}
          />
          <DatePickerInput
            name="effectiveDate"
            value="Effective Date"
            selectDate={selectDate}
          />
          <TextInput
            type="text"
            maxLength="1"
            name="rangeClass"
            label="Range Class"
            placeholder="Range Class"
            handleChange={handleChange}
          />
          <SelectInput
            handleChange={handleChange}
            name="documentType"
            label="Document Type"
            defaultOption=""
            options={[
                      { value: "RANGESCHEDULE", label: "RANGESCHEDULE" },
                      { value: 'RangeGroup', label: 'RangeGroup' },
                      { value: 'Range', label: 'Range' },
                      { value: 'Store Overlay', label: 'Store Overlay' },
                      { value: 'Store Range Group', label: 'Store Range Group' },
                    ]}
          />
          <SelectInput
            handleChange={handleChange}
            name="rangeType"
            label="Range Type"
            defaultOption=""
            options={[
                      { value: "Cluster", label: "Cluster" },
                      { value: 'Overlay', label: 'Overlay' },
                      { value: 'Promotions', label: 'Promotions' },
                      { value: 'Central Range', label: 'Central Range' },
                      { value: 'Local Choice', label: 'Local Choice' },
                      { value: 'Central Variation', label: 'Central Variation' },
                    ]}
          />
          <Button
            type="button"
            onClick={submitFormData}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
