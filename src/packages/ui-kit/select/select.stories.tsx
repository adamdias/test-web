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
  error,
  options,
}: SelectProps) => (
  <Select label={label} name={name} error={error} options={options} />
);

export const Normal = Template.bind({});

Normal.args = {
  label: "Ano desejado:",
  name: "year",
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
      selected: true,
    },
  ],
};

export const Error = Template.bind({});

Error.args = {
  label: "Nome:",
  name: "nome",
  error: "Esse campo é obrigatório",
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
      selected: true,
    },
  ],
};
