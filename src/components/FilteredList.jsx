import React, { useState } from "react";

function FilteredList({ order, movieType, language, movies }) {
  const [filteredMoviesResult, setFilteredMoviesResult] = useState([]);
  const [filteredTvShowsResult, setFilteredTvShowsResult] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  let filteredList = movies;

  if (order === "asc" && language === "all") {
    filteredList.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (order === "dsc" && language === "all") {
    filteredList.sort((a, b) => b.title.localeCompare(a.title));
  }
  if (order === "asc" && language === "ko") {
    filteredList = filteredList.filter(
      (item) => item.original_language === "ko"
    );
  }
  if (order === "asc" && language === "fr") {
    filteredList = filteredList.filter(
      (item) => item.original_language === "fr"
    );
  }

  return (
    <>
      {filteredList.map((e) => (
        <div key={e.id}>
          <h1>{e.title}</h1>
          <h2>{e.original_language}</h2>
        </div>
      ))}
    </>
  );
}

export default FilteredList;
