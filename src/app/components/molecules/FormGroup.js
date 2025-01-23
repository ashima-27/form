import React from "react";
import { Label } from "../atoms/index";
import { Input, Span } from "../atoms/index";

const FormGroup = ({ label, inputProps, error, className = "" }) => {
  return (
    <div className={`flex gap-2 mb-4 ${className}`}>
      <Label htmlFor={inputProps.id}>{label}</Label>

      <Input {...inputProps} />

      {error && <Span className="text-red-500 text-sm">{error}</Span>}
    </div>
  );
};

export default FormGroup;
