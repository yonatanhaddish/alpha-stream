import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { fetchTvShowsData } from "../api/apiService";

function TvShowList() {
  const [tvShowList, setTvShowList] = useState([]);
  const [selectedTvShow, setSelectedTvShow] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "#0e46a3",
    color: "#fdb827",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    fetchTvShows();
  }, []);

  async function fetchTvShows() {
    try {
      const response = await fetchTvShowsData();
      console.log("222", response);
      setTvShowList(response);
    } catch (err) {
      throw err;
    }
  }

  function handleSingleTvShowClick(data) {
    setSelectedTvShow(data);
    setOpenModal(!openModal);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  return (
    <>
      <div className="movies-list-parent-box">
        {tvShowList.map((data) => (
          <div
            className="single-movie"
            key={data.id}
            value={data.id}
            onClick={(x) => handleSingleTvShowClick(data)}
          >
            <div className="image-box">
              <img
                src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
                alt={data.title}
                width={250}
                height={300}
              />
            </div>
            <div className="rating-title-box">
              <div className="rating-box">
                {Math.round(data.vote_average * 10)}
              </div>
              <div className="title-box">
                <h3>{data.original_name}</h3>
              </div>
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
              {selectedTvShow.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selectedTvShow.overview}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              First Air Date: {selectedTvShow.first_air_date}
              <br />
              Language: {selectedTvShow.original_language}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default TvShowList;
