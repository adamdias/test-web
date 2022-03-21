import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { GetIconByName, GetIconByNameProps } from ".";

export default {
  title: "Icons/Get Icon By Name",
  component: GetIconByName,
} as ComponentMeta<typeof GetIconByName>;

const GetIconByNameTemplate: ComponentStory<typeof GetIconByName> = ({
  width,
  height,
  color,
  name,
}: GetIconByNameProps) => (
  <GetIconByName name={name} width={width} height={height} color={color} />
);

export const GetIconByNameBind = GetIconByNameTemplate.bind({});

GetIconByNameBind.args = {
  width: 35,
  height: 35,
  color: "#c41333",
  name: "car",
};
