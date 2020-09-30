import React from "react";
import PropTypes from "prop-types";

function NumberForm({ value, onInputNumber }) {
  return (
    <>
      <label>
        Number
        <input
          placeholder="Enter number"
          type="number"
          value={value}
          onChange={(e) => onInputNumber(e.target.value)}
          name="number"
        ></input>
      </label>
    </>
  );
}

NumberForm.propTypes = {
  value: PropTypes.string.isRequired,
  onInputNumber: PropTypes.func.isRequired,
};

export default NumberForm;
