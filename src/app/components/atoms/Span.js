import React from "react";

const Span = ({ children, className = "" }) => {
  return <span className={`text-gray-800 ${className}`}>{children}</span>;
};

export default Span;
