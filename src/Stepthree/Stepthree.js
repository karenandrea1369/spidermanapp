import React from 'react';
import './Stepthree.css';

const Stepthree = (props) => {
    return(
        <div>
            <p>TRAJE</p>
            <button className="stepone__suitbtn">
                <img src="/data/suit1.png"/>
            </button>
            <button className="stepone__suitbtn">
                <img src="/data/suit2.png"/>
            </button>
            <button className="stepone__suitbtn">
                <img src="/data/suit3.png"/>
            </button>
            <p>COLOR PRIMARIO</p>
            <input type="color" />
            <p>COLOR SECUNDARIO</p>
            <input type="color" />
        </div>
    );

}
    
Stepthree.propTypes = {
    
}
      
export default Stepthree;