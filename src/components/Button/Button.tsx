import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ onClick, text, disabled, style }) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled} style={style}>
      {text}
    </button>
  );
};

export default Button;
