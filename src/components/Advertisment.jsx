import React from "react";
import Box from "@mui/material/Box";

export function AdLeftSide() {
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
          marginLeft: 10,
        }}
      />
    </>
  );
}

export function AdRightSide() {
  return (
    <>
      <Box
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

// export default { AdLeftSide };
