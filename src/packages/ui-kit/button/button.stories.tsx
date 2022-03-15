import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./button";
import { ButtonProps } from "./button.types";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  title,
  type,
  onClick,
}: ButtonProps) => <Button title={title} type={type} onClick={onClick} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Título do botão",
  type: "primary",
  onClick: () => console.log("oi"),
};

export const Outline = Template.bind({});

Outline.args = {
  title: "Título do botão",
  type: "outline",
  onClick: () => console.log("oi"),
};
