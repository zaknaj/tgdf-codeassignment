import React from "react";
import { ProfileBlock } from "./ProfileBlock";
import { SideMenuItem } from "./SideMenuItem";

import logo from "../assets/logo.svg";
import { ReactComponent as DashboardIcon } from "../assets/dashboard.svg";
import { ReactComponent as ProductsIcon } from "../assets/products.svg";
import { ReactComponent as CommentsIcon } from "../assets/comments.svg";
import { ReactComponent as TrendsIcon } from "../assets/trends.svg";
import { ReactComponent as PeopleIcon } from "../assets/people.svg";

export const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="client-logo">
        <img src={logo} alt="client-logo" />
      </div>
      <SideMenuItem active Icon={DashboardIcon} title="Dashboard" />
      <SideMenuItem Icon={ProductsIcon} title="Products" />
      <SideMenuItem Icon={CommentsIcon} title="Comments" />
      <SideMenuItem Icon={TrendsIcon} title="Trends" />
      <SideMenuItem Icon={PeopleIcon} title="People" />
      <ProfileBlock />
    </div>
  );
};
