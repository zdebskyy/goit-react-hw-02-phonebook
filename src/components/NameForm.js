import React from "react";

export default function NameForm({ value, onInputName }) {
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
