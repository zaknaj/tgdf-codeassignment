import React from "react";

import { ReactComponent as Chevron } from "../assets/chevron.svg";

export const SideMenuItem = ({ Icon, title, active }) => {
  return (
    <div className={`side-menu-item${active ? " active" : ""}`}>
      <Icon style={{ height: 16, width: 16, marginRight: 8 }} />
      <div className="side-menu-item-title">{title}</div>
      <Chevron className="side-menu-chevron" />
    </div>
  );
};
