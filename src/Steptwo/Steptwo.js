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

    const handleAccessory = (accessory) => {
        var acce = 'accessory' + accessory;
            context.setConfig({
             ...context.config,
             [acce] : !context.config[acce],
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
                            <img src={'./data/' + actor + 'btn.png'} />
                        </button>
                        }

                        {(context.config.mask || context.config.actor !== actor) &&
                        <button className="steptwo__facebtn" onClick={()=>handleActor(actor)}>
                            <img src={'./data/' + actor + 'btn.png'} />
                        </button>
                        }
                    </div>
                })}
            </div>

            {/* ---------------Accesorios---------------- */}

            <p>ACCESORIOS</p>

            <div className="steptwo__accessories">
                {accesories.map( accessory =>{
                    return <div className="steptwo__accessorybtn">
                        
                        {context.config['accessory' + accessory] &&
                            <button className="stepone__facebtn button__selected" onClick={()=>handleAccessory(accessory)}>
                                <img src={'./data/btnAccessory' + accessory + '.png'} />
                            </button>
                        }

                        {!context.config['accessory' + accessory] &&
                            <button className="stepone__facebtn " onClick={()=>handleAccessory(accessory)}>
                                <img src={'./data/btnAccessory' + accessory + '.png'} />
                            </button>
                        }
                    </div>
                })}
            </div>
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