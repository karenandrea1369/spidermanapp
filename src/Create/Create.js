import React from 'react';
import './Create.css';
import { Link , Route} from 'react-router-dom';
import Back from '../Back/Back';
import Stepone from '../Stepone/Stepone';
import Steptwo from '../Steptwo/Steptwo';
import Stepthree from '../Stepthree/Stepthree';
import Stepfour from '../Stepfour/Stepfour';
import { SpidermanContext } from '../utils/SpidermanContext';


const Create = (props) => {

    const context = React.useContext(SpidermanContext);

    return (
        <div>
            <div className="create__header">
                <div className="create__back">
                    <Link to="/"><Back /></Link>
                </div>
                <div className="create__tittle">
                    <img src="/data/crea.png"/>
                </div>
            </div>

            <div className="create">
                
                <div className="create__character">
                    <div className="create__charactername">
                        <p>{context.config.name}</p>
                    </div>
                    <div className="create__background">
                        <img className="create__backgroundimg" 
                        src={'/data/fondo' + context.config.fondo + '.png'}/>

                        <div className="create__body" >
                            <div className="character__accessory1">
                                {context.config.accessory1 && <img src = '/data/accessory1.png'/>}
                            </div>
                            <div className="create__head">
                                {context.config.mask && 
                                <img src = {'/data/mascara' + context.config.suit + '_color' + context.config.colorOne + '.png'}/>}
                                {!context.config.mask && <img src= {'/data/' + context.config.actor + '.png'} />}
                            </div>
                            <div className="create__color1">
                                <img src={'/data/traje' + context.config.suit + '_parte1_color' + context.config.colorOne + '.png'}/>
                            </div>
                            <div className="create__color2">
                                <img src={'/data/traje' + context.config.suit + '_parte2_color' + context.config.colorTwo + '.png'}/>
                            </div>
                            <div className="character__accessory2">
                                {context.config.accessory2 && <img src = '/data/accessory2.png'/>}
                            </div>
                            <div className="character__accessory3">
                                {context.config.accessory3 && <img src = '/data/accessory3.png'/>}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="create__options">
                    <Route path="/create/stepone" component={Stepone}/>
                    <Route path="/create/steptwo" component={Steptwo}/>
                    <Route path="/create/stepthree" component={Stepthree}/>
                    <Route path="/create/stepfour" component={Stepfour}/>
                </div>
                
                <div className="create__menu">

                    <Link to="/create/stepone"><img src="/data/createbtn.png"/></Link>
                    <Link to="/create/steptwo"><img src="/data/createbtn.png"/></Link>
                    <Link to="/create/stepthree"><img src="/data/createbtn.png"/></Link>
                    <Link to="/create/stepfour"><img src="/data/createbtn.png"/></Link>
                    
                </div>
            </div>
        </div>
    );
}
    
Create.propTypes = {
    
}
      
export default Create;