import React from "react";

export const Product = ({ name, type = "neutral" }) => {
  return <div className={"product product-" + type}>{name}</div>;
};
