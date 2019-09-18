import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Switch>
          <Route path={`/albums/:tag`} component={Albums}></Route>
          <Route path="/artist/:artist" component={Artist}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
