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
      value,
      onBlur,
      onFocus,
      onChange,
      state,
      setState,
      leftIcon,
      rightIcon,
      withoutBorderRadiusLeft,
      withoutBorderRadiusRight,
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
            [event.currentTarget.name]: {
              ...state[event.currentTarget.name],
              value: event.currentTarget.value,
            },
          });
        }

        if (onChange) {
          onChange(event);
        }
      },
      [onChange, state]
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
    const withoutBorderRadiusLeftCssClass = withoutBorderRadiusLeft
      ? " input__box--without-radius-left"
      : "";
    const withoutBorderRadiusRightCssClass = withoutBorderRadiusRight
      ? " input__box--without-radius-right"
      : "";

    return (
      <label className="input__label" htmlFor={name}>
        <div
          className={`input__box${focusedCssClass}${withoutBorderRadiusLeftCssClass}${withoutBorderRadiusRightCssClass}${errorCssClass}`}
        >
          <div className="input__box--left-side">
            {leftIcon && leftIcon.color && leftIcon.name && (
              <button
                type="button"
                className={`input__icon input__icon--left ${
                  leftIcon.cursorPointer && "input__icon--cursor-pointer"
                }`}
                onClick={leftIcon.onClick && leftIcon.onClick}
              >
                <GetIconByName
                  name={leftIcon.name}
                  width={16}
                  height={16}
                  color={leftIcon.color}
                />
              </button>
            )}
            <span>{label}</span>
          </div>

          <input
            id={name}
            className="input__field"
            type={type}
            name={name}
            value={value}
            ref={ref}
            readOnly
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />

          {rightIcon && rightIcon.color && rightIcon.name && (
            <button
              type="button"
              className={`input__icon input__icon--right ${
                rightIcon.cursorPointer && "input__icon--cursor-pointer"
              }`}
              onClick={rightIcon.onClick && rightIcon.onClick}
            >
              <GetIconByName
                name={rightIcon.name}
                width={16}
                height={16}
                color={rightIcon.color}
              />
            </button>
          )}
        </div>

        {error && <span className="input__error text--lg">{error}</span>}
      </label>
    );
  }
);

export default React.memo(Input);
