import React from "react";
import { AdLeftSide, AdRightSide } from "../components/Advertisment";
import ListCarasoul from "../components/ListCarasoul";
import Carasoul from "../components/Carasoul";
function Home() {
  return (
    <>
      <div className="home-body">
        {/* <AdLeftSide /> */}
        {/* <ListCarasoul direction="ltr" /> */}
        {/* <ListCarasoul direction="rtl" /> */}
        {/* <AdRightSide /> */}
        <Carasoul />
      </div>
    </>
  );
}

export default Home;
