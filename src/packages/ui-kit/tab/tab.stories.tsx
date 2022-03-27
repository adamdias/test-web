import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tab, TabProps } from ".";

export default {
  title: "Tab",
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = ({ options }: TabProps) => (
  <Tab options={options} />
);

export const Normal = Template.bind({});

Normal.args = {
  options: [
    {
      title: "COMPRAR",
      subtitle: "CARROS",
      icon: {
        name: "car",
        color: "#c41333",
      },
      active: true,
      onClick: () => console.log("click tab"),
    },
    {
      title: "COMPRAR",
      subtitle: "MOTOS",
      icon: {
        name: "car",
        color: "#c41333",
      },
      onClick: () => console.log("click tab"),
    },
  ],
};
