import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchResult, setSearchRestult] = useState("");

  function handleSearch(e) {
    setSearchRestult(e.target.value);
    console.log("333333333", searchResult);
  }

  return (
    <>
      <div className="navbarBox">
        <div className="logoBox">
          <Link to="/">
            {" "}
            <FontAwesomeIcon
              icon={faDesktop}
              style={{
                color: "#0E46A3",
                fontSize: "40px",
              }}
            />
          </Link>
        </div>
        <div className="navbarListBox">
          <div className="homeBox" id="navList">
            <Link to="/">Home</Link>
          </div>
          <div className="moviesBox" id="navList">
            <Link to="/movies">Movies</Link>
          </div>
          <div className="tvShowsBox" id="navList">
            <Link to="/tv-shows">TV Shows</Link>
          </div>
          <div className="browseByLangBox" id="navList">
            <Link to="/browseByLanguages">Browse By Languages</Link>
          </div>
        </div>
        <div className="searchBox">
          <input
            className="input"
            placeholder="Search"
            value={searchResult}
            onChange={handleSearch}
            size={30}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
