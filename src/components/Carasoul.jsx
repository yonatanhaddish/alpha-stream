import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { fetchMoviesData } from "../api/apiService";

function Carasoul() {
  const [listMoviesT, setListMoviesT] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);
  async function fetchMovies() {
    try {
      const response = await fetchMoviesData();
      setListMoviesT(response);
    } catch (err) {
      throw err;
    }
  }

  function movieTemplate(movie) {
    return (
      <>
        {/* <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
          <div className="mb-2">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
              className="w-6 shadow-2"
            />
          </div>
        </div> */}
        <div className="carasoul-parent">
          <div className="carasoul-child-img">
            <img
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
        autoplayInterval={3000}
        itemTemplate={movieTemplate}
      />
    </div>
  );
}
export default Carasoul;
