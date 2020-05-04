import React from 'react';
import './Stepfour.css';
import { SpidermanContext } from '../utils/SpidermanContext';

const Stepfour = (props) => {

    const context = React.useContext(SpidermanContext);

    var bgs = [1,2,3];

    const handleBg = (fondo) => {
        context.setConfig({
            ...context.config,
            fondo : fondo,
        })
    };

    return(
        <div>
            <p>FONDO</p>
            <div className="stepfour__bgs">
                {bgs.map(bg =>{
                    return <div className="stepfour__bgbtn">               
                        {context.config.fondo === bg && 
                            <button className="stepfour__bgbtn--selected" onClick={()=>handleBg(bg)}>
                                <img src={'/data/fondo' + bg + '.png'}/>
                            </button>
                        }

                        {context.config.fondo !== bg && 
                            <button onClick={()=>handleBg(bg)}>
                                <img src={'/data/fondo' + bg + '.png'}/>
                            </button>
                        }
                    </div>
                })}
            </div>

            <button>
                FINALIZAR
            </button>

        </div>
    );

}
    
Stepfour.propTypes = {
    
}
      
export default Stepfour;