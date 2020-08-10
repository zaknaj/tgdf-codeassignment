import React from "react";

export const ContentBlock = ({ title, children }) => {
  return (
    <div className="content-block">
      <div className="block-title">{title}</div>
      <div className="block-content">{children}</div>
    </div>
  );
};
