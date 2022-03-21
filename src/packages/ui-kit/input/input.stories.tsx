import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input, InputProps } from ".";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({
  label,
  name,
  type,
  error,
  leftIcon,
  rightIcon,
  onFocus,
  onBlur,
}: InputProps) => (
  <Input
    label={label}
    name={name}
    type={type}
    error={error}
    leftIcon={leftIcon}
    rightIcon={rightIcon}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);

export const Normal = Template.bind({});

Normal.args = {
  label: "Nome:",
  name: "nome",
  type: "text",
  onFocus: () => console.log("focus"),
  onBlur: () => console.log("blur"),
};

export const Error = Template.bind({});

Error.args = {
  label: "Nome:",
  name: "nome",
  type: "text",
  error: "Esse campo é obrigatório",
  onFocus: () => console.log("focus"),
  onBlur: () => console.log("blur"),
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  label: "Nome:",
  name: "nome",
  type: "text",
  leftIcon: {
    name: "car",
    color: "#c41333",
  },
  rightIcon: {
    name: "car",
    color: "#c41333",
  },
  onFocus: () => console.log("focus"),
  onBlur: () => console.log("blur"),
};
