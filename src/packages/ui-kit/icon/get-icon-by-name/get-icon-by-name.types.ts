import { IconProps } from "../icon.types";

export type IconNameProps = "car" | "location-pin" | "close";

export type GetIconByNameProps = {
  name: IconNameProps;
} & IconProps;
