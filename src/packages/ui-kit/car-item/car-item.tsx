import React from "react";
import { CarItemProps } from "./car-item.types";

import "./car-item.styles.scss";

const CarItem = ({
  imageUrl,
  model,
  version,
  price,
  yearModel,
  yearFab,
  color,
  km,
}: CarItemProps) => {
  return (
    <div className="car-item">
      <div className="car-item__image-box">
        <img className="car-item__image-file" src={imageUrl} />
      </div>

      <div className="py--1 px--1 bg--white">
        <p className="font--bold">{model}</p>
        <p className="font--bold cl--gray pb--3">{version}</p>
        <p className="font--bold text--xl pb--1">
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <div className="car-item__year-and-km pb--1">
          <span className="cl--gray">
            {yearFab}/{yearModel}
          </span>
          <span className="cl--gray">{km}km</span>
        </div>
        <p>
          <span className="font--bold">Cor:</span> {color}
        </p>
      </div>
    </div>
  );
};

export default CarItem;
