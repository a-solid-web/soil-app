import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Overview from './pages/Overview';
import NavBar from './components/NavBar';

import { LANDING, OVERVIEW } from './utils/routes';

import './App.css';

function App() {
  return (
    <Router>
      <Route path={LANDING} component={NavBar} />
      <Switch>
        <Route exact path={LANDING} component={Landing} />
        <Route exact path={OVERVIEW} component={Overview} />
      </Switch>
    </Router>
  );
}

export default App;
