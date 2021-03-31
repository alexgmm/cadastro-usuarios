import React from "react";

function Input({ label, type, placeholder, setValue }) {
  return (
    <div className="form-control">
      <label htmlFor={label.trim()}>{label}</label>
      <input
        id={label.trim()}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
