import React from "react";
import { SelectProps } from "./select.types";
import { ArrowDownIcon } from "../icon/arrow-down";

import "../input/input.styles.scss";
import "./select.styles.scss";

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, name, error, options, state, setState }, ref) => {
    const errorCssClass = error ? " input__box--error" : "";

    return (
      <label className="select__label input__label" htmlFor={name}>
        <div className={`input__box${errorCssClass}`}>
          <div className="input__box--left-side">
            <span>{label}</span>
          </div>

          <select
            ref={ref}
            id={name}
            name={name}
            className="select__field input__field"
            onChange={e => {
              if (state && setState) {
                setState({ ...state, [e.target.name]: e.target.value });
              }
            }}
          >
            {options.map(option => (
              <option value={option.value} selected={option.selected}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="select__icon">
            <ArrowDownIcon width={5} height={5} color="#000" />
          </div>
        </div>

        {error && <span className="input__error text--lg">{error}</span>}
      </label>
    );
  }
);

export default React.memo(Select);
