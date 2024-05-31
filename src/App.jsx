import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Coaching from "./Coaching/Coaching";
import NavBar from "./NavBar/NavBar";
import Kurse from "./Kurse/Kurse";
import Contact from "./Contact/Contact";
import Corporate from "./Corporate/Corporate";
import UberMich from "./ÜberMich/UberMich";
import Workshops from "./Workshops/Workshops";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Coaching" element={<Coaching />} />
          <Route path="/Kurse" element={<Kurse />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Corporate" element={<Corporate />} />
          <Route path="/UberMich" element={<UberMich />} />
          <Route path="/Workshops" element={<Workshops />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
