import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages";
import Lounging from "./pages/lounging";
import Travel from "./pages/travel";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/lounging" element={<Lounging />} />
      </Routes>
    </Router>
  );
}

export default App;
