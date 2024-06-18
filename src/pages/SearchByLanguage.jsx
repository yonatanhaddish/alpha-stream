import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import FilteredList from "../components/FilteredList";
import { fetchMoviesData, fetchTvShowsData } from "../api/apiService";

function SearchByLanguage() {
  const [order, setOrder] = useState("asc");
  const [movieType, setMovieType] = useState("movies");
  const [language, setLanguage] = useState("all");
  const [moviesList, setMoviesList] = useState([]);
  const [tvShowsList, setTvShowsList] = useState([]);

  useEffect(() => {
    getAllList();
  }, []);
  async function getAllList() {
    try {
      const responseMovies = await fetchMoviesData();
      const responseTvShows = await fetchTvShowsData();
      setMoviesList(responseMovies);
      setTvShowsList(responseTvShows);
    } catch (err) {
      throw err;
    }
  }

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
      <FilteredList
        order={order}
        movieType={movieType}
        language={language}
        moviesList={moviesList}
        tvShowsList={tvShowsList}
      />
    </>
  );
}

export default SearchByLanguage;
