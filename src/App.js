import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Overview from './pages/Overview';

import './App.css';

function App() {
  return (
    <Router>
      <Route to="/" component={Landing} />
      <Route to="/overview" component={Overview} />
    </Router>
  );
}

export default App;
