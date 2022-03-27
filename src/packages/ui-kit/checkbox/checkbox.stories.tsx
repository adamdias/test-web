import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox, CheckboxProps } from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({
  label,
  name,
}: CheckboxProps) => <Checkbox label={label} name={name} />;

export const Normal = Template.bind({});

Normal.args = {
  label: "Novos",
  name: "state",
};
