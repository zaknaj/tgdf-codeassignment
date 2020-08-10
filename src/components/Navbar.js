import React from "react";

import { Select } from "./Select";

export const Navbar = ({ value, onChange }) => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <Select value={value} onChange={onChange} />
      </div>
    </div>
  );
};
