import React, { useCallback, useState } from "react";
import { GetIconByName } from "../icon/get-icon-by-name";
import { InputProps } from "./input.types";

import "./input.styles.scss";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      type,
      error,
      onBlur,
      onFocus,
      onChange,
      state,
      setState,
      leftIcon,
      rightIcon,
    },
    ref
  ) => {
    const [focused, setFocused] = useState<boolean>(false);

    const handleOnFocus = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        event.target.readOnly = false;

        if (onFocus) {
          onFocus(event);
        }
      },
      [onFocus]
    );

    const handleOnChange = useCallback(
      (event: React.FormEvent<HTMLInputElement>) => {
        if (state && setState) {
          setState({
            ...state,
            [event.currentTarget.name]: event.currentTarget.value,
          });
        }

        if (onChange) {
          onChange(event);
        }
      },
      [onChange]
    );

    const handleOnBlur = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);

        if (onBlur) {
          onBlur(event);
        }
      },
      [onBlur]
    );

    const focusedCssClass = focused ? " input__box--focused" : "";
    const errorCssClass = error ? " input__box--error" : "";

    return (
      <label className="input__label" htmlFor={name}>
        <div className={`input__box${focusedCssClass}${errorCssClass}`}>
          <div className="input__box--left-side">
            {leftIcon && leftIcon.color && leftIcon.name && (
              <div className="input__icon input__icon--left">
                <GetIconByName
                  name={leftIcon.name}
                  width={16}
                  height={16}
                  color={leftIcon.color}
                />
              </div>
            )}
            <span>{label}</span>
          </div>

          <input
            id={name}
            className="input__field"
            type={type}
            name={name}
            ref={ref}
            readOnly
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />

          {rightIcon && rightIcon.color && rightIcon.name && (
            <div className="input__icon input__icon--right">
              <GetIconByName
                name={rightIcon.name}
                width={16}
                height={16}
                color={rightIcon.color}
              />
            </div>
          )}
        </div>

        {error && <span className="input__error text--lg">{error}</span>}
      </label>
    );
  }
);

export default React.memo(Input);
