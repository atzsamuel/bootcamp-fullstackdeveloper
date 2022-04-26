import React, { useState } from "react";

const SearchFilter = () => {
  const fruits = [
    "Banana",
    "Bayberries",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const [textSearch, setTextSearch] = useState("");

  const handleInputChange = (event) => {
    setTextSearch(event.target.value);
  };
  return (
    <>
      <h1>Search Filter</h1>
      <div>
        <label forhtml="textSearch">Input your search</label>
      </div>
      <br />
      <div>
        <input
          id="textSearch"
          name="textSearch"
          value={textSearch}
          type="text"
          onChange={handleInputChange}
          placeholder="Search..."
        />
      </div>
      <br />
      <div>
        {fruits
          .filter((value) =>
            value.toUpperCase().includes(textSearch.toUpperCase())
          )
          .map((filteredFruit, index) => (
            <li key={index}>{filteredFruit}</li>
          ))}
      </div>
    </>
  );
};

export default SearchFilter;
