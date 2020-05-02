import React from 'react';
import './Stepone.css';
import {TextField, Typography} from '@material-ui/core';
import { SpidermanContext } from '../utils/SpidermanContext';

const Stepone = (props) => {

    const context = React.useContext(SpidermanContext);

    const handleName = (event) => {
        context.setConfig({
            ...context.config,
            name : event.target.value,
        })
    }

    const handleMask = (event) => {
        // if(!context.config.actor && context.config.mask){
        if(context.config.mask){
            context.setConfig({
                ...context.config,
                mask : false,
                // actor : 'tobey',
            })
        } else {
            context.setConfig({
                ...context.config,
                mask : true,
                // actor : '',
            })
        }

    };

    return(
        <div>
            <p>NOMBRE DE TU PERSONAJE</p>
            <TextField 
                label ="Nombre"
                value = {context.config.name}
                onChange = {handleName}
            />

            <p>MÁSCARA</p>
            <input type="checkbox" onChange={handleMask} checked={context.config.mask}/>

            

            {/* <button className="stepone__facebtn" onClick={()=>handleActor('andrew')}>
                <img src="/data/andrew.png"/>
            </button>
            <button className="stepone__facebtn" onClick={()=>handleActor('tom')}>
                <img src="/data/tom.png"/>
            </button> */}
        </div>
    );


}
    
Stepone.propTypes = {
    
}
      
export default Stepone;