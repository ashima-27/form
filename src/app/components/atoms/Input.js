import React from "react";

const Input = ({
  type = "text",
  placeholder,
  className,
  onBlur,
  onFocus,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`text-md text-black ${className}`}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};

export default Input;
