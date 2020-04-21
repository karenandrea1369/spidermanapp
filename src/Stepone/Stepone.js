import React from 'react';
import './Stepone.css';
import {TextField, Typography} from '@material-ui/core';
import { SpidermanContext } from '../utils/SpidermanContext';

const Stepone = (props) => {

    const context = React.useContext(SpidermanContext);

    const handleActor1 = (event) => {
        context.setConfig({
            ...context.config,
            actor : '/data/tobey.png',
        })
    };
    const handleActor2 = (event) => {
        context.setConfig({
            ...context.config,
            actor : '/data/andrew.png',
        })
    };
    const handleActor3 = (event) => {
        context.setConfig({
            ...context.config,
            actor : '/data/tom.png',
        })
    };

    const handleName = (event) => {
        context.setConfig({
            ...context.config,
            name : event.target.value,
        })
    }

    return(
        <div>
            <p>NOMBRE DE TU PERSONAJE</p>
            <TextField 
                label ="Nombre"
                value = {context.name}
                onChange = {handleName}
            />
            <p>ESCOGE TU ACTOR FAVORITO</p>
            <button className="stepone__facebtn" onClick={handleActor1}>
                <img src="/data/tobey.png" />
            </button>
            <button className="stepone__facebtn" onClick={handleActor2}>
                <img src="/data/andrew.png"/>
            </button>
            <button className="stepone__facebtn" onClick={handleActor3}>
                <img src="/data/tom.png"/>
            </button>
        </div>
    );


}
    
Stepone.propTypes = {
    
}
      
export default Stepone;