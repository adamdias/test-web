import React from "react";
import { SelectProps } from "./select.types";

import "../input/input.styles.scss";
import "./select.styles.scss";

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      name,
      error,
      loading,
      defaultValue,
      disabled = false,
      options,
      state,
      setState,
      withoutBorderRadiusLeft,
      withoutBorderRadiusRight,
    },
    ref
  ) => {
    const errorCssClass = error ? " input__box--error" : "";
    const disabledCssClass = disabled ? " select__label--disabled" : "";
    const withoutBorderRadiusLeftCssClass = withoutBorderRadiusLeft
      ? " input__box--without-radius-left"
      : "";
    const withoutBorderRadiusRightCssClass = withoutBorderRadiusRight
      ? " input__box--without-radius-right"
      : "";

    return (
      <label
        className={`input__label select__label${disabledCssClass}`}
        htmlFor={name}
      >
        <div
          className={`input__box${withoutBorderRadiusLeftCssClass}${withoutBorderRadiusRightCssClass}${errorCssClass}`}
        >
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
              defaultValue={defaultValue}
              disabled={disabled}
            >
              {options.map(option => (
                <option
                  key={`${option.label}${option.value}`}
                  value={option.value}
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
