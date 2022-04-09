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
  checked,
}: CheckboxProps) => <Checkbox label={label} name={name} checked={checked} />;

export const Normal = Template.bind({});

Normal.args = {
  label: "Novos",
  name: "state",
};

export const Checked = Template.bind({});

Checked.args = {
  label: "Novos",
  name: "state",
  checked: true,
};
