import React from 'react';
import PropTypes from 'prop-types';
import './Back.css';

const Back = (props) => {
    return (
        <a href={props.dir}>
            <button className="back">
                <img className="back__img" src="/data/back.png"/>
            </button>
        </a>
    );
}
    
Back.propTypes = {
    dir: PropTypes.string,
}
      
export default Back;