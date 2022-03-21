import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CloseIcon } from ".";
import { IconProps } from "../icon.types";

export default {
  title: "Icons/Close",
  component: CloseIcon,
} as ComponentMeta<typeof CloseIcon>;

const CloseIconTemplate: ComponentStory<typeof CloseIcon> = ({
  width,
  height,
  color,
}: IconProps) => <CloseIcon width={width} height={height} color={color} />;

export const Close = CloseIconTemplate.bind({});

Close.args = {
  width: 35,
  height: 35,
  color: "#c41333",
};
