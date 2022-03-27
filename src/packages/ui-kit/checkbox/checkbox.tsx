import React from "react";
import { CheckboxProps } from "./checkbox.types";

import "./checkbox.styles.scss";

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, name, checked }, ref) => {
    return (
      <label className="checkbox__label" htmlFor={name}>
        <input
          id={name}
          ref={ref}
          className="checkbox__field"
          type="checkbox"
          name={name}
          checked={checked}
        />
        <span className="checkbox__mark" />
        <span className="checkbox__title">{label}</span>
      </label>
    );
  }
);

export default React.memo(Checkbox);
