import React from 'react';
import './Stepfour.css';
import { SpidermanContext } from '../utils/SpidermanContext';
import { useHistory} from 'react-router-dom';
import { v4 } from 'uuid';
import { saveAs } from 'file-saver';
/* in ES 6 */
import domtoimage from 'dom-to-image';


const Stepfour = (props) => {
    var FileSaver = require('file-saver');

    const context = React.useContext(SpidermanContext);
    const history = useHistory();
    var node = document.querySelector('prueba');

    //var domtoimage = require('dom-to-image');

    // var bgs = [1,2,3];


    const handleFinish = () => {
        const newSpidey = {
            id : context.config.id,
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
            newSpidey.id = v4();
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
        history.push('/galeria');
    };

    const handleDownload = () => {
        // domtoimage.toPng(node)
        // .then(function (dataUrl) {
        //     var img = new Image();
        //     img.src = dataUrl;
        //     document.body.appendChild(img);
        // })
        // .catch(function (error) {
        //     console.error('oops, something went wrong!', error);
        // });

        domtoimage.toBlob(document.getElementById('download'))
        .then(function (blob) {
            window.saveAs(blob, context.config.name + '.png');
        });
    };

    return(
        <div className="pruebaxde">
            
            <button onClick = {handleFinish}>
                GUARDAR PERSONAJE
            </button>

            <button onClick = {handleDownload}>
                DESCARGAR
            </button>

        </div>
    );

}
    
Stepfour.propTypes = {
    
}
      
export default Stepfour;