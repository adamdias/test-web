import React, { useCallback, useState } from "react";
import { GetIconByName } from "../icon/get-icon-by-name";
import { InputProps } from "./input.types";

import "./input.styles.scss";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, type, error, onBlur, onFocus, leftIcon, rightIcon }, ref) => {
    const [focused, setFocused] = useState<boolean>(false);

    const handleOnFocus = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);

        if (onFocus) {
          onFocus(event);
        }
      },
      [onFocus]
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

    const focusedCssClass = focused ? " input_box--focused" : "";
    const errorCssClass = error ? " input_box--error" : "";

    return (
      <label className="input_label" htmlFor={name}>
        <div className={`input_box${focusedCssClass}${errorCssClass}`}>
          <div className="input_box--left-side">
            {leftIcon && leftIcon.color && leftIcon.name && (
              <div className="input_icon input_icon--left">
                <GetIconByName
                  name={leftIcon.name}
                  width={25}
                  height={25}
                  color={leftIcon.color}
                />
              </div>
            )}
            <span>{label}</span>
          </div>

          <input
            id={name}
            className="input_field"
            type={type}
            name={name}
            ref={ref}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />

          {rightIcon && rightIcon.color && rightIcon.name && (
            <div className="input_icon input_icon--right">
              <GetIconByName
                name={rightIcon.name}
                width={25}
                height={25}
                color={rightIcon.color}
              />
            </div>
          )}
        </div>

        {error && <span className="input_error text--lg">{error}</span>}
      </label>
    );
  }
);

export default React.memo(Input);
