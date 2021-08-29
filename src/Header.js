import React from "react";
import { NavLink } from "react-router-dom";
let Header = () => {
  return (
    <NavLink className="navbar-item" activeClassName="is-active" to="/" exact>
      Home
    </NavLink>
  );
};

export default Header;
