import React from "react";
import { IconProps } from "../icon.types";

const ArrowDownIcon = ({ width, height, color }: IconProps) => {
  return (
    <div style={{ width, height }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 30 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 26L0.277571 0.499997L29.7224 0.5L15 26Z" fill={color} />
      </svg>
    </div>
  );
};

export default ArrowDownIcon;
