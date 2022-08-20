import React from "react";

const SearchBar = () => {
  return (
    <div className="browse-button animate__animated animate__bounceInRight header">
        <div className="logo"/>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <div className="search" />
      </div>
    </div>
  );
};

export default SearchBar;
