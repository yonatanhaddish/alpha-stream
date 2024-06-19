import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { fetchMoviesData } from "../api/apiService";

function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const response = await fetchMoviesData();
      // console.log("111", response);
      setMoviesList(response);
    } catch (err) {
      throw err;
    }
  }
  function handleSingleMovieClick(data) {
    setSelectedMovie(data);
    setOpenModal(!openModal);
  }
  function handleCloseModal() {
    setOpenModal(false);
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
      <div>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {selectedMovie.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selectedMovie.overview}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selectedMovie.release_date} | {selectedMovie.original_language}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default MoviesList;
