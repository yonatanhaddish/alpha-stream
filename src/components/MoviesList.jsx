import React, { useEffect, useState } from "react";
import { fetchMoviesData } from "../api/apiService";

function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});

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

  function handleSingleMovieClick(data) {
    setSelectedMovie(data);
  }
  return (
    <>
      <div className="movies-list-parent-box">
        {moviesList.map((data) => (
          <div
            className="single-movie"
            key={data.id}
            value={data.id}
            onClick={(x) => handleSingleMovieClick(data)}
          >
            <div className="image-box">
              <img
                src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
                alt={data.title}
                width={250}
                height={300}
              />
            </div>
            <div className="rating-box">
              {Math.round(data.vote_average * 10)}
            </div>
            <div className="title-box">
              <h3>{data.title}</h3>
              <p>{data.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MoviesList;
