import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} exact />
        {/* <Route path="/search" element={<Search/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
