(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0273":function(t,e,r){var n=r("c1b2"),a=r("4180"),i=r("2c6c");t.exports=n?function(t,e,r){return a.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},"057f":function(t,e,r){var n=r("fc6a"),a=r("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?s(t):a(n(t))}},"06fa":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("17c2"),o=r("9112");for(var s in a){var c=n[s],l=c&&c.prototype;if(l&&l.forEach!==i)try{o(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("b301");t.exports=a("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},1875:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"194a":function(t,e,r){var n=r("cc94");t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,a){return t.call(e,r,n,a)}}return function(){return t.apply(e,arguments)}}},"1dde":function(t,e,r){var n=r("d039"),a=r("b622"),i=a("species");t.exports=function(t){return!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"2fa7":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("85d3"),a=r.n(n);function i(t,e,r){return e in t?a()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},"39cf":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"SectionDetalle"},[r("banner",{attrs:{titulo:"Detalle"}}),r("Proyecto"),r("MasProyecto")],1)},a=[],i=r("8fa6"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"section_gap"},[r("div",{staticClass:"container"},[r("div",{staticClass:"portfolio_details_inner"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"carousel slide left_img",attrs:{id:"arrayFotos","data-ride":"carousel"}},[r("ol",{staticClass:"carousel-indicators"},t._l(t.proyecto.foto,(function(t,e){return r("li",{key:e,class:{active:0===e},attrs:{"data-target":"#arrayFotos","data-slide-to":e}})})),0),r("div",{staticClass:"carousel-inner",attrs:{role:"listbox"}},t._l(t.proyecto.foto,(function(t,e){return r("div",{key:e,staticClass:"carousel-item",class:{active:0===e}},[r("img",{staticClass:"d-block w-100",attrs:{src:"/images/"+t}})])})),0)])]),r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"portfolio_right_text"},[r("h4",[t._v(t._s(t.proyecto.titulo))]),r("p",[t._v(t._s(t.proyecto.descripcion))]),r("ul",{staticClass:"list"},[r("li",[r("span",[t._v("Cliente")]),t._v(": "+t._s(t.proyecto.cliente))]),r("li",[r("span",[t._v("Sitio")]),t._v(": "),r("a",{attrs:{href:t.proyecto.siteWeb,target:"_blank"}},[t._v(" "+t._s(t.proyecto.siteWeb))])]),r("li",[r("span",[t._v("Completado")]),t._v(": "+t._s(t.proyecto.completado))]),r("li",[r("span",[t._v("Herramientas")]),t._v(": "+t._s(t.proyecto.herramientas))])])])])])])])])])},s=[],c=(r("a4d3"),r("4de4"),r("c740"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),l=r("2f62");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={name:"Proyecto",data:function(){return{proyecto:{}}},computed:f({},Object(l["b"])(["proyectos"])),mounted:function(){this.buscarproyect()},methods:{buscarproyect:function(){var t=this,e=this.proyectos.findIndex((function(e){return e.id==t.$route.params.id}));this.proyecto=this.proyectos[e],$(".carousel").carousel({interval:4e3})}}},p=d,v=r("2877"),b=Object(v["a"])(p,o,s,!1,null,null,null),m=b.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"masproyec"},[r("section",{staticClass:"ftco-section-3"},[t._m(0),r("div",{staticClass:"row"},t._l(t.tresProyec,(function(e,n){return r("div",{key:n,staticClass:"col-md-4",attrs:{"data-wow-delay":"100ms"}},[r("div",{staticClass:"container projectmas img d-flex justify-content-center align-items-center",style:{"background-image":"url(/images/"+e.foto[0]+")"}},[r("div",{staticClass:"overlay"}),r("div",{staticClass:"text text-center p-4"},[r("h3",[r("a",{attrs:{href:"/detalle/"+e.id}},[t._v(t._s(e.titulo))])]),r("span",[t._v(t._s(e.cliente))])])])])})),0)])])},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 section-title text-center"},[r("h2",{staticClass:"subTitulo"},[t._v("Mas proyectos")])])])])}];function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O={name:"MasProyecto",data:function(){return{tresProyec:[]}},computed:C({},Object(l["b"])(["proyectos"])),mounted:function(){this.llenarArray3()},methods:{llenarArray3:function(){for(var t=0;t<this.proyectos.length;t++){this.proyectos[t];this.proyectos[t].id==this.$route.params.id||3==this.tresProyec.length||this.tresProyec.push(this.proyectos[t])}}}},_=O,w=Object(v["a"])(_,y,h,!1,null,null,null),j=w.exports,x={name:"Detalle",components:{banner:i["a"],Proyecto:m,MasProyecto:j},data:function(){return{}}},P=x,E=Object(v["a"])(P,n,a,!1,null,null,null);e["default"]=E.exports},"3ac6":function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")()}).call(this,r("c8ba"))},"3e47":function(t,e,r){var n=r("a5eb"),a=r("c1b2"),i=r("4180");n({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperty:i.f})},4160:function(t,e,r){"use strict";var n=r("23e7"),a=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},4180:function(t,e,r){var n=r("c1b2"),a=r("77b2"),i=r("6f8d"),o=r("7168"),s=Object.defineProperty;e.f=n?s:function(t,e,r){if(i(t),e=o(e,!0),i(r),a)try{return s(t,e,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},"44ba":function(t,e,r){var n=r("c1b2"),a=r("7043"),i=r("2c6c"),o=r("a421"),s=r("7168"),c=r("78e7"),l=r("77b2"),u=Object.getOwnPropertyDescriptor;e.f=n?u:function(t,e){if(t=o(t),e=s(e,!0),l)try{return u(t,e)}catch(r){}if(c(t,e))return i(!a.f.call(t,e),t[e])}},"4a95":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"SectionMi"},[r("Presentacion"),r("Educacion"),r("Experiencia")],1)},a=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"ftco-section-no-padding bg-light"},[r("div",{staticClass:"hero-wrap"},[r("div",{staticClass:"overlay"}),r("div",{staticClass:"d-flex"},[r("div",{staticClass:"author-image text img p-md-4",staticStyle:{"background-image":"url(images/pc.jpg)"}}),r("div",{staticClass:"author-info text mt-3 mb-5 p-3 p-md-5"},[r("div",{staticClass:"desc"},[r("span",{staticClass:"subheading"},[t._v("Hola! ")]),r("h1",{staticClass:"big-letter"},[t._v("Yuliver")]),r("h1",{staticClass:"mb-4"},[r("span",[t._v("Mi nombre es Yuliver")])]),r("p",{staticClass:"mb-4",staticStyle:{"text-indent":"30px"}},[t._v(" Me considero una persona responsable, creativa y ordenada. Me gusta aprender cosas nuevas y a cumplir con mis objetivos. En busca de nuevas oportunidades para crecer como profesional y dar lo mejor de mis cualidades. ")])])])])])])}],s={name:"Presentacion",data:function(){return{}}},c=s,l=r("2877"),u=Object(l["a"])(c,i,o,!1,null,null,null),f=u.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"resume-section with-bg spad"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-7 offset-xl-2"},[r("div",{staticClass:"section-title text-center"},[r("h2",{staticClass:"subTitulo"},[t._v("Educación")])]),r("ul",{staticClass:"resume-list"},[r("li",[r("h2",[t._v("INGENIERA DE SISTEMAS")]),r("h3",[t._v("UNEFA - Núcleo Lara")]),r("h4",[t._v("DIC. 2017")]),r("p",[t._v(" Perfil del Egresado: Visualizar los sistemas de manera general e integradora. Analizar, diseñar, construir, probar e implantar Sistemas de información Automatizados. Garantizar el optimo funcionamiento y decisiones en materia de sistemas. ")])])])])])])])}],v={name:"Educacion",data:function(){return{}}},b=v,m=Object(l["a"])(b,d,p,!1,null,null,null),y=m.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"resume-section spad experi-mb"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-7 offset-xl-2"},[r("div",{staticClass:"section-title text-center"},[r("h2",{staticClass:"subTitulo"},[t._v("Experiencia")])]),r("ul",{staticClass:"resume-list mb-5"},[r("li",[r("h2",[t._v("FREELANCER")]),r("h4",[t._v("2019-Presente")])]),r("li",[r("h2",[t._v("PRÁCTICA PROFESIONAL")]),r("h3",[t._v("CORPOELEC")]),r("h4",[t._v("FEB. 2017 - JUN. 2017")]),r("p",[t._v(" Tareas realizadas: diseño de formularios, base de datos, programación, documentación. ")])])])])])])])}],C={name:"Experiencia",data:function(){return{}}},O=C,_=Object(l["a"])(O,h,g,!1,null,null,null),w=_.exports,j={name:"SobreMi",components:{Presentacion:f,Educacion:y,Experiencia:w},data:function(){return{}}},x=j,P=Object(l["a"])(x,n,a,!1,null,null,null);e["default"]=P.exports},"4de4":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").filter,i=r("1dde");n({target:"Array",proto:!0,forced:!i("filter")},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"638c":function(t,e,r){var n=r("06fa"),a=r("fc48"),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?i.call(t,""):Object(t)}:Object},"65f0":function(t,e,r){var n=r("861d"),a=r("e8b5"),i=r("b622"),o=i("species");t.exports=function(t,e){var r;return a(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6f8d":function(t,e,r){var n=r("dfdb");t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},7043:function(t,e,r){"use strict";var n={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,i=a&&!n.call({1:2},1);e.f=i?function(t){var e=a(this,t);return!!e&&e.enumerable}:n},7168:function(t,e,r){var n=r("dfdb");t.exports=function(t,e){if(!n(t))return t;var r,a;if(e&&"function"==typeof(r=t.toString)&&!n(a=r.call(t)))return a;if("function"==typeof(r=t.valueOf)&&!n(a=r.call(t)))return a;if(!e&&"function"==typeof(r=t.toString)&&!n(a=r.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},"746f":function(t,e,r){var n=r("428f"),a=r("5135"),i=r("c032"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});a(e,t)||o(e,t,{value:i.f(t)})}},"764b":function(t,e){t.exports={}},"77b2":function(t,e,r){var n=r("c1b2"),a=r("06fa"),i=r("7a37");t.exports=!n&&!a((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"78e7":function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},"7a37":function(t,e,r){var n=r("3ac6"),a=r("dfdb"),i=n.document,o=a(i)&&a(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},8418:function(t,e,r){"use strict";var n=r("c04e"),a=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?a.f(t,o,i(0,r)):t[o]=r}},"85d3":function(t,e,r){t.exports=r("9a13")},"8fa6":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"ftco-section ftco-bread"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row no-gutters slider-text justify-content-center align-items-center"},[r("div",{directives:[{name:"vue-aos",rawName:"v-vue-aos.once",value:{animationClass:"fadeIn animated"},expression:"{ animationClass: 'fadeIn animated' }",modifiers:{once:!0}}],staticClass:"col-md-8"},[r("p",{staticClass:"breadcrumbs"},[r("span",{staticClass:"mr-2"},[r("a",{on:{click:t.home}},[t._v("Inicio")])]),"Detalle"===this.titulo?r("span",{staticClass:"mr-2"},[r("a",{on:{click:t.portafolios}},[t._v("Portafolio")])]):t._e(),r("span",[t._v(t._s(t.titulo))])]),r("h1",{staticClass:"bread"},[t._v(t._s(t.titulo))])])])])])},a=[],i={props:{titulo:String},name:"banner",data:function(){return{}},methods:{home:function(){this.$router.push("/"),$("ul.filters-menu > li").removeClass("activee"),$("#menu-home").addClass("activee")},portafolios:function(){this.$router.push("/portafolio"),$("ul.filters-menu > li").removeClass("activee"),$("#menu-portafolio").addClass("activee")}}},o=i,s=r("2877"),c=Object(s["a"])(o,n,a,!1,null,null,null);e["a"]=c.exports},"9a13":function(t,e,r){t.exports=r("a38c")},a0e5:function(t,e,r){var n=r("06fa"),a=/#|\.prototype\./,i=function(t,e){var r=s[o(t)];return r==l||r!=c&&("function"==typeof e?n(e):!!e)},o=i.normalize=function(t){return String(t).replace(a,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},a38c:function(t,e,r){r("3e47");var n=r("764b"),a=n.Object,i=t.exports=function(t,e,r){return a.defineProperty(t,e,r)};a.defineProperty.sham&&(i.sham=!0)},a421:function(t,e,r){var n=r("638c"),a=r("1875");t.exports=function(t){return n(a(t))}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("c430"),o=r("83ab"),s=r("4930"),c=r("d039"),l=r("5135"),u=r("e8b5"),f=r("861d"),d=r("825a"),p=r("7b0b"),v=r("fc6a"),b=r("c04e"),m=r("5c6c"),y=r("7c73"),h=r("df75"),g=r("241c"),C=r("057f"),O=r("7418"),_=r("06cf"),w=r("9bf2"),j=r("d1e7"),x=r("9112"),P=r("6eeb"),E=r("5692"),S=r("f772"),L=r("d012"),$=r("90e3"),k=r("b622"),T=r("c032"),D=r("746f"),M=r("d44e"),A=r("69f3"),I=r("b727").forEach,N=S("hidden"),F="Symbol",H="prototype",G=k("toPrimitive"),R=A.set,V=A.getterFor(F),z=Object[H],B=a.Symbol,J=a.JSON,W=J&&J.stringify,Y=_.f,q=w.f,U=C.f,Q=j.f,K=E("symbols"),X=E("op-symbols"),Z=E("string-to-symbol-registry"),tt=E("symbol-to-string-registry"),et=E("wks"),rt=a.QObject,nt=!rt||!rt[H]||!rt[H].findChild,at=o&&c((function(){return 7!=y(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Y(z,e);n&&delete z[e],q(t,e,r),n&&t!==z&&q(z,e,n)}:q,it=function(t,e){var r=K[t]=y(B[H]);return R(r,{type:F,tag:t,description:e}),o||(r.description=e),r},ot=s&&"symbol"==typeof B.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},st=function(t,e,r){t===z&&st(X,e,r),d(t);var n=b(e,!0);return d(r),l(K,n)?(r.enumerable?(l(t,N)&&t[N][n]&&(t[N][n]=!1),r=y(r,{enumerable:m(0,!1)})):(l(t,N)||q(t,N,m(1,{})),t[N][n]=!0),at(t,n,r)):q(t,n,r)},ct=function(t,e){d(t);var r=v(e),n=h(r).concat(pt(r));return I(n,(function(e){o&&!ut.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ct(y(t),e)},ut=function(t){var e=b(t,!0),r=Q.call(this,e);return!(this===z&&l(K,e)&&!l(X,e))&&(!(r||!l(this,e)||!l(K,e)||l(this,N)&&this[N][e])||r)},ft=function(t,e){var r=v(t),n=b(e,!0);if(r!==z||!l(K,n)||l(X,n)){var a=Y(r,n);return!a||!l(K,n)||l(r,N)&&r[N][n]||(a.enumerable=!0),a}},dt=function(t){var e=U(v(t)),r=[];return I(e,(function(t){l(K,t)||l(L,t)||r.push(t)})),r},pt=function(t){var e=t===z,r=U(e?X:v(t)),n=[];return I(r,(function(t){!l(K,t)||e&&!l(z,t)||n.push(K[t])})),n};s||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),r=function(t){this===z&&r.call(X,t),l(this,N)&&l(this[N],e)&&(this[N][e]=!1),at(this,e,m(1,t))};return o&&nt&&at(z,e,{configurable:!0,set:r}),it(e,t)},P(B[H],"toString",(function(){return V(this).tag})),j.f=ut,w.f=st,_.f=ft,g.f=C.f=dt,O.f=pt,o&&(q(B[H],"description",{configurable:!0,get:function(){return V(this).description}}),i||P(z,"propertyIsEnumerable",ut,{unsafe:!0})),T.f=function(t){return it(k(t),t)}),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:B}),I(h(et),(function(t){D(t)})),n({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(Z,e))return Z[e];var r=B(e);return Z[e]=r,tt[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(l(tt,t))return tt[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!o},{create:lt,defineProperty:st,defineProperties:ct,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:c((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(p(t))}}),J&&n({target:"JSON",stat:!0,forced:!s||c((function(){var t=B();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}))},{stringify:function(t){var e,r,n=[t],a=1;while(arguments.length>a)n.push(arguments[a++]);if(r=e=n[1],(f(e)||void 0!==t)&&!ot(t))return u(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),n[1]=e,W.apply(J,n)}}),B[H][G]||x(B[H],G,B[H].valueOf),M(B,F),L[N]=!0},a5eb:function(t,e,r){"use strict";var n=r("3ac6"),a=r("44ba").f,i=r("a0e5"),o=r("764b"),s=r("194a"),c=r("0273"),l=r("78e7"),u=function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e};t.exports=function(t,e){var r,f,d,p,v,b,m,y,h,g=t.target,C=t.global,O=t.stat,_=t.proto,w=C?n:O?n[g]:(n[g]||{}).prototype,j=C?o:o[g]||(o[g]={}),x=j.prototype;for(p in e)r=i(C?p:g+(O?".":"#")+p,t.forced),f=!r&&w&&l(w,p),b=j[p],f&&(t.noTargetGet?(h=a(w,p),m=h&&h.value):m=w[p]),v=f&&m?m:e[p],f&&typeof b===typeof v||(y=t.bind&&f?s(v,n):t.wrap&&f?u(v):_&&"function"==typeof v?s(Function.call,v):v,(t.sham||v&&v.sham||b&&b.sham)&&c(y,"sham",!0),j[p]=y,_&&(d=g+"Prototype",l(o,d)||c(o,d,{}),o[d][p]=v,t.real&&x&&!x[p]&&c(x,p,v)))}},b301:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!r||!n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),a=r("7b0b"),i=r("df75"),o=r("d039"),s=o((function(){i(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return i(a(t))}})},b727:function(t,e,r){var n=r("f8c2"),a=r("44ad"),i=r("7b0b"),o=r("50c4"),s=r("65f0"),c=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(p,v,b,m){for(var y,h,g=i(p),C=a(g),O=n(v,b,3),_=o(C.length),w=0,j=m||s,x=e?j(p,_):r?j(p,0):void 0;_>w;w++)if((d||w in C)&&(y=C[w],h=O(y,w,g),t))if(e)x[w]=h;else if(h)switch(t){case 3:return!0;case 5:return y;case 6:return w;case 2:c.call(x,y)}else if(u)return!1;return f?-1:l||u?u:x}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c032:function(t,e,r){e.f=r("b622")},c098:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"SectionContac"},[r("banner",{attrs:{titulo:"Contacto"}}),r("MyContacto")],1)},a=[],i=r("8fa6"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"ftco-section contact-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row d-flex mb-5 contact-info"},[t._m(0),r("div",{staticClass:"col-md-3 d-flex"},[r("div",{staticClass:"info bg-light p-4"},[r("p",[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:"map-marker"}})],1),t._v(" "),r("br"),t._v(" Barquisimeto, Venezuela ")])])]),r("div",{staticClass:"col-md-3 d-flex"},[r("div",{staticClass:"info bg-light p-4"},[r("span",[r("font-awesome-icon",{attrs:{icon:"address-book"}})],1),r("br"),r("a",{attrs:{href:"https://github.com/yulivera",target:"_blank"}},[t._v("Github/yulivera")])])]),r("div",{staticClass:"col-md-3 d-flex"},[r("div",{staticClass:"info bg-light p-4"},[r("span",[r("font-awesome-icon",{attrs:{icon:"user"}})],1),r("br"),r("a",{attrs:{href:"https://www.facebook.com/andreinajimen",target:"_blank"}},[t._v("Facebook/andreinajimen")])])]),r("div",{staticClass:"col-md-3 d-flex"},[r("div",{staticClass:"info bg-light p-4"},[r("span",[r("font-awesome-icon",{attrs:{icon:"globe"}})],1),t._v(" "),r("br"),r("a",{attrs:{href:"http://www.linkedin.com/in/yuliver-bracho",target:"_blank"}},[t._v("Yuliver Bracho")])])])])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-12 mb-4"},[r("h2",{staticClass:"font-weight-bold"},[t._v("Información de Contacto")])])}],c={name:"MyContacto",data:function(){return{}}},l=c,u=r("2877"),f=Object(u["a"])(l,o,s,!1,null,null,null),d=f.exports,p={name:"Contacto",components:{banner:i["a"],MyContacto:d},data:function(){return{}}},v=p,b=Object(u["a"])(v,n,a,!1,null,null,null);e["default"]=b.exports},c1b2:function(t,e,r){var n=r("06fa");t.exports=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},c740:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").findIndex,i=r("44d2"),o="findIndex",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},cc94:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},dbb4:function(t,e,r){var n=r("23e7"),a=r("83ab"),i=r("56ef"),o=r("fc6a"),s=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),a=s.f,l=i(n),u={},f=0;while(l.length>f)r=a(n,e=l[f++]),void 0!==r&&c(u,e,r);return u}})},dfdb:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},e439:function(t,e,r){var n=r("23e7"),a=r("d039"),i=r("fc6a"),o=r("06cf").f,s=r("83ab"),c=a((function(){o(1)})),l=!s||c;n({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},eced:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"SectionPortf"},[r("banner",{attrs:{titulo:"Portafolio"}}),r("Proyectos")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"ftco-section-3 portfolio-section"},[r("div",{staticClass:"container"},[t._m(0),r("div",{staticClass:"projects"},[r("div",{staticClass:"row"},t._l(t.proyectos,(function(e,n){return r("div",{key:n,staticClass:"col-md-4 item",class:e.categoria},[r("div",{staticClass:"project img d-flex justify-content-center align-items-center",style:{"background-image":"url(/images/"+e.foto[0]+")"}},[r("div",{staticClass:"overlay"}),r("div",{staticClass:"text text-center p-4"},[r("h3",{on:{click:t.scrollTopp}},[r("router-link",{attrs:{to:{name:"detalle",params:{id:e.id}}}},[t._v(t._s(e.titulo))])],1),r("span",[t._v(t._s(e.cliente))])])])])})),0)])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"portfolioFilter"},[r("ul",{staticClass:"filters"},[r("li",{staticClass:"active",attrs:{"data-filter":"all"}},[r("a",{attrs:{href:"#!"}},[t._v(" Todo ")])]),r("li",{attrs:{"data-filter":"web"}},[r("a",{attrs:{href:"#!"}},[t._v(" Web")])]),r("li",{attrs:{"data-filter":"escritorio"}},[r("a",{attrs:{href:"#!"}},[t._v("Escritorio")])])])])])])}],s=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),c=r("2f62");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"Proyectos",data:function(){return{}},computed:u({},Object(c["b"])(["proyectos"])),mounted:function(){this.metodos()},methods:{scrollTopp:function(){$("html, body").animate({scrollTop:0},"slow")},metodos:function(){$("ul.filters > li").click((function(){$("ul.filters > li").removeClass("active"),$(this).addClass("active");var t=$(this).attr("data-filter");"all"==t?$(".item").show("3000"):($(".item").not("."+t).hide("3000"),$(".item").filter("."+t).show("3000"))}))}}},d=f,p=r("2877"),v=Object(p["a"])(d,i,o,!1,null,null,null),b=v.exports,m=r("8fa6"),y={name:"Portafolio",components:{Proyectos:b,banner:m["a"]},data:function(){return{}}},h=y,g=Object(p["a"])(h,n,a,!1,null,null,null);e["default"]=g.exports},ed70:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"SectionHabili"},[r("banner",{attrs:{titulo:"Habilidades"}}),r("ListaHabilidades")],1)},a=[],i=r("8fa6"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"ftco-section habilidad-section",attrs:{id:"skills-section"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},t._l(t.habilidades,(function(e,n){return r("div",{key:n,staticClass:"col-md-6"},[r("div",{staticClass:"progress-wrap"},[r("h3",[t._v(t._s(e.nombre))]),r("div",{staticClass:"progress"},[r("div",{staticClass:"progress-bar",style:{width:e.porcentaje+"%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}},[r("span",[t._v(t._s(e.porcentaje)+"%")])])])])])})),0)])])},s=[],c=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),l=r("2f62");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={name:"ListaHabilidades",data:function(){return{}},computed:f({},Object(l["b"])(["habilidades"]))},p=d,v=r("2877"),b=Object(v["a"])(p,o,s,!1,null,null,null),m=b.exports,y={name:"Habilidades",components:{banner:i["a"],ListaHabilidades:m},data:function(){return{}}},h=y,g=Object(v["a"])(h,n,a,!1,null,null,null);e["default"]=g.exports},fc48:function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.89b30c9f.js.map