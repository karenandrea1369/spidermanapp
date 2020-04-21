import React from 'react';
import './Steptwo.css';
import { SpidermanContext } from '../utils/SpidermanContext';

const Steptwo = (props) => {

    const context = React.useContext(SpidermanContext);

    const handleMask = (event) => {
        context.setConfig({
            ...context.config,
            mask : !context.config.mask,
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
            <p>MÁSCARA</p>
            <input type="checkbox" onChange={handleMask}/>
            <p>ACCESORIOS</p>
            <button className="stepone__facebtn" onClick={handleAccessory1}>
                <img src="/data/btnAccessory1.png" />
            </button>
            <button className="stepone__facebtn" onClick={handleAccessory2}>
                <img src="/data/btnAccessory2.png" />
            </button>
            <button className="stepone__facebtn" onClick={handleAccessory3}>
                <img src="/data/btnAccessory3.png" />
            </button>

        </div>
    );

}
    
Steptwo.propTypes = {
    
}
      
export default Steptwo;