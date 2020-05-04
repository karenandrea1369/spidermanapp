import * as React from 'react';

export const SpidermanContext = React.createContext({
    config : {
        id : '',
        name : '',
        actor : '/data/tobey.png',
        mask : false,
        accessory1 : false,
        accessory2 : false,
        accessory3 : false,
        suit : 1,
        colorOne : '',
        colorTwo : '',
        fondo : 1,
      },
    setConfig : () => null,
})