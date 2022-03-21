import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LocationPinIcon } from ".";
import { IconProps } from "../icon.types";

export default {
  title: "Icons/Location Pin",
  component: LocationPinIcon,
} as ComponentMeta<typeof LocationPinIcon>;

const LocationPinIconTemplate: ComponentStory<typeof LocationPinIcon> = ({
  width,
  height,
  color,
}: IconProps) => (
  <LocationPinIcon width={width} height={height} color={color} />
);

export const LocationPin = LocationPinIconTemplate.bind({});

LocationPin.args = {
  width: 35,
  height: 35,
  color: "#c41333",
};
