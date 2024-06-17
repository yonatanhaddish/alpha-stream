import React, { useState } from "react";
import Filter from "../components/Filter";

function SearchByLanguage() {
  const [order, setOrder] = useState("asc");
  const [movieType, setMovieType] = useState("movies");
  const [language, setLanguage] = useState("all");

  function handleOrderChange(event) {
    setOrder(event.target.value);
  }
  function handleMovieTypeChange(event) {
    setMovieType(event.target.value);
  }
  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <>
      <Filter
        handleLanguageChange={handleLanguageChange}
        handleOrderChange={handleOrderChange}
        handleMovieTypeChange={handleMovieTypeChange}
      />
    </>
  );
}

export default SearchByLanguage;
