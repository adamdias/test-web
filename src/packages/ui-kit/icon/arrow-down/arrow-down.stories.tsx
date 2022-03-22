import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArrowDownIcon } from ".";
import { IconProps } from "../icon.types";

export default {
  title: "Icons/Arrow Down",
  component: ArrowDownIcon,
} as ComponentMeta<typeof ArrowDownIcon>;

const ArrowDownIconTemplate: ComponentStory<typeof ArrowDownIcon> = ({
  width,
  height,
  color,
}: IconProps) => <ArrowDownIcon width={width} height={height} color={color} />;

export const ArrowDown = ArrowDownIconTemplate.bind({});

ArrowDown.args = {
  width: 35,
  height: 35,
  color: "#c41333",
};
