import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { adLists } from "../api/apiService";

function AdLeftSide() {
  const [adListLeft, setAdListLeft] = useState(adLists);
  const [adListIndex, setAdListIndex] = useState(0);
  const [adNameLeft, setAdNameLeft] = useState(adListLeft[0].name);
  const len = adLists.length;

  function fetchAdData() {
    setAdListLeft(adLists);
    setAdListIndex(Math.floor(Math.random() * len));
    setAdNameLeft(adListLeft[adListIndex].name);
  }
  useEffect(() => {
    fetchAdData();
  }, []);
  setTimeout(fetchAdData, 5000);

  const advertise_left_side = require(`../assets/${adNameLeft}.png`);
  console.log("4444", advertise_left_side);
  return (
    <>
      <Box
        component="img"
        src={advertise_left_side}
        alt={adNameLeft}
        sx={{
          // border: "solid 2px red",
          height: "300px",
          width: "200px",
        }}
      />
    </>
  );
}

function AdRightSide() {
  const [adListRight, setAdListRight] = useState(adLists);
  const [adListIndex, setAdListIndex] = useState(0);
  const [adNameRight, setAdNameRight] = useState(adListRight[0].name);
  const len = adLists.length;

  function fetchAdData() {
    setAdListRight(adLists);
    setAdListIndex(Math.floor(Math.random() * len));
    setAdNameRight(adListRight[adListIndex].name);
  }
  useEffect(() => {
    fetchAdData();
  }, []);
  setTimeout(fetchAdData, 5000);

  const advertise_right_side = require(`../assets/${adNameRight}.png`);

  return (
    <>
      <Box
        component="img"
        src={advertise_right_side}
        alt={adNameRight}
        sx={{
          // border: "solid 2px red",
          height: "300px",
          width: "200px",
        }}
      />
    </>
  );
}
export { AdLeftSide, AdRightSide };
