import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CarItem, CarItemProps } from ".";

export default {
  title: "CarItem",
  component: CarItem,
} as ComponentMeta<typeof CarItem>;

const Template: ComponentStory<typeof CarItem> = ({
  imageUrl,
  model,
  version,
  price,
  yearModel,
  yearFab,
  color,
  km,
}: CarItemProps) => (
  <div style={{ width: "250px", padding: "20px" }}>
    <CarItem
      imageUrl={imageUrl}
      model={model}
      version={version}
      price={price}
      yearModel={yearModel}
      yearFab={yearFab}
      color={color}
      km={km}
    />
  </div>
);

export const Normal = Template.bind({});

Normal.args = {
  imageUrl: "http://desafioonline.webmotors.com.br/content/img/01.jpg",
  model: "Honda City",
  version: "2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO",
  price: 59000.0,
  yearFab: 2017,
  yearModel: 2018,
  color: "Azul",
  km: 0,
};
