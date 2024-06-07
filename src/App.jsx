import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ListCarasoul from "./components/ListCarasoul";
import Home from "./pages/Home";
import LearnCss from "./components/LearnCss";

function App() {
  return (
    <>
      <Router>
        <div className="parentBox">
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<ListCarasoul />} /> */}
            {/* <Route path="/movies" element={<Movies />} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
        {/* <LearnCss /> */}
      </Router>
    </>
  );
}

export default App;
