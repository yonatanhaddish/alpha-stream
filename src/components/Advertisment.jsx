import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { adLists } from "../api/apiService";

function AdLeftSide() {
  const [adListLeft, setAdListLeft] = useState(adLists);
  const [adListIndex, setAdListIndex] = useState(0);
  const [adSrcLeft, setAdSrcLeft] = useState(adLists[0].poster_path);
  const len = adLists.length;
  function fetchAdData() {
    setAdListIndex(Math.floor(Math.random() * len));
    setAdSrcLeft(adListLeft[adListIndex].poster_path);
  }

  useEffect(() => {
    fetchAdData();
  }, []);
  return (
    <>
      {/* <Box
        component="img"
        src={require(adLists[0].poster_path)}
        alt={adSrcLeft}
        sx={{
          border: "solid 2px red",
          height: 300,
          width: 100,
          marginLeft: 10,
        }}
      /> */}
      <Box
        sx={{
          border: "solid 2px red",
          height: 300,
          width: 100,
          marginLeft: 10,
        }}
      >
        <img src={adLists[2].poster_path} alt={adSrcLeft} />
      </Box>
    </>
  );
}

function AdRightSide() {
  return (
    <>
      <Box
        component="img"
        src={require("../assets/Shell_logo.svg.png")}
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
