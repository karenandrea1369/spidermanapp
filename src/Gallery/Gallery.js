import React from 'react';
import './Gallery.css';
import { Link , Route, useHistory} from 'react-router-dom';
import { SpidermanContext } from '../utils/SpidermanContext';
import Back from '../Back/Back';
import Btn from '../Btn/Btn';
import Spiderman from '../Spiderman/Spiderman';

const Gallery = (props) => {

    const context = React.useContext(SpidermanContext);
    const history = useHistory()
    const btn1 = "CREA UNO";

    const handleEditSpiderman = (id)=>{
        // onEdit(id);
        const index = context.list.findIndex((elem) => {
            return elem.id === id;
        });
        
        const spidey = context.list[index];

        context.setConfig({
            id : spidey.id,
            name : spidey.name,
            actor : spidey.actor,
            mask : spidey.mask,
            accessory1 : spidey.accessory1,
            accessory2 : spidey.accessory2,
            accessory3 : spidey.accessory3,
            suit : spidey.suit,
            colorOne : spidey.colorOne,
            colorTwo : spidey.colorTwo,
            fondo : spidey.fondo,
        });

        history.push('/crear/pasouno');

        // context.setList([
        //     ...context.list.slice(0 , index),
        //     ...context.list.slice(index + 1),
        // ])
    }

    const handleDeleteSpiderman = (id)=>{
        // onEdit(id);
        const index = context.list.findIndex((elem) => {
            return elem.id === id;
        });
        console.log()
        context.setList([
            ...context.list.slice(0 , index),
            ...context.list.slice(index + 1),
        ])
    }

    return (
        <div>
            <div className="gallery__header">
                <div className="gallery__back">
                    <Link to="/"><Back /></Link>
                </div>
                <div className="gallery__tittle">
                    <img src="/data/galeria.png"/>
                </div>
            </div>

            <div className="gallery">

                {context.list.length=== 0 &&
                    <div className="gallery__empty">
                        <img className="gallery__emptyimg" src="./data/empty.png"/>
                        <div className="gallery__emptybtn">
                            <Link to="/crear/pasouno"><Btn texto={"CREA UNO"} /></Link>
                        </div>
                    </div>
                }

                {context.list.length > 0 &&
                    <div className="module__container">                    
                        {context.list.map(spidey => {
                            return(
                            <div className="module">    
                                <Spiderman 
                                    id = {spidey.id}
                                    name = {spidey.name}
                                    actor = {spidey.actor} 
                                    mask = {spidey.mask} 
                                    accessory1 = {spidey.accessory1} 
                                    accessory2 = {spidey.accessory2} 
                                    accessory3 = {spidey.accessory3} 
                                    suit = {spidey.suit} 
                                    colorOne = {spidey.colorOne} 
                                    colorTwo = {spidey.colorTwo} 
                                    fondo = {spidey.fondo}
                                />
                                <div>
                                    <button onClick={()=>handleEditSpiderman(spidey.id)}>Editar</button>
                                    <button onClick={()=>handleDeleteSpiderman(spidey.id)}>Eliminar</button>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                }
                

            </div>

             {/* --------------- EMPTY STATE --------------- */}
            {/*
            <div className="gallery__empty">
                <img className="gallery__emptyimg" src="/data/empty.png"/>
                <div className="gallery__emptybtn">
                    <Btn texto={btn1}/>
                </div>
            </div>
            */}
        </div>
    );
}
    
Gallery.propTypes = {
    
}
      
export default Gallery;