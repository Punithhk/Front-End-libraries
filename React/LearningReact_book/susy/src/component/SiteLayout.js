import React from "react";

function SiteLayout({ children, menu = (c) => null }) {
  return (
    <div className="site-container">
      <div> {menu}</div>
      <div>{children}</div>
    </div>
  );
}

export default SiteLayout;
