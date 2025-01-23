import React from "react";

const Label = ({ htmlFor, children, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-[#2B3674] ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
