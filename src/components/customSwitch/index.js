import React from "react";

export default function Switch({ label }) {
  return (
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
  );
}
