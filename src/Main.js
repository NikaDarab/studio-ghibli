import React from "react";
import { Routes, Route, useNavigate, NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "animate.css";


const Main = () => {
  return (
    <>
      <SearchBar/>
      <div className="container main"> 
     <div>
      {/* <button className="display-all-button animate__animated animate__bounceInLeft">
        Display All
      </button> */}
     
    </div>
    </div>
    </>
   
    
  );
};

export default Main;
