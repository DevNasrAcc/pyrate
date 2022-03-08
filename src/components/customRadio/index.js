import React from "react";

export default function Checkbox({ label }) {
  return (
    <label className="container">
      {label}
      <input type="radio" name="radio" className="radioInput" />
      <span className="radio"></span>
    </label>
  );
}
