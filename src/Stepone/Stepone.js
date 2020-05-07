import React from 'react';
import './Stepone.css';
import {TextField, Typography} from '@material-ui/core';
import { SpidermanContext } from '../utils/SpidermanContext';

const Stepone = (props) => {

    const context = React.useContext(SpidermanContext);
    var actors = ['tobey', 'andrew', 'tom'];
    
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

    const handleActor = (actor) => {

        if(context.config.actor === actor){
            if(context.config.mask){
                context.setConfig({
                   ...context.config,
                   mask : false,
                })
            } else {
                context.setConfig({
                    ...context.config,
                    mask : true,
                }) 
            }
        } else if(context.config.actor !== actor){
             context.setConfig({
                 ...context.config,
                 actor : actor,
                 mask : false,
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

            <p>ESCOGE TU ACTOR FAVORITO</p>
            <div className="stepone__actors">
                {actors.map(actor =>{
                    return <div className="stepone__actorbtn">               
                        {!context.config.mask && context.config.actor === actor &&
                        <button className="stepone__facebtn stepone__facebtn--selected" onClick={()=>handleActor(actor)}>
                            <img src={'./data/' + actor + 'btn.png'} />
                        </button>
                        }

                        {(context.config.mask || context.config.actor !== actor) &&
                        <button className="stepone__facebtn" onClick={()=>handleActor(actor)}>
                            <img src={'./data/' + actor + 'btn.png'} />
                        </button>
                        }
                    </div>
                })}
            </div>

        </div>
    );


}
    
Stepone.propTypes = {
    
}
      
export default Stepone;