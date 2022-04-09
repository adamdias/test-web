import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  title,
  cssType,
  type,
  onClick,
}: ButtonProps) => (
  <Button title={title} type={type} cssType={cssType} onClick={onClick} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Título do botão",
  cssType: "primary",
  onClick: () => console.log("oi"),
};

export const Outline = Template.bind({});

Outline.args = {
  title: "Título do botão",
  cssType: "outline",
  onClick: () => console.log("oi"),
};

export const Link = Template.bind({});

Link.args = {
  title: "Título do botão",
  cssType: "link",
  onClick: () => console.log("oi"),
};
