import { IconProps } from "../icon.types";

export type IconNameProps = "car" | "location-pin";

export type GetIconByNameProps = {
  name: IconNameProps;
} & IconProps;
