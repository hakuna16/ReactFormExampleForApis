import React from 'react';

const Button = ({ onClick, onChange }) => {
  return(
    <div>
      <button
        type="button"
        className="btn btn-default"
        onClick={onClick}
        onChange={onChange}>Submit
      </button>
    </div>
  );
};

export default Button;
