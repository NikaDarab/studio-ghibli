import React, { useState, useEffect } from "react";

let Search = () => {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => setSearchQuery(e.target.value);
  
  useEffect(() => {
   !data.length && getAllData()
    const results = data.filter(d =>
      d.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);
 

  let getAllData = () => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => { console.error(error); });
  };


  return (
    <>
      <form>
        <label>Search something</label>
        <input onChange={handleChange} type="text" />
        <button type="submit">Search</button>
      </form>
      <h4>You searched for {searchQuery}</h4>
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      
    </>
  );
};
export default Search;
