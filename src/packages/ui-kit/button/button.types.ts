import React, { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  title: string;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  cssType: "primary" | "outline" | "link";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
