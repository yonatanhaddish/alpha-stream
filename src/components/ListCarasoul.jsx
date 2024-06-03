import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { fetchMoviesData } from "../api/apiService";

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
      console.log("11111111", response);
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
        maxWidth: "100%",
        flexGrow: 1,
        marginTop: 3,
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
              <Box
                component="img"
                sx={{
                  width: 350,
                  height: 350,
                  display: "block",
                  // maxWidth: "400",
                  overflow: "hidden",
                  marginLeft: 60,
                }}
                src={`https://image.tmdb.org/t/p/w300/${step.poster_path}`}
                alt={step.name}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default ListCarasoul;
