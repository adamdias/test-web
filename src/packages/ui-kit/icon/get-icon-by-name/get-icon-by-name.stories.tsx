import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { GetIconByName as GetIconByNameAlias, GetIconByNameProps } from ".";

export default {
  title: "Icons/Get Icon By Name",
  component: GetIconByNameAlias,
} as ComponentMeta<typeof GetIconByNameAlias>;

const GetIconByNameTemplate: ComponentStory<typeof GetIconByNameAlias> = ({
  width,
  height,
  color,
  name,
}: GetIconByNameProps) => (
  <GetIconByNameAlias name={name} width={width} height={height} color={color} />
);

export const GetIconByName = GetIconByNameTemplate.bind({});

GetIconByName.args = {
  width: 35,
  height: 35,
  color: "#c41333",
  name: "car",
};
