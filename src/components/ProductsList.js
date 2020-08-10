import React from "react";
import { Product } from "./Product";

import { ALL_PRODUCTS } from "../data";
import { filterByTime } from "../utils";

export const ProductsList = ({ period }) => {
  return (
    <div className="products-list">
      {filterByTime(ALL_PRODUCTS, period).map((p, i) => (
        <Product
          name={p.name}
          type={p.score > 6 ? "positive" : p.score < 4 ? "negative" : "neutral"}
          key={"prod_" + i}
        />
      ))}
    </div>
  );
};
