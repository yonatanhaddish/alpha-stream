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
      <div className="movies-list-parent-box">
        {moviesList.map((data) => (
          <div className="single-movie" key={data.id}>
            <div className="image-box">
              <img
                src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
                alt={data.title}
                height={350}
                width={250}
              />
            </div>
            <div className="rating-box"></div>
            <div className="title-box">
              <h4>{data.title}</h4>
              <p>{data.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MoviesList;
