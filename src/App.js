import React, { useEffect, useState } from "react";
import { fetchData, testFunction } from "./api/apiService";

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
      <div>
        <h1>Test</h1>
      </div>
    </>
  );
}

export default App;
