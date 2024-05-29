import React, { useEffect, useState } from "react";
import { fetchData } from "./api/apiService";

function App() {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Testing...</h1>
    </>
  );
}

export default App;
