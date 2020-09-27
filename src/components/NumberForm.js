import React from "react";

export default function NumberForm({ value, onInputNumber }) {
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
