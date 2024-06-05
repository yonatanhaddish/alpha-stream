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

  const test002 = require(`../assets/${adNameLeft}.png`);
  return (
    <>
      <Box
        component="img"
        src={test002}
        alt={adNameLeft}
        sx={{
          border: "solid 2px red",
          height: 300,
          width: 100,
          marginLeft: 10,
        }}
      />
    </>
  );
}

function AdRightSide() {
  const test = require("../assets/Pepsi.png");
  return (
    <>
      <Box
        component="img"
        src={test}
        alt="name"
        sx={{
          border: "solid 2px red",
          height: 300,
          width: 100,
          marginLeft: 35,
        }}
      />
    </>
  );
}

export { AdLeftSide, AdRightSide };
