import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ListCarasoul from "./components/ListCarasoul";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
      <Router>
        <div className="parentBox">
          <Navbar />
          <Routes>
            <Route path="/" element={<ListCarasoul />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
