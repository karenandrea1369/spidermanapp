(this.webpackJsonpspidermanapp=this.webpackJsonpspidermanapp||[]).push([[0],{40:function(e,a,t){e.exports=t(65)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),o=t(5),r=t.n(o),s=(t(45),t(24)),l=(t(46),t(6)),i=t(10),m=(t(47),t(48),function(e){return n.a.createElement("button",{className:"btn"},e.texto)});var u=function(){return n.a.createElement("div",{className:"inicio"},n.a.createElement("img",{className:"inicio__img",src:"./data/inicio.png",alt:" "}),n.a.createElement(l.b,{to:"/create"},n.a.createElement(m,{texto:"CREA UNO"})),n.a.createElement(l.b,{to:"/gallery"},n.a.createElement(m,{texto:"GALER\xcdA"})))},g=(t(54),c.createContext({config:{id:"",name:"",actor:"/data/tobey.png",mask:!1,accessory1:!1,accessory2:!1,accessory3:!1,suit:1,colorOne:"",colorTwo:"",fondo:1},setConfig:function(){return null},list:[],setList:function(){return null}})),f=(t(55),function(e){return n.a.createElement("a",{href:e.dir},n.a.createElement("button",{className:"back"},n.a.createElement("img",{className:"back__img",src:"/data/back.png"})))}),E=(t(56),function(e){return n.a.createElement("div",{className:"spiderman__container"},n.a.createElement("div",{className:"spiderman__charactername"},n.a.createElement("p",null,e.name)),n.a.createElement("div",{className:"spiderman__background"},n.a.createElement("img",{className:"spiderman__backgroundimg",src:".../public/data/fondo"+e.fondo+".png"}),n.a.createElement("div",{className:"spiderman__body"},n.a.createElement("div",{className:"character__accessory1"},e.accessory1&&n.a.createElement("img",{src:".../public/data/accessory1.png"})),n.a.createElement("div",{className:"spiderman__head"},e.mask&&n.a.createElement("img",{src:".../public/data/mascara"+e.suit+"_color"+e.colorOne+".png"}),!e.mask&&n.a.createElement("img",{src:".../public/data/"+e.actor+".png"})),n.a.createElement("div",{className:"spiderman__color1"},n.a.createElement("img",{src:".../public/data/traje"+e.suit+"_parte1_color"+e.colorOne+".png"})),n.a.createElement("div",{className:"spiderman__color2"},n.a.createElement("img",{src:".../public/data/traje"+e.suit+"_parte2_color"+e.colorTwo+".png"})),n.a.createElement("div",{className:"character__accessory2"},e.accessory2&&n.a.createElement("img",{src:".../public/data/accessory2.png"})),n.a.createElement("div",{className:"character__accessory3"},e.accessory3&&n.a.createElement("img",{src:".../public/data/accessory3.png"})))))}),d=function(e){var a=n.a.useContext(g);return n.a.createElement("div",null,n.a.createElement("div",{className:"gallery__header"},n.a.createElement("div",{className:"gallery__back"},n.a.createElement(l.b,{to:"/"},n.a.createElement(f,null))),n.a.createElement("div",{className:"gallery__tittle"},n.a.createElement("img",{src:"/data/galeria.png"}))),n.a.createElement("div",{className:"gallery"},0===a.list.length&&n.a.createElement("div",{className:"gallery__empty"},n.a.createElement("img",{className:"gallery__emptyimg",src:"/data/empty.png"}),n.a.createElement("div",{className:"gallery__emptybtn"},n.a.createElement(l.b,{to:"/crearpasouno"},n.a.createElement(m,{texto:"CREA UNO"})))),a.list.length>0&&n.a.createElement("div",{className:"module__container"},a.list.map((function(e){return n.a.createElement("div",{className:"module"},n.a.createElement(E,{id:e.id,name:e.id,actor:e.actor,mask:e.mask,accessory1:e.accessory1,accessory2:e.accessory2,accessory3:e.accessory3,suit:e.suit,colorOne:e.colorOne,colorTwo:e.colorTwo,fondo:e.fondo}))})))))},p=(t(57),t(4)),b=(t(58),t(92)),_=function(e){var a=n.a.useContext(g);return n.a.createElement("div",null,n.a.createElement("p",null,"NOMBRE DE TU PERSONAJE"),n.a.createElement(b.a,{label:"Nombre",value:a.config.name,onChange:function(e){a.setConfig(Object(p.a)({},a.config,{name:e.target.value}))}}),n.a.createElement("p",null,"M\xc1SCARA"),n.a.createElement("input",{type:"checkbox",onChange:function(e){a.config.mask?a.setConfig(Object(p.a)({},a.config,{mask:!1})):a.setConfig(Object(p.a)({},a.config,{mask:!0}))},checked:a.config.mask}))},y=(t(62),function(e){var a=n.a.useContext(g),t=function(e){a.config.actor===e?a.config.mask?a.setConfig(Object(p.a)({},a.config,{mask:!1})):a.setConfig(Object(p.a)({},a.config,{mask:!0})):a.config.actor!==e&&a.setConfig(Object(p.a)({},a.config,{actor:e,mask:!1}))},c=function(e){a.setConfig(Object(p.a)({},a.config,{accessory1:!a.config.accessory1}))},o=function(e){a.setConfig(Object(p.a)({},a.config,{accessory2:!a.config.accessory2}))},r=function(e){a.setConfig(Object(p.a)({},a.config,{accessory3:!a.config.accessory3}))};return n.a.createElement("div",null,n.a.createElement("p",null,"ESCOGE TU ACTOR FAVORITO"),n.a.createElement("div",{className:"steptwo__actors"},["tobey","andrew","tom"].map((function(e){return n.a.createElement("div",{className:"steptwo__actorbtn"},!a.config.mask&&a.config.actor===e&&n.a.createElement("button",{className:"steptwo__facebtn steptwo__facebtn--selected",onClick:function(){return t(e)}},n.a.createElement("img",{src:"/data/"+e+"btn.png"})),(a.config.mask||a.config.actor!==e)&&n.a.createElement("button",{className:"steptwo__facebtn",onClick:function(){return t(e)}},n.a.createElement("img",{src:"/data/"+e+"btn.png"})))}))),n.a.createElement("p",null,"ACCESORIOS"),a.config.accessory1&&n.a.createElement("button",{className:"stepone__facebtn button__selected",onClick:c},n.a.createElement("img",{src:"/data/btnAccessory1.png"})),!a.config.accessory1&&n.a.createElement("button",{className:"stepone__facebtn ",onClick:c},n.a.createElement("img",{src:"/data/btnAccessory1.png"})),a.config.accessory2&&n.a.createElement("button",{className:"stepone__facebtn button__selected",onClick:o},n.a.createElement("img",{src:"/data/btnAccessory2.png"})),!a.config.accessory2&&n.a.createElement("button",{className:"stepone__facebtn ",onClick:o},n.a.createElement("img",{src:"/data/btnAccessory2.png"})),a.config.accessory3&&n.a.createElement("button",{className:"stepone__facebtn button__selected",onClick:r},n.a.createElement("img",{src:"/data/btnAccessory3.png"})),!a.config.accessory3&&n.a.createElement("button",{className:"stepone__facebtn ",onClick:r},n.a.createElement("img",{src:"/data/btnAccessory3.png"})))}),v=(t(63),function(e){var a=["rojo","azul","negro"],t=n.a.useContext(g),c=function(e){t.setConfig(Object(p.a)({},t.config,{suit:e}))},o=function(e){t.setConfig(Object(p.a)({},t.config,{colorOne:e}))},r=function(e){t.setConfig(Object(p.a)({},t.config,{colorTwo:e}))};return n.a.createElement("div",null,n.a.createElement("p",null,"TRAJE"),n.a.createElement("div",{className:"stepthree__suits"},[1,2,3,4].map((function(e){return n.a.createElement("div",{className:"stepthree__suitbtn"},t.config.suit===e&&n.a.createElement("button",{className:"stepthree__suitbtn--selected",onClick:function(){return c(e)}},n.a.createElement("img",{src:"/data/suit"+e+".png"})),t.config.suit!==e&&n.a.createElement("button",{onClick:function(){return c(e)}},n.a.createElement("img",{src:"/data/suit"+e+".png"})))}))),n.a.createElement("div",{className:"stepthree__colors"},n.a.createElement("div",null,n.a.createElement("p",null,"COLOR PRIMARIO"),n.a.createElement("div",{className:"stepthree__colorbuttons"},a.map((function(e){return n.a.createElement("div",{className:"stepthree__colorbtn"},t.config.colorOne===e&&n.a.createElement("button",{className:"stepthree__colorbtn--selected",onClick:function(){return o(e)}},n.a.createElement("img",{src:"/data/"+e+"btn.png"})),t.config.colorOne!==e&&n.a.createElement("button",{onClick:function(){return o(e)}},n.a.createElement("img",{src:"/data/"+e+"btn.png"})))})))),n.a.createElement("div",null,n.a.createElement("p",null,"COLOR SECUNDARIO"),n.a.createElement("div",{className:"stepthree__colorbuttons"},a.map((function(e){return n.a.createElement("div",{className:"stepthree__colorbtn"},t.config.colorTwo===e&&n.a.createElement("button",{className:"stepthree__colorbtn--selected",onClick:function(){return r(e)}},n.a.createElement("img",{src:"/data/"+e+"btn.png"})),t.config.colorTwo!==e&&n.a.createElement("button",{onClick:function(){return r(e)}},n.a.createElement("img",{src:"/data/"+e+"btn.png"})))}))))))}),N=t(35),C=(t(64),t(93)),k=function(e){var a=n.a.useContext(g),t=Object(i.e)(),c=function(e){a.setConfig(Object(p.a)({},a.config,{fondo:e}))};return n.a.createElement("div",null,n.a.createElement("p",null,"FONDO"),n.a.createElement("div",{className:"stepfour__bgs"},[1,2,3].map((function(e){return n.a.createElement("div",{className:"stepfour__bgbtn"},a.config.fondo===e&&n.a.createElement("button",{className:"stepfour__bgbtn--selected",onClick:function(){return c(e)}},n.a.createElement("img",{src:"/data/fondo"+e+".png"})),a.config.fondo!==e&&n.a.createElement("button",{onClick:function(){return c(e)}},n.a.createElement("img",{src:"/data/fondo"+e+".png"})))}))),n.a.createElement("button",{onClick:function(){a.setList([].concat(Object(N.a)(a.list),[{id:a.config.id,name:a.config.name,actor:a.config.actor,mask:a.config.mask,accessory1:a.config.accessory1,accessory2:a.config.accessory2,accessory3:a.config.accessory3,suit:a.config.suit,colorOne:a.config.colorOne,colorTwo:a.config.colorTwo,fondo:a.config.fondo}])),a.setConfig({id:Object(C.a)(),name:"Mi primer Spiderman",actor:"tobey",mask:!0,accessory1:!1,accessory2:!1,accessory3:!1,suit:1,colorOne:"rojo",colorTwo:"azul",fondo:1}),t.push("/gallery")}},"FINALIZAR"))},O=function(e){var a=n.a.useContext(g);return n.a.createElement("div",null,n.a.createElement("div",{className:"create__header"},n.a.createElement("div",{className:"create__back"},n.a.createElement(l.b,{to:"/"},n.a.createElement(f,null))),n.a.createElement("div",{className:"create__tittle"},n.a.createElement("img",{src:"/data/crea.png"}))),n.a.createElement("div",{className:"create"},n.a.createElement("div",{className:"create__character"},n.a.createElement(E,{id:a.config.id,name:a.config.name,actor:a.config.actor,mask:a.config.mask,accessory1:a.config.accessory1,accessory2:a.config.accessory2,accessory3:a.config.accessory3,suit:a.config.suit,colorOne:a.config.colorOne,colorTwo:a.config.colorTwo,fondo:a.config.fondo})),n.a.createElement("div",{className:"create__options"},n.a.createElement(i.a,{path:"/crear/pasouno",component:_}),n.a.createElement(i.a,{path:"/crear/pasodos",component:y}),n.a.createElement(i.a,{path:"/crear/pasotres",component:v}),n.a.createElement(i.a,{path:"/crear/pasocuatro",component:k})),n.a.createElement("div",{className:"create__menu"},n.a.createElement(l.b,{to:"/crear/pasouno"},n.a.createElement("img",{src:"/data/createbtn.png"})),n.a.createElement(l.b,{to:"/crear/pasodos"},n.a.createElement("img",{src:"/data/createbtn.png"})),n.a.createElement(l.b,{to:"/crear/pasotres"},n.a.createElement("img",{src:"/data/createbtn.png"})),n.a.createElement(l.b,{to:"/crear/pasocuatro"},n.a.createElement("img",{src:"/data/createbtn.png"})))))};var h=function(){var e=n.a.useState({id:Object(C.a)(),name:"Mi primer Spiderman",actor:"tobey",mask:!0,accessory1:!1,accessory2:!1,accessory3:!1,suit:1,colorOne:"rojo",colorTwo:"azul",fondo:1}),a=Object(s.a)(e,2),t=a[0],c=a[1],o=n.a.useState([]),r=Object(s.a)(o,2),m={config:t,setConfig:c,list:r[0],setList:r[1]};return n.a.createElement("div",null,n.a.createElement(g.Provider,{value:m},n.a.createElement(l.a,null,n.a.createElement(i.a,{path:"/",exact:!0,component:u}),n.a.createElement(i.a,{path:"/galeria",component:d}),n.a.createElement(i.a,{path:"/crear/pasouno",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.1d9a022b.chunk.js.map