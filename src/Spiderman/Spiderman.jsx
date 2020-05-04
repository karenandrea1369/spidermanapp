import React from 'react';
import './Spiderman.css';
import PropTypes from 'prop-types';
import { SpidermanContext } from '../utils/SpidermanContext';

const Spiderman = (props) => {

    const context = React.useContext(SpidermanContext);

    return(
        <div className="spiderman__container">
            <div className="spiderman__charactername">
                <p>{context.config.name}</p>
            </div>

            <div className="spiderman__background">
                <img className="spiderman__backgroundimg" 
                src={'/data/fondo' + context.config.fondo + '.png'}/>

                <div className="spiderman__body" >
                    <div className="character__accessory1">
                        {context.config.accessory1 && <img src = '/data/accessory1.png'/>}
                    </div>
                    <div className="spiderman__head">
                        {context.config.mask && 
                        <img src = {'/data/mascara' + context.config.suit + '_color' + context.config.colorOne + '.png'}/>}
                        {!context.config.mask && <img src= {'/data/' + context.config.actor + '.png'} />}
                    </div>
                    <div className="spiderman__color1">
                        <img src={'/data/traje' + context.config.suit + '_parte1_color' + context.config.colorOne + '.png'}/>
                    </div>
                    <div className="spiderman__color2">
                        <img src={'/data/traje' + context.config.suit + '_parte2_color' + context.config.colorTwo + '.png'}/>
                    </div>
                    <div className="character__accessory2">
                        {context.config.accessory2 && <img src = '/data/accessory2.png'/>}
                    </div>
                    <div className="character__accessory3">
                        {context.config.accessory3 && <img src = '/data/accessory3.png'/>}
                    </div>

                </div>
            </div>
        </div>
    );

}

Spiderman.propTypes = {
    id : PropTypes.string,
    name : PropTypes.string,
    actor : PropTypes.string,
    mask : PropTypes.bool,
    accessory1 : PropTypes.bool,
    accessory2 : PropTypes.bool,
    accessory3 : PropTypes.bool,
    suit : PropTypes.number,
    colorOne : PropTypes.string,
    colorTwo : PropTypes.string,
    fondo : PropTypes.number,
}
      
export default Spiderman;