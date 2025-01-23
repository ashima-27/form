import React from "react";

const Input = ({
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder,
  className = "",
  disabled = false,
  required = false,
  autoComplete = "off",
  maxLength,
  minLength,
  pattern,
  onBlur,
  onFocus,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-gray-300 rounded px-3 py-2 w-full ${className}`}
      disabled={disabled}
      required={required}
      autoComplete={autoComplete}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export default Input;
