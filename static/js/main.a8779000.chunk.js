(this.webpackJsonpspidermanapp=this.webpackJsonpspidermanapp||[]).push([[0],{44:function(e,t,a){e.exports=a(68)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(4),r=a.n(o),s=(a(49),a(26)),l=(a(50),a(5)),i=a(10),m=(a(51),a(52),function(e){return c.a.createElement("button",{className:"btn"},e.texto)});var u=function(){return c.a.createElement("div",{className:"inicio"},c.a.createElement("img",{className:"inicio__img",src:"./data/inicio.png",alt:" "}),c.a.createElement(l.b,{to:"/crear/pasouno"},c.a.createElement(m,{texto:"CREA UNO"})),c.a.createElement(l.b,{to:"/galeria"},c.a.createElement(m,{texto:"GALER\xcdA"})))},f=a(13),d=(a(57),n.createContext({config:{id:"",name:"",actor:"/data/tobey.png",mask:!1,accessory1:!1,accessory2:!1,accessory3:!1,suit:1,colorOne:"",colorTwo:"",fondo:1},setConfig:function(){return null},list:[],setList:function(){return null}})),g=(a(58),function(e){return c.a.createElement("a",{href:e.dir},c.a.createElement("button",{className:"back"},c.a.createElement("img",{className:"back__img",src:"/data/back.png"})))}),E=(a(59),function(e){return c.a.createElement("div",{className:"spiderman__container"},c.a.createElement("div",{className:"spiderman__charactername"},c.a.createElement("p",null,e.name)),c.a.createElement("div",{className:"spiderman__background",id:"download"},c.a.createElement("img",{className:"spiderman__backgroundimg",src:"./data/fondo"+e.fondo+".png"}),c.a.createElement("div",{className:"spiderman__body"},c.a.createElement("div",{className:"character__accessory1"},e.accessory1&&c.a.createElement("img",{src:"./data/accessory1.png"})),c.a.createElement("div",{className:"spiderman__head"},e.mask&&c.a.createElement("img",{src:"./data/mascara"+e.suit+"_color"+e.colorOne+".png"}),!e.mask&&c.a.createElement("img",{src:"./data/"+e.actor+".png"})),c.a.createElement("div",{className:"spiderman__color1"},c.a.createElement("img",{src:"./data/traje"+e.suit+"_parte1_color"+e.colorOne+".png"})),c.a.createElement("div",{className:"spiderman__color2"},c.a.createElement("img",{src:"./data/traje"+e.suit+"_parte2_color"+e.colorTwo+".png"})),c.a.createElement("div",{className:"character__accessory2"},e.accessory2&&c.a.createElement("img",{src:"./data/accessory2.png"})),c.a.createElement("div",{className:"character__accessory3"},e.accessory3&&c.a.createElement("img",{src:"./data/accessory3.png"})))))}),p=function(e){var t=c.a.useContext(d),a=Object(i.e)();return c.a.createElement("div",null,c.a.createElement("div",{className:"gallery__header"},c.a.createElement("div",{className:"gallery__back"},c.a.createElement(l.b,{to:"/"},c.a.createElement(g,null))),c.a.createElement("div",{className:"gallery__tittle"},c.a.createElement("img",{src:"/data/galeria.png"}))),c.a.createElement("div",{className:"gallery"},0===t.list.length&&c.a.createElement("div",{className:"gallery__empty"},c.a.createElement("img",{className:"gallery__emptyimg",src:"./data/empty.png"}),c.a.createElement("div",{className:"gallery__emptybtn"},c.a.createElement(l.b,{to:"/crear/pasouno"},c.a.createElement(m,{texto:"CREA UNO"})))),t.list.length>0&&c.a.createElement("div",{className:"module__container"},t.list.map((function(e){return c.a.createElement("div",{className:"module"},c.a.createElement(E,{id:e.id,name:e.name,actor:e.actor,mask:e.mask,accessory1:e.accessory1,accessory2:e.accessory2,accessory3:e.accessory3,suit:e.suit,colorOne:e.colorOne,colorTwo:e.colorTwo,fondo:e.fondo}),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return function(e){var n=t.list.findIndex((function(t){return t.id===e})),c=t.list[n];t.setConfig({id:c.id,name:c.name,actor:c.actor,mask:c.mask,accessory1:c.accessory1,accessory2:c.accessory2,accessory3:c.accessory3,suit:c.suit,colorOne:c.colorOne,colorTwo:c.colorTwo,fondo:c.fondo}),a.push("/crear/pasouno")}(e.id)}},"Editar"),c.a.createElement("button",{onClick:function(){return function(e){var a=t.list.findIndex((function(t){return t.id===e}));console.log(),t.setList([].concat(Object(f.a)(t.list.slice(0,a)),Object(f.a)(t.list.slice(a+1))))}(e.id)}},"Eliminar")))})))))},b=(a(60),a(6)),_=(a(61),a(95)),v=function(e){var t=c.a.useContext(d),a=function(e){t.config.actor===e?t.config.mask?t.setConfig(Object(b.a)({},t.config,{mask:!1})):t.setConfig(Object(b.a)({},t.config,{mask:!0})):t.config.actor!==e&&t.setConfig(Object(b.a)({},t.config,{actor:e,mask:!1}))};return c.a.createElement("div",null,c.a.createElement("p",null,"NOMBRE DE TU PERSONAJE"),c.a.createElement(_.a,{label:"Nombre",value:t.config.name,onChange:function(e){t.setConfig(Object(b.a)({},t.config,{name:e.target.value}))}}),c.a.createElement("p",null,"M\xc1SCARA"),c.a.createElement("input",{type:"checkbox",onChange:function(e){t.config.mask?t.setConfig(Object(b.a)({},t.config,{mask:!1})):t.setConfig(Object(b.a)({},t.config,{mask:!0}))},checked:t.config.mask}),c.a.createElement("p",null,"ESCOGE TU ACTOR FAVORITO"),c.a.createElement("div",{className:"stepone__actors"},["tobey","andrew","tom"].map((function(e){return c.a.createElement("div",{className:"stepone__actorbtn"},!t.config.mask&&t.config.actor===e&&c.a.createElement("button",{className:"stepone__facebtn stepone__facebtn--selected",onClick:function(){return a(e)}},c.a.createElement("img",{src:"./data/"+e+"btn.png"})),(t.config.mask||t.config.actor!==e)&&c.a.createElement("button",{className:"stepone__facebtn",onClick:function(){return a(e)}},c.a.createElement("img",{src:"./data/"+e+"btn.png"})))}))))},y=a(19),N=(a(65),function(e){var t=["rojo","azul","negro"],a=c.a.useContext(d),n=function(e){a.setConfig(Object(b.a)({},a.config,{suit:e}))},o=function(e){a.setConfig(Object(b.a)({},a.config,{colorOne:e}))},r=function(e){a.setConfig(Object(b.a)({},a.config,{colorTwo:e}))},s=function(e){var t="accessory"+e;a.setConfig(Object(b.a)({},a.config,Object(y.a)({},t,!a.config[t])))};return c.a.createElement("div",null,c.a.createElement("p",null,"TRAJE"),c.a.createElement("div",{className:"stepthree__suits"},[1,2,3,4].map((function(e){return c.a.createElement("div",{className:"stepthree__suitbtn"},a.config.suit===e&&c.a.createElement("button",{className:"stepthree__suitbtn--selected",onClick:function(){return n(e)}},c.a.createElement("img",{src:"./data/suit"+e+".png"})),a.config.suit!==e&&c.a.createElement("button",{onClick:function(){return n(e)}},c.a.createElement("img",{src:"./data/suit"+e+".png"})))}))),c.a.createElement("div",{className:"stepthree__colors"},c.a.createElement("div",null,c.a.createElement("p",null,"COLOR PRIMARIO"),c.a.createElement("div",{className:"stepthree__colorbuttons"},t.map((function(e){return c.a.createElement("div",{className:"stepthree__colorbtn"},a.config.colorOne===e&&c.a.createElement("button",{className:"stepthree__colorbtn--selected",onClick:function(){return o(e)}},c.a.createElement("img",{src:"./data/"+e+"btn.png"})),a.config.colorOne!==e&&c.a.createElement("button",{onClick:function(){return o(e)}},c.a.createElement("img",{src:"./data/"+e+"btn.png"})))})))),c.a.createElement("div",null,c.a.createElement("p",null,"COLOR SECUNDARIO"),c.a.createElement("div",{className:"stepthree__colorbuttons"},t.map((function(e){return c.a.createElement("div",{className:"stepthree__colorbtn"},a.config.colorTwo===e&&c.a.createElement("button",{className:"stepthree__colorbtn--selected",onClick:function(){return r(e)}},c.a.createElement("img",{src:"./data/"+e+"btn.png"})),a.config.colorTwo!==e&&c.a.createElement("button",{onClick:function(){return r(e)}},c.a.createElement("img",{src:"./data/"+e+"btn.png"})))}))))),c.a.createElement("p",null,"ACCESORIOS"),c.a.createElement("div",{className:"steptwo__accessories"},[1,2,3].map((function(e){return c.a.createElement("div",{className:"steptwo__accessorybtn"},a.config["accessory"+e]&&c.a.createElement("button",{className:"stepone__facebtn button__selected",onClick:function(){return s(e)}},c.a.createElement("img",{src:"./data/btnAccessory"+e+".png"})),!a.config["accessory"+e]&&c.a.createElement("button",{className:"stepone__facebtn ",onClick:function(){return s(e)}},c.a.createElement("img",{src:"./data/btnAccessory"+e+".png"})))}))))}),O=(a(66),function(e){var t=c.a.useContext(d),a=Object(i.e)(),n=function(e){t.setConfig(Object(b.a)({},t.config,{fondo:e}))};return c.a.createElement("div",null,c.a.createElement("p",null,"FONDO"),c.a.createElement("div",{className:"stepfour__bgs"},[1,2,3].map((function(e){return c.a.createElement("div",{className:"stepfour__bgbtn"},t.config.fondo===e&&c.a.createElement("button",{className:"stepfour__bgbtn--selected",onClick:function(){return n(e)}},c.a.createElement("img",{src:"./data/fondo"+e+".png"})),t.config.fondo!==e&&c.a.createElement("button",{onClick:function(){return n(e)}},c.a.createElement("img",{src:"./data/fondo"+e+".png"})))}))),c.a.createElement("button",{onClick:function(){a.push("/crear/pasocuatro")}},"TERMINAR"))}),k=(a(67),a(96)),C=(a(33),a(40)),h=a.n(C),w=function(e){a(33);var t=c.a.useContext(d),n=Object(i.e)();document.querySelector("prueba");return c.a.createElement("div",{className:"pruebaxde"},c.a.createElement("button",{onClick:function(){var e={id:t.config.id,name:t.config.name,actor:t.config.actor,mask:t.config.mask,accessory1:t.config.accessory1,accessory2:t.config.accessory2,accessory3:t.config.accessory3,suit:t.config.suit,colorOne:t.config.colorOne,colorTwo:t.config.colorTwo,fondo:t.config.fondo};t.setConfig({id:"",name:"Mi primer Spiderman",actor:"tobey",mask:!0,accessory1:!1,accessory2:!1,accessory3:!1,suit:1,colorOne:"rojo",colorTwo:"azul",fondo:1});var a=t.list.findIndex((function(t){return t.id===e.id}));-1===a?(e.id=Object(k.a)(),t.setList([].concat(Object(f.a)(t.list),[e]))):t.setList([].concat(Object(f.a)(t.list.slice(0,a)),[e],Object(f.a)(t.list.slice(a+1)))),n.push("/galeria")}},"GUARDAR PERSONAJE"),c.a.createElement("button",{onClick:function(){h.a.toBlob(document.getElementById("download")).then((function(e){window.saveAs(e,t.config.name+".png")}))}},"DESCARGAR"))},j=function(e){var t=c.a.useContext(d);return console.log(e.match),c.a.createElement("div",null,c.a.createElement("div",{className:"create__header"},c.a.createElement("div",{className:"create__back"},c.a.createElement(l.b,{to:"/"},c.a.createElement(g,null))),c.a.createElement("div",{className:"create__tittle"},c.a.createElement("img",{src:"./data/crea.png"}))),c.a.createElement("div",{className:"create"},c.a.createElement("div",{className:"create__character"},c.a.createElement(E,{id:t.config.id,name:t.config.name,actor:t.config.actor,mask:t.config.mask,accessory1:t.config.accessory1,accessory2:t.config.accessory2,accessory3:t.config.accessory3,suit:t.config.suit,colorOne:t.config.colorOne,colorTwo:t.config.colorTwo,fondo:t.config.fondo})),c.a.createElement("div",{className:"create__options"},c.a.createElement(i.a,{path:["/crear","/crear/pasouno"],exact:!0,component:v}),c.a.createElement(i.a,{path:"/crear/pasodos",component:N}),c.a.createElement(i.a,{path:"/crear/pasotres",component:O}),c.a.createElement(i.a,{path:"/crear/pasocuatro",component:w})),c.a.createElement("div",{className:"create__menu"},c.a.createElement(l.b,{to:"/crear/pasouno"},c.a.createElement("img",{src:"./data/createbtn.png"})),c.a.createElement(l.b,{to:"/crear/pasodos"},c.a.createElement("img",{src:"./data/createbtn.png"})),c.a.createElement(l.b,{to:"/crear/pasotres"},c.a.createElement("img",{src:"./data/createbtn.png"})))))};var A=function(){var e=c.a.useState({id:"",name:"Mi primer Spiderman",actor:"tobey",mask:!0,accessory1:!1,accessory2:!1,accessory3:!1,suit:1,colorOne:"rojo",colorTwo:"azul",fondo:1}),t=Object(s.a)(e,2),a=t[0],n=t[1],o=c.a.useState([]),r=Object(s.a)(o,2),m=r[0],f=r[1],g={config:a,setConfig:n,list:m,setList:f};return c.a.useEffect((function(){var e=localStorage.getItem("list");null!=e&&f(JSON.parse(e))}),[]),c.a.useEffect((function(){localStorage.setItem("list",JSON.stringify(m))}),[m]),c.a.createElement("div",null,c.a.createElement(d.Provider,{value:g},c.a.createElement(l.a,null,c.a.createElement(i.a,{path:"/",exact:!0,component:u}),c.a.createElement(i.a,{path:"/galeria",component:p}),c.a.createElement(i.a,{path:"/crear/:step?",component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.a8779000.chunk.js.map