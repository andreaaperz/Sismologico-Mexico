import React from "react";
import { NavLink } from "react-router-dom";

function NavPanel({ children }) {
  return (
    <aside className="nav-panel-sis">
      <div className="nav-list-sis">{children}</div>
    </aside>
  );
}

export function NavOption({ children, to }) {
  return (
    <NavLink to={to} activeClassName="active-sis" className="nav-option-sis">
      {children}
    </NavLink>
  );
}

export default NavPanel;
