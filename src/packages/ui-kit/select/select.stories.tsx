import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select, SelectProps } from ".";

export default {
  title: "Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  label,
  name,
  defaultValue,
  error,
  options,
}: SelectProps) => (
  <Select
    label={label}
    defaultValue={defaultValue}
    name={name}
    error={error}
    options={options}
  />
);

export const Normal = Template.bind({});

Normal.args = {
  label: "Ano desejado:",
  name: "year",
  defaultValue: "quatro",
  options: [
    {
      label: "Item 1",
      value: 1,
    },
    {
      label: "Item 2",
      value: 2,
    },
    {
      label: "Item 3",
      value: 3,
    },
    {
      label: "Item 4",
      value: "quatro",
    },
  ],
};

export const Error = Template.bind({});

Error.args = {
  label: "Nome:",
  name: "nome",
  error: "Esse campo é obrigatório",
  defaultValue: 2,
  options: [
    {
      label: "Item 1",
      value: 1,
    },
    {
      label: "Item 2",
      value: 2,
    },
    {
      label: "Item 3",
      value: 3,
    },
    {
      label: "Item 4",
      value: "quatro",
    },
  ],
};
