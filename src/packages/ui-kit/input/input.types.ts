import React from "react";
import { IconNameProps } from "../icon/get-icon-by-name";

export type InputProps = {
  label: string;
  name: string;
  value: string | number;
  type: "text" | "email";
  withoutBorderRadiusLeft?: boolean;
  withoutBorderRadiusRight?: boolean;
  error?: string;
  hasButtonInputClear?: boolean;
  leftIcon?: {
    name: IconNameProps;
    color: string;
    cursorPointer?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  };
  rightIcon?: {
    name: IconNameProps;
    color: string;
    cursorPointer?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  };
  state?: any;
  setState?: any;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};
