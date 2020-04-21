import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Create from './Create/Create';
import { SpidermanContext } from './utils/SpidermanContext';
import { v4 } from 'uuid';

function App() {

  // const [id , setId ] = React.useState(v4());
  // const [name , setName ] = React.useState('');
  // const [actor , setActor ] = React.useState('/data/tobey.png');

  const [config, setConfig] = React.useState({
    id : v4(),
    name : '',
    actor : '/data/tobey.png',
    mask : false,
    accessory1 : false,
    accessory2 : false,
    accessory3 : false,
  })

  const value = {
    // id : id,
    // name : name,
    // actor : actor,
    // setName : setName,
    // setActor : setActor,
    config : config,
    setConfig : setConfig,
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
