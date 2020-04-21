import * as React from 'react';

export const SpidermanContext = React.createContext({
    // id : '',
    // name : '',
    // actor : '',
    // setName : () => null,
    // setActor : () => null,
    config : {
        id : '',
        name : '',
        actor : '/data/tobey.png',
        mask : false,
        accessory1 : false,
        accessory2 : false,
        accessory3 : false,
      },
    setConfig : () => null,
})