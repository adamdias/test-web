import React from "react";
import { CarIcon } from "../car";
import { LocationPinIcon } from "../location-pin";
import { CloseIcon } from "../close";
import { GetIconByNameProps } from ".";

const GetIconByName = ({ name, width, height, color }: GetIconByNameProps) => {
  let iconSelected;

  switch (name) {
    case "car":
      iconSelected = <CarIcon width={width} height={height} color={color} />;
      break;

    case "location-pin":
      iconSelected = (
        <LocationPinIcon width={width} height={height} color={color} />
      );
      break;

    case "close":
      iconSelected = <CloseIcon width={width} height={height} color={color} />;
      break;

    default:
      iconSelected = null;
      break;
  }

  return iconSelected;
};

export default GetIconByName;
