import React from 'react';
import './Stepfour.css';

const Stepfour = (props) => {
    return(
        <div>
            <p>ACOMPAÑANTE</p>
            <button className="stepfour__partnerbtn">
                <img src="/data/tobey.png"/>
            </button>
            <button className="stepone__partnerbtn">
                <img src="/data/tobey.png"/>
            </button>
            <button className="stepone__partnerbtn">
                <img src="/data/tobey.png"/>
            </button>
            <button className="stepone__partnerbtn">
                <img src="/data/tobey.png"/>
            </button>
        </div>
    );

}
    
Stepfour.propTypes = {
    
}
      
export default Stepfour;