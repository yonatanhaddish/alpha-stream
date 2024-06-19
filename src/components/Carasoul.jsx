import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { fetchMoviesData, fetchTvShowsData } from "../api/apiService";

function Carasoul() {
  const [listMoviesT, setListMoviesT] = useState([]);
  const [tvShowList, setTvShowList] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    // fetchTvShows();
  }, []);
  async function fetchMovies() {
    try {
      const response = await fetchMoviesData();
      setListMoviesT(response);
    } catch (err) {
      throw err;
    }
  }
  async function fetchTvShows() {
    try {
      const response = await fetchTvShowsData();
      setTvShowList(response);
    } catch (err) {
      throw err;
    }
  }

  function movieTemplate(movie) {
    return (
      <>
        <div className="carasoul-parent">
          <div className="carasoul-child-img">
            <img
              className="imge-carasoul"
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="card">
      <Carousel
        value={listMoviesT}
        numVisible={4}
        numScroll={1}
        className="custom-carousel"
        circular
        autoplayInterval={2000}
        itemTemplate={movieTemplate}
      />
    </div>
  );
}
export default Carasoul;
