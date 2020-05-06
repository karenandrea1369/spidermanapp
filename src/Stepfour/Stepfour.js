import React from 'react';
import './Stepfour.css';
import { SpidermanContext } from '../utils/SpidermanContext';
import { useHistory} from 'react-router-dom';
import { v4 } from 'uuid';

const Stepfour = (props) => {

    const context = React.useContext(SpidermanContext);
    const history = useHistory();

    var bgs = [1,2,3];

    const handleBg = (fondo) => {
        context.setConfig({
            ...context.config,
            fondo : fondo,
        })
    };

    const handleFinish = () => {
        const newSpidey = {
            id : v4(),
            name : context.config.name,
            actor : context.config.actor,
            mask : context.config.mask,
            accessory1 : context.config.accessory1,
            accessory2 : context.config.accessory2,
            accessory3 : context.config.accessory3,
            suit : context.config.suit,
            colorOne : context.config.colorOne,
            colorTwo : context.config.colorTwo,
            fondo : context.config.fondo,
        };

        context.setConfig({
            id : '',
            name : 'Mi primer Spiderman',
            actor : 'tobey',
            mask : true,
            accessory1 : false,
            accessory2 : false,
            accessory3 : false,
            suit : 1,
            colorOne : 'rojo',
            colorTwo : 'azul',
            fondo : 1,
        });

        const index = context.list.findIndex((elem) => {
            return elem.id === newSpidey.id;
        });

        if(index === -1){
            context.setList([
                ...context.list,
                newSpidey,
            ]);
        } else {
            context.setList([
                ...context.list.slice(0,index),
                newSpidey,
                ...context.list.slice(index+1)
            ]);
        }
        history.push('/gallery');
    };

    return(
        <div>
            <p>FONDO</p>
            <div className="stepfour__bgs">
                {bgs.map(bg =>{
                    return <div className="stepfour__bgbtn">               
                        {context.config.fondo === bg && 
                            <button className="stepfour__bgbtn--selected" onClick={()=>handleBg(bg)}>
                                <img src={'./data/fondo' + bg + '.png'}/>
                            </button>
                        }

                        {context.config.fondo !== bg && 
                            <button onClick={()=>handleBg(bg)}>
                                <img src={'./data/fondo' + bg + '.png'}/>
                            </button>
                        }
                    </div>
                })}
            </div>

            <button onClick={handleFinish}>
                FINALIZAR
            </button>

        </div>
    );

}
    
Stepfour.propTypes = {
    
}
      
export default Stepfour;