import React from "react";

export type ButtonProps = {
  title: string;
  type: "primary" | "outline";
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};
