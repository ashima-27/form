import React from "react";

const Heading = ({ level = 1, children, className = "" }) => {
  const Tag = `h${level}`;
  return (
    <Tag className={`text-gray-800 font-bold ${className}`}>{children}</Tag>
  );
};

export default Heading;
