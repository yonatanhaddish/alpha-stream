import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { fetchMoviesData, adLists } from "../api/apiService";
import { AdLeftSide, AdRightSide } from "./Advertisment";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ListCarasoul() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [listMoviesT, setListMoviesT] = useState([]);
  const maxSteps = listMoviesT.length;

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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        // border: "solid 2px #000",
        width: "700px",
        height: "auto",
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {listMoviesT.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box sx={{ display: "flex" }}>
                <Box
                  component="img"
                  sx={{
                    // border: "solid 5px green",
                    width: "600px",
                    height: "400px",
                    marginLeft: "50px",
                  }}
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
