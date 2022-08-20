import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./Search";
import Main from "./Main";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //get all the data at once
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let getAllData = () => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} exact/>
        <Route path="/search" element={<Search/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
