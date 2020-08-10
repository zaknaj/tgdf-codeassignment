import React from "react";
import { ReactComponent as Chevron } from "../assets/chevron.svg";

export const Select = ({ value = "all", onChange }) => {
  return (
    <div className="select">
      <div>Products range</div>
      <select value={value} onChange={onChange}>
        <option value="day">Past day</option>
        <option value="week">Past week</option>
        <option value="month">Past month</option>
        <option value="quarter">Past quarter</option>
        <option value="year">Past year</option>
        <option value="all">All time</option>
      </select>
      <Chevron className="select-chevron" />
    </div>
  );
};
