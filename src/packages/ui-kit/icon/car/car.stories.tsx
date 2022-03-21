import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CarIcon } from ".";
import { IconProps } from "../icon.types";

export default {
  title: "Icons/Car",
  component: CarIcon,
} as ComponentMeta<typeof CarIcon>;

const CarIconTemplate: ComponentStory<typeof CarIcon> = ({
  width,
  height,
  color,
}: IconProps) => <CarIcon width={width} height={height} color={color} />;

export const Car = CarIconTemplate.bind({});

Car.args = {
  width: 35,
  height: 35,
  color: "#c41333",
};
