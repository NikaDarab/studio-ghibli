import React, { useState, useEffect } from "react";

let Search = () => {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    !data.length && getAllData();
    const results = data.filter((d) =>
      d.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    results.length && setShow(!show);
  }, [searchQuery, data]);

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
    <React.Fragment>
      <form>
        <label>Search something</label>
        <input onChange={handleChange} type="text" />
      </form>
      {searchQuery.length ? <h4> Results for: {searchQuery}</h4>:null}
      {show && searchQuery? (
        <ul>
          {searchResults.map((item) => (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      ): null}
    </React.Fragment>
  );
};
export default Search;
