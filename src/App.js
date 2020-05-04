import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Create from './Create/Create';
import { SpidermanContext } from './utils/SpidermanContext';
import { v4 } from 'uuid';

function App() {

  const [config, setConfig] = React.useState({
    id : v4(),
    name : 'Mi primer Spiderman',
    actor : 'tobey',
    mask : true,
    accessory1 : false,
    accessory2 : false,
    accessory3 : false,
    suit : 1,
    colorOne : 'rojo',
    colorTwo : 'azul',
    fondo : 1,
  })

  const [list, setList] = React.useState([ ]);

  const value = {
    config : config,
    setConfig : setConfig,
    list : list,
    setList : setList,
  }

  return (
    <div>
      <SpidermanContext.Provider value = {value}>
        <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/create" component={Create}/>
        </Router>
      </SpidermanContext.Provider>
    </div>
  );
}

export default App;
