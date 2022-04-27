import React, { useState } from "react";
//muestra de mensaje de error, en caso de que no encuentre ninguna fruta con el texto

const SearchFilter = () => {
  //Quetsion such as this array is outside of the function or inside the function
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
