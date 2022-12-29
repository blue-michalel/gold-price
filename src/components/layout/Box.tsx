import React from "react";
import { BoxTypes } from "./typings";

const Box: React.FC<Partial<BoxTypes>> = ({ center, children, style }) => {
  const styles: React.CSSProperties = {
    textAlign: center ? "center" : undefined,
    ...style,
  };

  return <div style={styles}>{children}</div>;
};

export default Box;
