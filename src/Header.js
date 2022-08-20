import React from "react";
import { NavLink } from "react-router-dom";
let Header = () => {
  return (
    <NavLink className="navbar-item" activeClassName="is-active" to="/" exact>
        <div className="header">
          {" "} 
        </div>

    </NavLink>
  );
};

export default Header;
