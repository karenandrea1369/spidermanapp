import React from 'react';
import './Steptwo.css';

const Steptwo = (props) => {
    return(
        <div>
            <p>ALTO</p>
            <input type="range" />
            <p>PESO</p>
            <input type="range" />

        </div>
    );

}
    
Steptwo.propTypes = {
    
}
      
export default Steptwo;