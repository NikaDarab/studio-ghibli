import React from "react";

const DisplayAll = () => {
    return (
        <div className="container">
        <button className="display-all-button animate__animated animate__bounceInLeft">
            Display All
        </button>
        <button className="browse-button animate__animated animate__bounceInRight">
            Browse
        </button>
        </div>
    );
}

export default DisplayAll;