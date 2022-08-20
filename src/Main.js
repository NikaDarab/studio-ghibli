import React from "react";
import { Routes, Route, useNavigate, NavLink, Link } from "react-router-dom";
import "animate.css";

const Header = () => {
  return (
    <div className="container main">
      {/* <button className="display-all-button animate__animated animate__bounceInLeft">
        Display All
      </button> */}
      <div className="browse-button animate__animated animate__bounceInRight">
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <div className="search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
