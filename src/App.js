import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Create from './Create/Create';

function App() {
  return (
    <div>
      <Router>

        <Route path="/" exact component={Home}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/create" component={Create}/>

      </Router>
    </div>
  );
}

export default App;
