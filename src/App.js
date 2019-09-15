import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Albums from './components/Albums';
import Artist from './components/Artist';
import Search from './components/Search';

import './App.css';

function App() {
  const [query, setQuery] = useState("");

  return (
    <Router>
      <div className="App">
        <h1 className="Tittle">Albums's Top by Genre</h1>
        <Search setQuery={setQuery} />
        <br />
        <h3 className="SubTittle">{query.toUpperCase()}</h3>
        <Switch>
          <Route path={`/albums/:tag`} component={Albums}></Route>
          <Route path="/artist/:artist" component={Artist}></Route>
        </Switch>   
      </div>
    </Router>
  )
}
export default App;
