import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Albums from "./components/Albums";
import Artist from "./components/Artist";
import Search from "./components/Search";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="Tittle">Albums's Top</h1>
        <Search />
        <br />
        <Routes>
          <Route path="/albums/:tag" element={<Albums />} />
          <Route path="/artist/:artist" element={<Artist />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
