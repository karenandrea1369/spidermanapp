import React from 'react';
import './Gallery.css';
import { Link , Route} from 'react-router-dom';
import { SpidermanContext } from '../utils/SpidermanContext';
import Back from '../Back/Back';
import Btn from '../Btn/Btn';

const Gallery = (props) => {

    const context = React.useContext(SpidermanContext);
    const btn1 = "CREA UNO";

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
                <div className="module">
                    <img className="module__img" src="/data/inicio.png"/>
                    <p className="module__name">NOMBRE DEL PERSONAJE</p>
                </div>
                
                {context.list.map(spidy => {
                    
                })}

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