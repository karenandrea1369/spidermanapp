(this.webpackJsonpspidermanapp=this.webpackJsonpspidermanapp||[]).push([[0],{40:function(e,t,a){e.exports=a(65)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(5),r=a.n(o),s=(a(45),a(24)),l=(a(46),a(6)),i=a(10),m=(a(47),a(48),function(e){return n.a.createElement("button",{className:"btn"},e.texto)});var u=function(){return n.a.createElement("div",{className:"inicio"},n.a.createElement("img",{className:"inicio__img",src:".../public/data/inicio.png",alt:" "}),n.a.createElement(l.b,{to:"/create"},n.a.createElement(m,{texto:"CREA UNO"})),n.a.createElement(l.b,{to:"/gallery"},n.a.createElement(m,{texto:"GALER\xcdA"})))},g=(a(54),c.createContext({config:{id:"",name:"",actor:"/data/tobey.png",mask:!1,accessory1:!1,accessory2:!1,accessory3:!1,suit:1,colorOne:"",colorTwo:"",fondo:1},setConfig:function(){return null},list:[],setList:function(){return null}})),f=(a(55),function(e){return n.a.createElement("a",{href:e.dir},n.a.createElement("button",{className:"back"},n.a.createElement("img",{className:"back__img",src:"/data/back.png"})))}),E=(a(56),function(e){return n.a.createElement("div",{className:"spiderman__container"},n.a.createElement("div",{className:"spiderman__charactername"},n.a.createElement("p",null,e.name)),n.a.createElement("div",{className:"spiderman__background"},n.a.createElement("img",{className:"spiderman__backgroundimg",src:".../public/data/fondo"+e.fondo+".png"}),n.a.createElement("div",{className:"spiderman__body"},n.a.createElement("div",{className:"character__accessory1"},e.accessory1&&n.a.createElement("img",{src:".../public/data/accessory1.png"})),n.a.createElement("div",{className:"spiderman__head"},e.mask&&n.a.createElement("img",{src:".../public/data/mascara"+e.suit+"_color"+e.colorOne+".png"}),!e.mask&&n.a.createElement("img",{src:".../public/data/"+e.actor+".png"})),n.a.createElement("div",{className:"spiderman__color1"},n.a.createElement("img",{src:".../public/data/traje"+e.suit+"_parte1_color"+e.colorOne+".png"})),n.a.createElement("div",{className:"spiderman__color2"},n.a.createElement("img",{src:".../public/data/traje"+e.suit+"_parte2_color"+e.colorTwo+".png"})),n.a.createElement("div",{className:"character__accessory2"},e.accessory2&&n.a.createElement("img",{src:".../public/data/accessory2.png"})),n.a.createElement("div",{className:"character__accessory3"},e.accessory3&&n.a.createElement("img",{src:".../public/data/accessory3.png"})))))}),d=function(e){var t=n.a.useContext(g);return n.a.createElement("div",null,n.a.createElement("div",{className:"gallery__header"},n.a.createElement("div",{className:"gallery__back"},n.a.createElement(l.b,{to:"/"},n.a.createElement(f,null))),n.a.createElement("div",{className:"gallery__tittle"},n.a.createElement("img",{src:"/data/galeria.png"}))),n.a.createElement("div",{className:"gallery"},0===t.list.length&&n.a.createElement("div",{className:"gallery__empty"},n.a.createElement("img",{className:"gallery__emptyimg",src:"/data/empty.png"}),n.a.createElement("div",{className:"gallery__emptybtn"},n.a.createElement(m,{texto:"CREA UNO"}))),t.list.length>0&&n.a.createElement("div",{className:"module__container"},t.list.map((function(e){return n.a.createElement("div",{className:"module"},n.a.createElement(E,{id:e.id,name:e.id,actor:e.actor,mask:e.mask,accessory1:e.accessory1,accessory2:e.accessory2,accessory3:e.accessory3,suit:e.suit,colorOne:e.colorOne,colorTwo:e.colorTwo,fondo:e.fondo}))})))))},p=(a(57),a(4)),b=(a(58),a(92)),_=function(e){var t=n.a.useContext(g);return n.a.createElement("div",null,n.a.createElement("p",null,"NOMBRE DE TU PERSONAJE"),n.a.createElement(b.a,{label:"Nombre",value:t.config.name,onChange:function(e){t.setConfig(Object(p.a)({},t.config,{name:e.target.value}))}}),n.a.createElement("p",null,"M\xc1SCARA"),n.a.createElement("input",{type:"checkbox",onChange:function(e){t.config.mask?t.setConfig(Object(p.a)({},t.config,{mask:!1})):t.setConfig(Object(p.a)({},t.config,{mask:!0}))},checked:t.config.mask}))},y=(a(62),function(e){var t=n.a.useContext(g),a=function(e){t.config.actor===e?t.config.mask?t.setConfig(Object(p.a)({},t.config,{mask:!1})):t.setConfig(Object(p.a)({},t.config,{mask:!0})):t.config.actor!==e&&t.setConfig(Object(p.a)({},t.config,{actor:e,mask:!1}))},c=function(e){t.setConfig(Object(p.a)({},t.config,{accessory1:!t.config.accessory1}))},o=function(e){t.setConfig(Object(p.a)({},t.config,{accessory2:!t.config.accessory2}))},r=function(e){t.setConfig(Object(p.a)({},t.config,{accessory3:!t.config.accessory3}))};return n.a.createElement("div",null,n.a.createElement("p",null,"ESCOGE TU ACTOR FAVORITO"),n.a.createElement("div",{className:"steptwo__actors"},["tobey","andrew","tom"].map((function(e){return n.a.createElement("div",{className:"steptwo__actorbtn"},!t.config.mask&&t.config.actor===e&&n.a.createElement("button",{className:"steptwo__facebtn steptwo__facebtn--selected",onClick:function(){return a(e)}},n.a.createElement("img",{src:"/data/"+e+"btn.png"})),(t.config.mask||t.config.actor!==e)&&n.a.createElement("button",{className:"steptwo__facebtn",onClick:function(){return a(e)}},n.a.createElement("img",{src:"/data/"+e+"btn.png"})))}))),n.a.createElement("p",null,"ACCESORIOS"),t.config.accessory1&&n.a.createElement("button",{className:"stepone__facebtn button__selected",onClick:c},n.a.createElement("img",{src:"/data/btnAccessory1.png"})),!t.config.accessory1&&n.a.createElement("button",{className:"stepone__facebtn ",onClick:c},n.a.createElement("img",{src:"/data/btnAccessory1.png"})),t.config.accessory2&&n.a.createElement("button",{className:"stepone__facebtn button__selected",onClick:o},n.a.createElement("img",{src:"/data/btnAccessory2.png"})),!t.config.accessory2&&n.a.createElement("button",{className:"stepone__facebtn ",onClick:o},n.a.createElement("img",{src:"/data/btnAccessory2.png"})),t.config.accessory3&&n.a.createElement("button",{className:"stepone__facebtn button__selected",onClick:r},n.a.createElement("img",{src:"/data/btnAccessory3.png"})),!t.config.accessory3&&n.a.createElement("button",{className:"stepone__facebtn ",onClick:r},n.a.createElement("img",{src:"/data/btnAccessory3.png"})))}),v=(a(63),function(e){var t=["rojo","azul","negro"],a=n.a.useContext(g),c=function(e){a.setConfig(Object(p.a)({},a.config,{suit:e}))},o=function(e){a.setConfig(Object(p.a)({},a.config,{colorOne:e}))},r=function(e){a.setConfig(Object(p.a)({},a.config,{colorTwo:e}))};return n.a.createElement("div",null,n.a.createElement("p",null,"TRAJE"),n.a.createElement("div",{className:"stepthree__suits"},[1,2,3,4].map((function(e){return n.a.createElement("div",{className:"stepthree__suitbtn"},a.config.suit===e&&n.a.createElement("button",{className:"stepthree__suitbtn--selected",onClick:function(){return c(e)}},n.a.createElement("img",{src:"/data/suit"+e+".png"})),a.config.suit!==e&&n.a.createElement("button",{onClick:function(){return c(e)}},n.a.createElement("img",{src:"/data/suit"+e+".png"})))}))),n.a.createElement("div",{className:"stepthree__colors"},n.a.createElement("div",null,n.a.createElement("p",null,"COLOR PRIMARIO"),n.a.createElement("div",{className:"stepthree__colorbuttons"},t.map((function(e){return n.a.createElement("div",{className:"stepthree__colorbtn"},a.config.colorOne===e&&n.a.createElement("button",{className:"stepthree__colorbtn--selected",onClick:function(){return o(e)}},n.a.createElement("img",{src:"/data/"+e+"btn.png"})),a.config.colorOne!==e&&n.a.createElement("button",{onClick:function(){return o(e)}},n.a.createElement("img",{src:"/data/"+e+"btn.png"})))})))),n.a.createElement("div",null,n.a.createElement("p",null,"COLOR SECUNDARIO"),n.a.createElement("div",{className:"stepthree__colorbuttons"},t.map((function(e){return n.a.createElement("div",{className:"stepthree__colorbtn"},a.config.colorTwo===e&&n.a.createElement("button",{className:"stepthree__colorbtn--selected",onClick:function(){return r(e)}},n.a.createElement("img",{src:"/data/"+e+"btn.png"})),a.config.colorTwo!==e&&n.a.createElement("button",{onClick:function(){return r(e)}},n.a.createElement("img",{src:"/data/"+e+"btn.png"})))}))))))}),N=a(35),C=(a(64),a(93)),k=function(e){var t=n.a.useContext(g),a=Object(i.e)(),c=function(e){t.setConfig(Object(p.a)({},t.config,{fondo:e}))};return n.a.createElement("div",null,n.a.createElement("p",null,"FONDO"),n.a.createElement("div",{className:"stepfour__bgs"},[1,2,3].map((function(e){return n.a.createElement("div",{className:"stepfour__bgbtn"},t.config.fondo===e&&n.a.createElement("button",{className:"stepfour__bgbtn--selected",onClick:function(){return c(e)}},n.a.createElement("img",{src:"/data/fondo"+e+".png"})),t.config.fondo!==e&&n.a.createElement("button",{onClick:function(){return c(e)}},n.a.createElement("img",{src:"/data/fondo"+e+".png"})))}))),n.a.createElement("button",{onClick:function(){t.setList([].concat(Object(N.a)(t.list),[{id:t.config.id,name:t.config.name,actor:t.config.actor,mask:t.config.mask,accessory1:t.config.accessory1,accessory2:t.config.accessory2,accessory3:t.config.accessory3,suit:t.config.suit,colorOne:t.config.colorOne,colorTwo:t.config.colorTwo,fondo:t.config.fondo}])),t.setConfig({id:Object(C.a)(),name:"Mi primer Spiderman",actor:"tobey",mask:!0,accessory1:!1,accessory2:!1,accessory3:!1,suit:1,colorOne:"rojo",colorTwo:"azul",fondo:1}),a.push("/gallery")}},"FINALIZAR"))},O=function(e){var t=n.a.useContext(g);return n.a.createElement("div",null,n.a.createElement("div",{className:"create__header"},n.a.createElement("div",{className:"create__back"},n.a.createElement(l.b,{to:"/"},n.a.createElement(f,null))),n.a.createElement("div",{className:"create__tittle"},n.a.createElement("img",{src:"/data/crea.png"}))),n.a.createElement("div",{className:"create"},n.a.createElement("div",{className:"create__character"},n.a.createElement(E,{id:t.config.id,name:t.config.name,actor:t.config.actor,mask:t.config.mask,accessory1:t.config.accessory1,accessory2:t.config.accessory2,accessory3:t.config.accessory3,suit:t.config.suit,colorOne:t.config.colorOne,colorTwo:t.config.colorTwo,fondo:t.config.fondo})),n.a.createElement("div",{className:"create__options"},n.a.createElement(i.a,{path:"/create/stepone",component:_}),n.a.createElement(i.a,{path:"/create/steptwo",component:y}),n.a.createElement(i.a,{path:"/create/stepthree",component:v}),n.a.createElement(i.a,{path:"/create/stepfour",component:k})),n.a.createElement("div",{className:"create__menu"},n.a.createElement(l.b,{to:"/create/stepone"},n.a.createElement("img",{src:"/data/createbtn.png"})),n.a.createElement(l.b,{to:"/create/steptwo"},n.a.createElement("img",{src:"/data/createbtn.png"})),n.a.createElement(l.b,{to:"/create/stepthree"},n.a.createElement("img",{src:"/data/createbtn.png"})),n.a.createElement(l.b,{to:"/create/stepfour"},n.a.createElement("img",{src:"/data/createbtn.png"})))))};var h=function(){var e=n.a.useState({id:Object(C.a)(),name:"Mi primer Spiderman",actor:"tobey",mask:!0,accessory1:!1,accessory2:!1,accessory3:!1,suit:1,colorOne:"rojo",colorTwo:"azul",fondo:1}),t=Object(s.a)(e,2),a=t[0],c=t[1],o=n.a.useState([]),r=Object(s.a)(o,2),m={config:a,setConfig:c,list:r[0],setList:r[1]};return n.a.createElement("div",null,n.a.createElement(g.Provider,{value:m},n.a.createElement(l.a,null,n.a.createElement(i.a,{path:"/",exact:!0,component:u}),n.a.createElement(i.a,{path:"/gallery",component:d}),n.a.createElement(i.a,{path:"/create",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.ee0ef771.chunk.js.map