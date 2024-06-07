import React from "react";
import { AdLeftSide, AdRightSide } from "../components/Advertisment";
import ListCarasoul from "../components/ListCarasoul";
function Home() {
  return (
    <>
      <div className="home-body">
        <div className="ad1 home-body-item">
          {" "}
          <AdLeftSide />
        </div>

        <div className="carasoul home-body-item">
          <ListCarasoul />
        </div>
        <div className="ad2 home-body-item">
          {" "}
          <AdRightSide />
        </div>
      </div>
    </>
  );
}

export default Home;
