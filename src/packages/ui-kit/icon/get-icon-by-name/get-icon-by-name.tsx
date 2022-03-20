import React from "react";
import CarIcon from "../car/car";
import { IconProps } from "../icon.types";

const GetIconByName = ({ name, width, height, color }: IconProps) => {
  let iconSelected;

  switch (name) {
    case "car":
      iconSelected = <CarIcon width={width} height={height} color={color} />;
      break;

    default:
      iconSelected = null;
      break;
  }

  return iconSelected;
};

export default GetIconByName;
