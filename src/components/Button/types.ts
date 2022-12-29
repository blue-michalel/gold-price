import React from "react";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
  style?: React.CSSProperties;
}
