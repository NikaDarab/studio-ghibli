import React, { useState, useEffect } from "react";
import FilmCards from "./FilmCards";

const Search = () => {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (!data.length) getAllData();
    const results = data.filter((d) =>
      d.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    if (results.length) setShow(!show);
  }, [searchQuery, data]);

  const getAllData = () => {
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
    <React.Fragment>
      <div>
        <form>
          <label>Search something</label>
          <input onChange={handleSearch} type="text" />
          <div />
        </form>
      </div>

      <FilmCards films={searchResults} />
    </React.Fragment>
  );
};
export default Search;
