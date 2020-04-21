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
                    <p>{context.config.name}</p>
                    <div className="character__accesory1">
                        <img />
                    </div>
                    <div className="create__head">
                        <img src={context.config.actor}/>
                    </div>
                    <div className="create__body">
                        <img src="/data/cuerpo.png"/>
                    </div>
                    <div className="character__accesory2">
                        <img />
                    </div>
                    <div className="character__accesory3">
                        <img />
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