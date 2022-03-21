import React from "react";
import { ButtonProps } from "./button.types";

import "./button.styles.scss";

const Button = ({ title, type, onClick }: ButtonProps) => {
  return (
    <button type="button" className={`button button-${type}`} onClick={onClick}>
      <span className="font--bold">{title}</span>
    </button>
  );
};

export default React.memo(Button);
