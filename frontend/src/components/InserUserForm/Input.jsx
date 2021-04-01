import React from "react";

function Input({ label, type, placeholder, errorMessage, setValue }) {
  return (
    <div className="form-control">
      <div className="input-field">
        <label htmlFor={label.trim()}>{label}</label>
        <input
          className={errorMessage === "" ? "" : " error"}
          id={label.trim()}
          type={type}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <span className="input-error-message">{errorMessage}</span>
    </div>
  );
}

export default Input;
