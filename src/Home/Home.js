import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Btn from '../Btn/Btn';

function Home() {
    return (
      <div className="inicio">

        <img className="inicio__img" src="./data/inicio.png" alt=" "/>
        <Link to="/crear/pasouno"><Btn texto={"CREA UNO"} /></Link>
        <Link to="/galeria"><Btn texto={"GALERÍA"} /></Link>

        

        {/* <p className="inicio__copy">© KAREN CASTAÑEDA</p> */}

      </div>
    );
  }
  
  export default Home;