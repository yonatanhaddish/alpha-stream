import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { fetchMoviesData, fetchSeriesMoviesData } from "./api/apiService";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ListCarasoul from "./components/ListCarasoul";

function App() {
  const [listMovies, setListMovies] = useState([]);
  const [listSeriesMovies, setListSeriesMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
    // fetchSeriesMoviesData();
  }, []);

  async function fetchMovies() {
    try {
      const response = await fetchMoviesData();
      console.log("444444444", response);
      setListMovies(response);
    } catch (err) {
      throw err;
    }
  }

  async function fetchSeriesMoviesData() {
    try {
      const response = await fetchSeriesMoviesData();
      console.log("11111111", response);
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <BrowserRouter>
        <div className="parentBox">
          <Navbar />
          <ListCarasoul />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
