import React from "react";
import { SelectProps } from "./select.types";

import "../input/input.styles.scss";
import "./select.styles.scss";

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, name, error, loading, disabled = false, options, state, setState },
    ref
  ) => {
    const errorCssClass = error ? " input__box--error" : "";
    const disabledCssClass = disabled ? " select__label--disabled" : "";

    return (
      <label
        className={`input__label select__label${disabledCssClass}`}
        htmlFor={name}
      >
        <div className={`input__box${errorCssClass}`}>
          <div className="input__box--left-side">
            <span>{label}</span>
          </div>

          {loading && <span>carregando...</span>}

          {!loading && (
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
              disabled={disabled}
            >
              {options.map(option => (
                <option
                  key={`${option.label}${option.value}`}
                  value={option.value}
                  selected={option.selected}
                >
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>

        {error && <span className="input__error text--lg">{error}</span>}
      </label>
    );
  }
);

export default React.memo(Select);
