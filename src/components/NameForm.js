import React from "react";
import PropTypes from "prop-types";

function NameForm({ value, onInputName }) {
  return (
    <>
      <label>
        Name
        <input
          placeholder="Enter name"
          autoComplete="off"
          type="text"
          value={value}
          onChange={(e) => onInputName(e.target.value)}
          name="text"
        ></input>
      </label>
    </>
  );
}

NameForm.propTypes = {
  value: PropTypes.string.isRequired,
  onInputName: PropTypes.func.isRequired,
};

export default NameForm;
