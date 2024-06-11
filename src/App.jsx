import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
      <Router>
        <div className="parentBox">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
          <Footer />
        </div>
        {/* <LearnCss /> */}
      </Router>
    </>
  );
}

export default App;
