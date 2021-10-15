import React from "react";
import { NavLink } from "react-router-dom";

function NavPanel({ children }) {
  return (
    <aside className="nav-panel">
      <ul className="nav-list">{children}</ul>
    </aside>
  );
}

export function NavOption({ children, to }) {
  return (
    <NavLink to={to} activeClassName="active" className="nav-option">
      {children}
    </NavLink>
  );
}

export default NavPanel;
