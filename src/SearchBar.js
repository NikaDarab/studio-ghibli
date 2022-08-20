import React from "react";

const SearchBar = () => {
  return (
    <div className="browse-button animate__animated animate__bounceInRight search-bar">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <div className="search" />
      </div>
    </div>
  );
};

export default SearchBar;
