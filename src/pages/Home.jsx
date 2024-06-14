import React from "react";
import { AdLeftSide, AdRightSide } from "../components/Advertisment";
import ListCarasoul from "../components/ListCarasoul";
function Home() {
  return (
    <>
      <div className="home-body">
        {/* <AdLeftSide /> */}
        <ListCarasoul />
        <ListCarasoul /> <ListCarasoul />
        {/* <AdRightSide /> */}
      </div>
    </>
  );
}

export default Home;
