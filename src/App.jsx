import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { fetchData } from "./api/apiService";
import Navbar from "./components/Navbar";

function App() {
  const [listMovies, setListMovies] = useState([]);
  useEffect(() => {
    fetchResponse();
  }, []);

  async function fetchResponse() {
    try {
      const response = await fetchData();
      console.log("444444444", response);
      setListMovies(response);
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <BrowserRouter>
        <div className="parentBox">
          <Navbar />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
