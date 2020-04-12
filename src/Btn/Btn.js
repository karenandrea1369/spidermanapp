import React from 'react';
import PropTypes from 'prop-types';
import './Btn.css';

const Btn = (props) => {
    
    
    return (
    <button className="btn">{props.texto}</button>
    );
  }

  Btn.propTypes = {
    texto: PropTypes.string,
}
  
  export default Btn;