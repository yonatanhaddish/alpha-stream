import React, { useEffect, useState } from "react";
import { fetchMoviesData } from "../api/apiService";

function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const response = await fetchMoviesData();
      console.log("5555", response);
      setMoviesList(response);
    } catch (err) {
      throw err;
    }
  }
  return (
    <>
      <h1>Movies List</h1>
    </>
  );
}

export default MoviesList;
