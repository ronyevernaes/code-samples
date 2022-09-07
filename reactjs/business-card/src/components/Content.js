import React from "react";

export default function Content({ title, children }) {
  return (
    <div className="content">
      <h2 className="content-title">{title}</h2>
      {children && <div className="content-text">{children}</div>}
    </div>
  );
};
