import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { fetchMoviesData } from "../api/apiService";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ListCarasoul({ direction }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
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
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box
      sx={{
        border: "solid 2px red",
        width: "50%",
        // height: "700px",
        marginLeft: "60px",
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === `${direction}` ? "x-reverse" : "x-reverse"}
        index={activeStep}
        onChangeIndex={handleStepChange}
      >
        {listMoviesT.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box sx={{ display: "flex" }}>
                <Box
                  component="img"
                  sx={
                    {
                      // width: "300px",
                      // height: "300px",
                      // marginLeft: "50px",
                    }
                  }
                  src={`https://image.tmdb.org/t/p/w300/${step.poster_path}`}
                  alt={step.name}
                />
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default ListCarasoul;
