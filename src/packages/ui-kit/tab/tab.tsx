import React from "react";
import { GetIconByName } from "../icon/get-icon-by-name";
import { TabProps } from "./tab.types";

import "./tab.styles.scss";

const Tab = ({ options }: TabProps) => {
  if (options) {
    return (
      <div className="tab">
        {options.map(option => (
          <button
            type="button"
            key={option.title}
            className={`tab__option${
              option.active ? " tab__option--active" : ""
            }`}
            onClick={option.onClick}
          >
            <div className="tab__option-icon">
              <GetIconByName
                name={option.icon.name}
                width={30}
                height={30}
                color={option.icon.color}
              />
            </div>
            <div className="tab__option-label">
              <span className="text--lg">{option.title}</span>
              <span className="tab__option-subtitle text--xl">
                {option.subtitle}
              </span>
            </div>
          </button>
        ))}
      </div>
    );
  }

  return null;
};

export default Tab;
