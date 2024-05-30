import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbarBox">
        <div className="logoBox">
          <FontAwesomeIcon icon={faDesktop} />
        </div>
        <div className="navbarListBox">
          <div className="homeBox">
            <Link to="/">Home</Link>
          </div>
          <div className="moviesBox">
            <Link to="/movies">Movies</Link>
          </div>
          <div className="tvShowsBox">
            <Link to="/tv-shows">TV Shows</Link>
          </div>
          <div className="browseByLangBox">
            <Link to="/browseByLanguages">Browse By Languages</Link>
          </div>
        </div>
        <div className="searchBox">
          <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="iconAndTextField"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
