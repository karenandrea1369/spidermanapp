import React from 'react';
import './Spiderman.css';
import PropTypes from 'prop-types';
import { SpidermanContext } from '../utils/SpidermanContext';

const Spiderman = (props) => {

//     const context = React.useContext(SpidermanContext);
//     const handleEdit = (id)=>{
//          onEdit(id);
//     }

//     const handleDelete = (id)=>{
//         onEdit(id);
//    }

    return(
        <div className="spiderman__container">
            <div className="spiderman__charactername">
                <p>{props.name}</p>
            </div>

            <div className="spiderman__background">
                <img className="spiderman__backgroundimg" 
                src={'/data/fondo' + props.fondo + '.png'}/>

                <div className="spiderman__body" >
                    <div className="character__accessory1">
                        {props.accessory1 && <img src = '/data/accessory1.png'/>}
                    </div>
                    <div className="spiderman__head">
                        {props.mask && 
                        <img src = {'/data/mascara' + props.suit + '_color' + props.colorOne + '.png'}/>}
                        {!props.mask && <img src= {'/data/' + props.actor + '.png'} />}
                    </div>
                    <div className="spiderman__color1">
                        <img src={'/data/traje' + props.suit + '_parte1_color' + props.colorOne + '.png'}/>
                    </div>
                    <div className="spiderman__color2">
                        <img src={'/data/traje' + props.suit + '_parte2_color' + props.colorTwo + '.png'}/>
                    </div>
                    <div className="character__accessory2">
                        {props.accessory2 && <img src = '/data/accessory2.png'/>}
                    </div>
                    <div className="character__accessory3">
                        {props.accessory3 && <img src = '/data/accessory3.png'/>}
                    </div>

                </div>
            </div>

            {/* {onDelete && onEdit && <div>
                <button onClick = {handleEdit}>Edit</button>
                <button onClick = {handleEdit}>Delete</button>
            </div>} */}
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
    // onEdit : PropTypes.func,
    // onDelete : PropTypes.func,
}
      
export default Spiderman;