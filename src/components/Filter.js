import React from "react";
export default function Filter({ value, onChangeFilter }) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      ></input>
    </>
  );
}
