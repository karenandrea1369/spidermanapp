import React from 'react';
import './Steptwo.css';
import { SpidermanContext } from '../utils/SpidermanContext';

const Steptwo = (props) => {

    var actors = ['tobey', 'andrew', 'tom'];

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
            {!context.config.mask && context.config.actor === 'tobey' &&
            <button className="stepone__facebtn button__selected" onClick={()=>handleActor('tobey')}>
                <img src="/data/tobeybtn.png" />
            </button>
            }

            {(context.config.mask || context.config.actor !== 'tobey') &&
            <button className="stepone__facebtn" onClick={()=>handleActor('tobey')}>
                <img src="/data/tobeybtn.png" />
            </button>
            }

            {!context.config.mask && context.config.actor === 'andrew' &&
            <button className="stepone__facebtn button__selected" onClick={()=>handleActor('andrew')}>
                <img src="/data/andrewbtn.png" />
            </button>
            }

            {(context.config.mask || context.config.actor !== 'andrew') &&
            <button className="stepone__facebtn" onClick={()=>handleActor('andrew')}>
                <img src="/data/andrewbtn.png" />
            </button>
            }

            {!context.config.mask && context.config.actor === 'tom' &&
            <button className="stepone__facebtn button__selected" onClick={()=>handleActor('tom')}>
                <img src="/data/tombtn.png" />
            </button>
            }

            {(context.config.mask || context.config.actor !== 'tom') &&
            <button className="stepone__facebtn" onClick={()=>handleActor('tom')}>
                <img src="/data/tombtn.png" />
            </button>
            }

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