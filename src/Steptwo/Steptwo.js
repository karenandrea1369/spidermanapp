import React from 'react';
import './Steptwo.css';
import { SpidermanContext } from '../utils/SpidermanContext';

const Steptwo = (props) => {

    var actors = ['tobey', 'andrew', 'tom'];
    var accesories = [1, 2, 3];

    const context = React.useContext(SpidermanContext);

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

    const handleAccessory = (accesory) => {
        var acce = 'accessory' + accesory;
        var acceState = 'context.config.accessory' + accesory;
        console.log(acceState);
            context.setConfig({
             ...context.config,
             acce : !acceState,
         })
    };

    const handleAccessory1 = (event) => {
            context.setConfig({
             ...context.config,
             accessory1 : !context.config.accessory1,
         })
    };

    const handleAccessory2 = (event) => {
        context.setConfig({
            ...context.config,
            accessory2 : !context.config.accessory2,
        })
    };

    const handleAccessory3 = (event) => {
        context.setConfig({
            ...context.config,
            accessory3 : !context.config.accessory3,
        })
    };

    return(
        <div>
            <p>ESCOGE TU ACTOR FAVORITO</p>

            <div className="steptwo__actors">
                {actors.map(actor =>{
                    return <div className="steptwo__actorbtn">               
                        {!context.config.mask && context.config.actor === actor &&
                        <button className="steptwo__facebtn steptwo__facebtn--selected" onClick={()=>handleActor(actor)}>
                            <img src={'/data/' + actor + 'btn.png'} />
                        </button>
                        }

                        {(context.config.mask || context.config.actor !== actor) &&
                        <button className="steptwo__facebtn" onClick={()=>handleActor(actor)}>
                            <img src={'/data/' + actor + 'btn.png'} />
                        </button>
                        }
                    </div>
                })}
            </div>

            {/* ---------------Accesorios---------------- */}

            <p>ACCESORIOS</p>
            {context.config.accessory1 &&
            <button className="stepone__facebtn button__selected" onClick={handleAccessory1}>
                <img src="/data/btnAccessory1.png" />
            </button>
            }

            {!context.config.accessory1 &&
            <button className="stepone__facebtn " onClick={handleAccessory1}>
                <img src="/data/btnAccessory1.png" />
            </button>
            }

            {context.config.accessory2 &&
            <button className="stepone__facebtn button__selected" onClick={handleAccessory2}>
                <img src="/data/btnAccessory2.png" />
            </button>
            }

            {!context.config.accessory2 &&
            <button className="stepone__facebtn " onClick={handleAccessory2}>
                <img src="/data/btnAccessory2.png" />
            </button>
            }

            {context.config.accessory3 &&
            <button className="stepone__facebtn button__selected" onClick={handleAccessory3}>
                <img src="/data/btnAccessory3.png" />
            </button>
            }

            {!context.config.accessory3 &&
            <button className="stepone__facebtn " onClick={handleAccessory3}>
                <img src="/data/btnAccessory3.png" />
            </button>
            }

            {/* <button className="stepone__facebtn" onClick={handleAccessory2}>
                <img src="/data/btnAccessory2.png" />
            </button>
            <button className="stepone__facebtn" onClick={handleAccessory3}>
                <img src="/data/btnAccessory3.png" />
            </button> */}

        </div>
    );

}
    
Steptwo.propTypes = {
    
}
      
export default Steptwo;

// Otra forma de hacer lo de la máscara con énfasis en la máscara
// if(context.config.mask){
        //     context.setConfig({
        //          ...context.config,
        //          actor : actor,
        //          mask : false,
        //     })
        // } else {
        //     if(context.config.actor === actor){
        //         context.setConfig({
        //             ...context.config,
        //             mask : true,
        //        })
        //     } else {
        //         context.setConfig({
        //             ...context.config,
        //             actor : actor,
        //        })
        //     }
        // }