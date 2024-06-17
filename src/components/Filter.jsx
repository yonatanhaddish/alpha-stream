import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RadioButtonsGroup() {
  const [order, setOrder] = useState("asc");
  const [movieType, setMovieType] = useState("movies");
  const [language, setLanguage] = useState("all");

  function handleOrderChange(event) {
    setOrder(event.target.value);
  }
  function handleMovieTypeChange(event) {
    setMovieType(event.target.value);
  }
  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }
  return (
    <>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Asc/Dec</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="asc"
          name="radio-buttons-group"
          onChange={handleOrderChange}
        >
          <FormControlLabel value="asc" control={<Radio />} label="Asc" />
          <FormControlLabel value="dsc" control={<Radio />} label="Dsc" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Movies/TV-Shows
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="movies"
          name="radio-buttons-group"
          onChange={handleMovieTypeChange}
        >
          <FormControlLabel value="movies" control={<Radio />} label="Movies" />
          <FormControlLabel
            value="tv-shows"
            control={<Radio />}
            label="TV-Shows"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Language</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          onChange={handleLanguageChange}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="en" control={<Radio />} label="English" />
          <FormControlLabel value="fr" control={<Radio />} label="French" />
          <FormControlLabel value="ko" control={<Radio />} label="Korean" />
        </RadioGroup>
      </FormControl>
    </>
  );
}
export default RadioButtonsGroup;
