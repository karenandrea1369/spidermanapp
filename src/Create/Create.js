import React from 'react';
import './Create.css';
import { Link , Route} from 'react-router-dom';
import Back from '../Back/Back';
import Stepone from '../Stepone/Stepone';
import Steptwo from '../Steptwo/Steptwo';
import Stepthree from '../Stepthree/Stepthree';
import Stepfour from '../Stepfour/Stepfour';
import Spiderman from '../Spiderman/Spiderman'
import { SpidermanContext } from '../utils/SpidermanContext';


const Create = (props) => {

    const context = React.useContext(SpidermanContext);

    console.log(props.match);

    return (
        <div>
            <div className="create__header">
                <div className="create__back">
                    <Link to="/"><Back /></Link>
                </div>
                <div className="create__tittle">
                    <img src="./data/crea.png"/>
                </div>
            </div>

            <div className="create">
                
                <div className="create__character">
                    <Spiderman 
                        id = {context.config.id}
                        name = {context.config.name}
                        actor = {context.config.actor} 
                        mask = {context.config.mask} 
                        accessory1 = {context.config.accessory1} 
                        accessory2 = {context.config.accessory2} 
                        accessory3 = {context.config.accessory3} 
                        suit = {context.config.suit} 
                        colorOne = {context.config.colorOne} 
                        colorTwo = {context.config.colorTwo} 
                        fondo = {context.config.fondo} 
                    />
                </div>

                <div className="create__options">
                    <Route path={["/crear", "/crear/pasouno"]} exact component={Stepone}/>
                    <Route path="/crear/pasodos" component={Steptwo}/>
                    <Route path="/crear/pasotres" component={Stepthree}/>
                    <Route path="/crear/pasocuatro" component={Stepfour}/>
                </div>
                
                <div className="create__menu">

                    <Link to="/crear/pasouno"><img src="./data/createbtn.png"/></Link>
                    <Link to="/crear/pasodos"><img src="./data/createbtn.png"/></Link>
                    <Link to="/crear/pasotres"><img src="./data/createbtn.png"/></Link>
                    <Link to="/crear/pasocuatro"><img src="./data/createbtn.png"/></Link>
                    
                </div>
            </div>
        </div>
    );
}
    
Create.propTypes = {
    
}
      
export default Create;