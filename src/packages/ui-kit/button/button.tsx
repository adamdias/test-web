import React from "react";
import { ButtonProps } from ".";

import "./button.styles.scss";

const Button = ({ title, type = "button", cssType, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`button button--${cssType}`}
      onClick={onClick && onClick}
    >
      <span className="font--bold">{title}</span>
    </button>
  );
};

export default React.memo(Button);
