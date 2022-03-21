import React from "react";
import { IconNameProps } from "../icon/get-icon-by-name";

export type InputProps = {
  label: string;
  name: string;
  type: "text" | "email";
  error?: string;
  leftIcon?: {
    name: IconNameProps;
    color: string;
  };
  rightIcon?: {
    name: IconNameProps;
    color: string;
  };
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
};
