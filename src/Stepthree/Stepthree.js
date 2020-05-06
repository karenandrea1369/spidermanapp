import React from 'react';
import './Stepthree.css';
import { SpidermanContext } from '../utils/SpidermanContext';

const Stepthree = (props) => {

    var suits = [1,2,3,4];
    var colors = ['rojo', 'azul', 'negro'];

    const context = React.useContext(SpidermanContext);

    const handleSuit = (suit) => {
        context.setConfig({
            ...context.config,
            suit : suit,
        })
    };

    const handleColorOne = (colorOne) => {
        context.setConfig({
            ...context.config,
            colorOne : colorOne,
        })
    };

    const handleColorTwo = (colorTwo) => {
        context.setConfig({
            ...context.config,
            colorTwo : colorTwo,
        })
    };

    return(
        <div>
            <p>TRAJE</p>
            <div className="stepthree__suits">
                {suits.map(suit =>{
                    return <div className="stepthree__suitbtn">               
                        {context.config.suit === suit && 
                            <button className="stepthree__suitbtn--selected" onClick={()=>handleSuit(suit)}>
                                <img src={'./data/suit' + suit + '.png'}/>
                            </button>
                        }

                        {context.config.suit !== suit && 
                            <button onClick={()=>handleSuit(suit)}>
                                <img src={'./data/suit' + suit + '.png'}/>
                            </button>
                        }
                    </div>
                })}
            </div>
            

            <div className="stepthree__colors">
                <div>
                    <p>COLOR PRIMARIO</p>
                    <div className="stepthree__colorbuttons">
                        {colors.map(col =>{
                            return <div className="stepthree__colorbtn">               
                                {context.config.colorOne === col && 
                                    <button className="stepthree__colorbtn--selected" onClick={()=>handleColorOne(col)}>
                                        <img src={'./data/' + col + 'btn.png'}/>
                                    </button>
                                }

                                {context.config.colorOne !== col && 
                                    <button onClick={()=>handleColorOne(col)}>
                                        <img src={'./data/' + col + 'btn.png'}/>
                                    </button>
                                }
                            </div>
                        })}
                    </div>
                </div>
                <div>
                    <p>COLOR SECUNDARIO</p>
                    <div className="stepthree__colorbuttons">
                        {colors.map(col =>{
                            return <div className="stepthree__colorbtn">               
                                {context.config.colorTwo === col && 
                                    <button className="stepthree__colorbtn--selected" onClick={()=>handleColorTwo(col)}>
                                        <img src={'./data/' + col + 'btn.png'}/>
                                    </button>
                                }

                                {context.config.colorTwo !== col && 
                                    <button onClick={()=>handleColorTwo(col)}>
                                        <img src={'./data/' + col + 'btn.png'}/>
                                    </button>
                                }
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

}
    
Stepthree.propTypes = {
    
}
      
export default Stepthree;