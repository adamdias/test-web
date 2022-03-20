import React from "react";
import CarIcon from "../car/car";
import { GetIconByNameProps } from "./get-icon-by-name.types";

const GetIconByName = ({ name, width, height, color }: GetIconByNameProps) => {
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
