import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RadioButtonsGroup() {
  const [order, setOrder] = useState("asc");

  function handleOrderChange(event) {
    setOrder(event.target.value);
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
      <div className="filter-parent">
        {order == "asc" ? <h1>ASC</h1> : <h1>DSC</h1>}
      </div>
    </>
  );
}
export default RadioButtonsGroup;
