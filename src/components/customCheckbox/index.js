import React from "react";

export default function Checkbox({ label }) {
  return (
    <label className="container">
      {label}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
}
