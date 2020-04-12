import React from 'react';
import './Stepone.css';


const Stepone = (props) => {
    return(
        <div>
            <p>NOMBRE DE TU PERSONAJE</p>
            <input></input>
            <p>ESCOGE TU ACTOR FAVORITO</p>
            <button className="stepone__facebtn">
                <img src="/data/tobey.png"/>
            </button>
            <button className="stepone__facebtn">
                <img src="/data/andrew.png"/>
            </button>
            <button className="stepone__facebtn">
                <img src="/data/tom.png"/>
            </button>
            <p>MÁSCARA</p>
            <input type="checkbox"/>
        </div>
    );

}
    
Stepone.propTypes = {
    
}
      
export default Stepone;