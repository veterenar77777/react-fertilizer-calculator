(this["webpackJsonpfertilizer-calculator"]=this["webpackJsonpfertilizer-calculator"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"j",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return d}));var r="calculatorOptions",a="CALCULATE_START",c="CALCULATE_SUCCESS",o="CALCULATE_ERROR",i="FERTILIZERS_PUSH",u="FERTILIZERS_REMOVE",l="FERTILIZERS_RESET",f="RECIPE_PUSH",s="RECIPE_REMOVE",d="RECIPE_RESET"},159:function(e,t,n){e.exports=n(229)},229:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(63),o=n.n(c),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=n(80),f=n(85),s=n(13),d=n(231),b=n(45),O={App:Object(b.a)((function(){return n.e(7).then(n.bind(null,463))})),NotFound:function(){return a.a.createElement("h1",null,"Not found")},Help:Object(b.a)((function(){return Promise.all([n.e(4),n.e(9)]).then(n.bind(null,469))})),Calculator:Object(b.a)((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,468))})),ChemFormula:Object(b.a)((function(){return n.e(8).then(n.bind(null,464))})),Example:Object(b.a)((function(){return n.e(6).then(n.bind(null,465))}))},p=n(38),m=n(14),v=n(230),j=Object(m.a)({},v.polaris,{colors:Object(m.a)({},v.polaris.colors,{NO3:"#05AD11",NH4:"#FFF",P:"#DBC403",K:"#E07206",Ca:"#D1C7C7",Mg:"#AB0AE0",S:"#FFF",modes:{dark:Object(m.a)({},v.polaris.colors.modes.dark,{text:"#9d9d9d"})}}),card:{boxShadow:"small",p:2},styles:Object(m.a)({},v.polaris.styles,{button:{color:"background"}}),shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}});console.log(j);var h=n(84);function g(){var e=Object(h.a)(['\n&>a {\n    background: #000;\n    color: #fff;\n    text-decoration: none;\n    font-family: arial, sans-serif;\n    text-align: center;\n    font-weight: bold;\n    padding: 5px 40px;\n    font-size: 1rem;\n    line-height: 2rem;\n    position: relative;\n    transition: 0.5s;\n}\n\n&>a:hover {\n    background: #c11;\n    color: #fff;\n}\n\n&>a::before, &>a::after {\n    content: "";\n    width: 100%;\n    display: block;\n    position: absolute;\n    top: 1px;\n    left: 0;\n    height: 1px;\n    background: #fff;\n}\n\n&>a::after {\n    bottom: 1px;\n    top: auto;\n}\n\n@media screen and (min-width: 800px) {\n    & {\n        position: absolute;\n        display: block;\n        top: 0;\n        right: 0;\n        width: 200px;\n        overflow: hidden;\n        height: 200px;\n        z-index: 9999;\n    }\n\n    &>a {\n        // width: 200px;\n        position: absolute;\n        top: 40px;\n        right: -50px;\n        transform: rotate(45deg);\n        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);\n    }\n}\n']);return g=function(){return e},e}var N=n(65).a.span(g()),E=function(){return a.a.createElement(N,null,a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Apkawa/react-fertilizer-calculator"},"Fork me on GitHub"))},w=n(11),y=n(101),S=n(103),C=n(104),x=function(){var e=Object(y.b)(),t=Object(w.a)(e,2),n=t[0],r=t[1],c="default"===n?S.a:C.a;return a.a.createElement(c,{onClick:function(){r("default"===n?"dark":"default")},size:42,color:"text"})},P=function(e){var t=e.store;return a.a.createElement(l.a,{store:t},a.a.createElement(d.a,{theme:j},a.a.createElement(p.d,{justifyContent:"space-between"},a.a.createElement(p.a,{padding:3},a.a.createElement(x,null)),a.a.createElement(E,null)),a.a.createElement(p.d,{flexDirection:"column",margin:2},a.a.createElement(p.a,{flex:1},a.a.createElement(f.a,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/",component:O.Calculator}),a.a.createElement(s.a,{path:["/formula/:formula?/:percent?"],component:O.ChemFormula}),a.a.createElement(s.a,{path:"/example",component:O.Example}),a.a.createElement(s.a,{path:"/help",component:O.Help}),a.a.createElement(s.a,{path:"*",component:O.NotFound})))),a.a.createElement(p.d,{justifyContent:"flex-end",marginTop:"auto",flex:1},a.a.createElement(p.f,{fontSize:1},"0.0.10"," ","3075d3b"," [","2020-09-22T17:17:39+03:00","]")))))},H=n(28),M=n(107),_=n(9),k=n.n(_),R=n(23),A=n(98),K=n(69),T=n(2),z=n(10),F=n(55),I=n(18),L=n(8),U=n(106),B=k.a.mark(D);function D(e){var t,n,r;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=Object(L.a)(new U.a(e)),a.prev=1,t.s();case 3:if((n=t.n()).done){a.next=9;break}return r=n.value,a.next=7,r;case 7:a.next=3;break;case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),t.e(a.t0);case 14:return a.prev=14,t.f(),a.finish(14);case 17:case"end":return a.stop()}}),B,null,[[1,11,14,17]])}var W=n(3),J=(n(26),n(39));function Z(e,t){var n=Object(W.b)(e).map((function(e){var n=Object(w.a)(e,2),r=n[0],a=n[1],c=t[r],o=100;return 0!==c?o=c<a?a/c:c/a:c===a&&(o=1),[r,o]}));return Object.fromEntries(n)}function G(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=null,c=(new Date).getTime(),o=0,i=Object(L.a)(D(t));try{for(i.s();!(n=i.n()).done;){var u=n.value,l=V(e,u,r);a?(a.score<l.score&&(a=l),o+=1):a=l}}catch(f){i.e(f)}finally{i.f()}return a&&(a.stats.count=o,a.stats.time=((new Date).getTime()-c)/1e3),a}function V(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n||{},a=r.accuracy,c=void 0===a?.1:a,o=r.ignore_Ca,i=void 0!==o&&o,u=r.ignore_Mg,l=void 0!==u&&u,f=r.ignore_S,s=void 0!==f&&f,d=r.solution_volume,b=void 0===d?1:d,O=r.solution_concentration,p=void 0===O?1:O,v=Object(W.a)(c),j=Object(J.c)();i&&(j.Ca=1),l&&(j.Mg=1),s&&(j.S=1);var h,g=Object.fromEntries(t.map((function(e){return[e.id,{id:e.id,weight:0,base_weight:0}]}))),N=Object(m.a)({},e),E=Object(J.c)(),y=Object(L.a)(t);try{for(y.s();!(h=y.n()).done;){var S,C,x=h.value,P=Object(W.b)(x.elements).filter((function(e){return e[1]})).sort((function(e,t){return N[e[0]]/e[1]-N[t[0]]/t[1]})),H=null===(S=P.filter((function(t){var n=Object(w.a)(t,1)[0];return N[n]>0&&e[n]>0})))||void 0===S||null===(C=S[0])||void 0===C?void 0:C[0],M=P.filter((function(t){var n=Object(w.a)(t,1)[0];return e[n]<=0&&!j[n]})).length>0;if(H&&!M){var _=Object.fromEntries(P),k=N[H]/(10*_[H]);g[x.id].base_weight=Object(W.d)(k,3),g[x.id].weight=Object(W.d)(k*b*p,v);var R,A=Object(L.a)(P);try{for(A.s();!(R=A.n()).done;){var K=Object(w.a)(R.value,2),T=K[0],z=K[1],F=k*z*10;E[T]+=Object(W.d)(F),N[T]-=F}}catch(te){A.e(te)}finally{A.f()}}}}catch(te){y.e(te)}finally{y.f()}var I,U=Z(e,E),B=Object(L.a)(Object(W.b)(j));try{for(B.s();!(I=B.n()).done;){var D=Object(w.a)(I.value,2),G=D[0],V=D[1];V&&(U[G]=0)}}catch(te){B.e(te)}finally{B.f()}var Y=Object(W.e)(Object.values(U)),X=Object(W.e)(Object(W.h)(j)),$=Object(W.c)(e).length,q=Math.round(100/((Y-($-X))/($-X)+1)),Q=Object(W.b)(E).map((function(t){var n=Object(w.a)(t,2),r=n[0],a=n[1];return[r,Object(W.d)(e[r]-a,1)]})),ee=Object.fromEntries(Q);return{fertilizers:Object(W.h)(g).map((function(e){return Object(m.a)({},e,{base_weight:Object(W.d)(e.base_weight,v),weight:Object(W.d)(e.weight,v)})})).filter((function(e){return e.weight})),elements:E,deltaElements:ee,score:q,stats:{count:0,time:0}}}var Y=n(53),X=k.a.mark(ee),$=k.a.mark(te),q=k.a.mark(ne),Q=k.a.mark(re);function ee(){var e,t,n,r,a,c,o,i;return k.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Object(R.d)(Object(A.a)(z.j));case 2:if((e=u.sent).fertilizers.length){u.next=9;break}return u.next=6,Object(R.c)(Object(K.b)(z.j,{fertilizers:{_error:"Need fertilizers!"}}));case 6:return u.next=8,Object(R.c)(Object(F.a)());case 8:return u.abrupt("return");case 9:return t=e.ignore_Ca,n=e.ignore_Mg,r=e.ignore_S,a=e.accuracy,c=e.solution_volume,o=e.solution_concentration,i=G(e.recipe,e.fertilizers.map((function(e){return Object(Y.b)(e)})),{ignore_Ca:t,ignore_Mg:n,ignore_S:r,accuracy:a,solution_volume:c,solution_concentration:o}),u.next=13,Object(R.c)(Object(F.c)(i));case 13:case"end":return u.stop()}}),X)}function te(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.e)(z.b,ee);case 2:case"end":return e.stop()}}),$)}function ne(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.e)([T.J.CHANGE,T.J.BLUR,T.J.ARRAY_PUSH,T.J.ARRAY_REMOVE],k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.c)(Object(F.b)());case 2:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),q)}function re(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)([Object(R.b)(te),Object(R.b)(ne)]);case 2:case"end":return e.stop()}}),Q)}var ae=k.a.mark(oe),ce=[re];function oe(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)(ce.map((function(e){return e()})));case 2:case"end":return e.stop()}}),ae)}function ie(e,t){return e}var ue=[{id:"\u0421\u0443\u043b\u044c\u0444\u0430\u0442 \u043c\u0430\u0433\u043d\u0438\u044f (MgSO4*7H2O)",composition:[{formula:"MgSO4*7H2O",percent:98}]},{id:"\u041d\u0438\u0442\u0440\u0430\u0442 \u0430\u043c\u043c\u043e\u043d\u0438\u044f (NH4NO3)",composition:[{formula:"NH4NO3",percent:98}]},{id:"\u041d\u0438\u0442\u0440\u0430\u0442 \u043a\u0430\u043b\u0438\u044f (KNO3)",composition:[{formula:"KNO3",percent:98}]},{id:"\u0421\u0443\u043b\u044c\u0444\u0430\u0442 \u043a\u0430\u043b\u0438\u044f (K2SO4)",composition:[{formula:"K2SO4",percent:98}]},{id:"\u041c\u043e\u043d\u043e\u0444\u043e\u0441\u0444\u0430\u0442 \u043a\u0430\u043b\u0438\u044f (KH2PO4)",composition:[{formula:"KH2PO4",percent:98}]},{id:"\u041a\u0430\u043b\u044c\u0446\u0438\u0435\u0432\u0430\u044f \u0441\u0435\u043b\u0438\u0442\u0440\u0430 (Ca(NO3)2*4H2O)",composition:[{formula:"Ca(NO3)2*4H2O",percent:98}]},{id:"\u0421\u0443\u043b\u044c\u0444\u0430\u0442 \u0430\u043c\u043c\u043e\u043d\u0438\u044f (NH4)2SO4)",composition:[{formula:"(NH4)2SO4",percent:98}]},Object(Y.a)("\u041c\u0430\u0433\u043d\u0438\u0435\u0432\u0430\u044f \u0441\u0435\u043b\u0438\u0442\u0440\u0430 (Mg(NO3)2*6\u041d2\u041e)",{NO3:7,Mg:10})],le=n(50),fe={result:null,process:!1,error:!1,fertilizers:ue,recipes:le.a},se=n(97),de=Object(H.c)({calculator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.b:return Object(m.a)({},e,{process:!0});case z.c:return Object(m.a)({},e,{process:!1,result:t.result});case z.a:return Object(m.a)({},e,{process:!1,error:!0});case z.d:return Object(m.a)({},e,{fertilizers:Object(W.g)(e.fertilizers,t.payload,"id")});case z.e:return Object(m.a)({},e,{fertilizers:e.fertilizers.filter((function(e){return t.payload.id!==e.id}))});case z.f:return Object(m.a)({},e,{fertilizers:Object(I.a)(ue)});case z.g:return Object(m.a)({},e,{recipes:Object(W.g)(e.recipes,t.payload,"name")});case z.h:return Object(m.a)({},e,{recipes:e.recipes.filter((function(e){return t.payload.name!==e.name}))});case z.i:return Object(m.a)({},e,{recipes:Object(I.a)(le.a)});default:return ie(e)}},form:se.a}),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d,Oe=Object(M.a)();var pe=function(){var e,t,n={};return localStorage.getItem("reduxState")&&((null===(e=n=JSON.parse(localStorage.getItem("reduxState")))||void 0===e?void 0:e.calculator)&&!n.calculator.fertilizers&&(n.calculator.fertilizers=ue),(null===(t=n)||void 0===t?void 0:t.calculator)&&!n.calculator.recipes&&(n.calculator.recipes=le.a)),n}(),me=[Oe],ve=be(H.a.apply(void 0,me)),je=Object(H.e)(de,pe,ve);je.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(je.getState()))})),Oe.run(oe),o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(P,{store:je})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/pwa-sw.js");i?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):u(t,e)}))}}()},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c}));var r={H:1.008,He:4.0026022,Li:6.94,Be:9.01218315,B:10.81,C:12.011,N:14.007,O:15.999,F:18.9984031636,Ne:20.17976,Na:22.989769282,Mg:24.305,Al:26.98153857,Si:28.085,P:30.9737619985,S:32.06,Cl:35.45,K:39.09831,Ar:39.9481,Ca:40.0784,Sc:44.9559085,Ti:47.8671,V:50.94151,Cr:51.99616,Mn:54.9380443,Fe:55.8452,Ni:58.69344,Co:58.9331944,Cu:63.5463,Zn:65.382,Ga:69.7231,Ge:72.6308,As:74.9215956,Se:78.9718,Br:79.904,Kr:83.7982,Rb:85.46783,Sr:87.621,Y:88.905842,Zr:91.2242,Nb:92.906372,Mo:95.951,Tc:98,Ru:101.072,Rh:102.905502,Pd:106.421,Ag:107.86822,Cd:112.4144,In:114.8181,Sn:118.7107,Sb:121.7601,I:126.904473,Te:127.603,Xe:131.2936,Cs:132.905451966,Ba:137.3277,La:138.905477,Ce:140.1161,Pr:140.907662,Nd:144.2423,Pm:145,Sm:150.362,Eu:151.9641,Gd:157.253,Tb:158.925352,Dy:162.5001,Ho:164.930332,Er:167.2593,Tm:168.934222,Yb:173.0451,Lu:174.96681,Hf:178.492,Ta:180.947882,W:183.841,Re:186.2071,Os:190.233,Ir:192.2173,Pt:195.0849,Au:196.9665695,Hg:200.5923,Tl:204.38,Pb:207.21,Bi:208.980401,Po:209,At:210,Rn:222,Fr:223,Ra:226,Ac:227,Pa:231.035882,Th:232.03774,Np:237,U:238.028913,Am:243,Pu:244,Cm:247,Bk:247,Cf:251,Es:252,Fm:257,Md:258,No:259,Lr:266,Rf:267,Db:268,Sg:269,Hs:269,Bh:270,Mt:278,Ds:281,Rg:282,Cn:285,Nh:286,Fl:289,Mc:289,Lv:293,Ts:294,Og:294,Uue:315},a=["NO3","NH4","P","K","Ca","Mg","S"],c={NO3:-1/r.N,NH4:1/r.N,P:-1/r.P,K:1/r.K,Ca:2/r.Ca,Mg:2/r.Mg,S:-2/r.S,Cl:-1/r.Cl,Na:1/r.Na}},3:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return d}));var r=n(18),a=n(8),c=Object.keys,o=Object.entries,i=Object.values;function u(e){return e.reduce((function(e,t){return e+t}),0)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n}function f(e){return Math.floor(e.valueOf())===e.valueOf()?0:e.toString().split(".")[1].length||0}function s(e,t){var n,r={},c=Object(a.a)(e);try{for(c.s();!(n=c.n()).done;){var o=n.value;r[o[t]]=o}}catch(i){c.e(i)}finally{c.f()}return r}function d(e,t,n){for(var a=Object(r.a)(e),c=!1,o=0;o<e.length;o++)if(a[o][n]===t[n]){a[o]=t,c=!0;break}return c||a.push(t),a}},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return f}));var r=n(11),a=n(8),c=n(3),o=n(26);function i(e){var t,n={anions:-0,cations:0,ion_balance:0,"N:K":(e.NH4+e.NO3)/e.K,"K:Ca":e.K/e.Ca,"Ca:Mg":e.Ca/e.Mg,"%NH4":Object(c.d)(e.NH4/(e.NH4+e.NO3)*100,1),EC:0},i=Object(a.a)(Object(c.b)(e));try{for(i.s();!(t=i.n()).done;){var u=Object(r.a)(t.value,2),l=u[0],f=u[1]*(null===o.c||void 0===o.c?void 0:o.c[l]);Math.sign(f)<0?n.anions+=f:n.cations+=f,n.ion_balance+=f}}catch(s){i.e(s)}finally{i.f()}return n.EC=.095*n.cations+.19,Object(c.b)(n).forEach((function(e){var t=Object(r.a)(e,2),a=t[0],o=t[1];isFinite(o)||(o=0),n[a]=Object(c.d)(o,2)})),n}function u(){return{NO3:0,NH4:0,P:0,K:0,Ca:0,Mg:0,S:0}}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Object(c.d)(Object(c.e)(e.map((function(e){return 1e3*e.weight})))/t)}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Object(c.d)(e*(1/t))/1e3}},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return b}));var r=n(11),a=n(8),c=n(3),o=n(26),i=function(e){var t,n,r=[],c="",o="",i=0,u=function(){if(c){var e=parseInt(o||"1",10);r.push({formula:c,count:e}),c="",o=""}},l=-1,f=Object(a.a)(e);try{for(f.s();!(n=f.n()).done;){var s=n.value;if(l++,/[A-Za-z]/.test(s))t&&(u(),t=!1),c+=s;else if("("===s)0===i&&c&&u(),i>0&&(c+=s),i+=1;else if(")"===s)0===(i-=1)?t=!0:c+=s;else if(/[*+]/.test(s))0===i&&c&&u(),i>0&&(c+=s),i+=1;else if(/\d/.test(s))if(t)o+=s;else{if(0===l){o+=s;continue}c+=s}}}catch(d){f.e(d)}finally{f.f()}return u(),r},u=function e(t){if(!t)return{};var n=i(t);if(1===n.length&&n[0].formula===t)return function(e){var t={},n=e.match(l);if(!n)return t;var r,c=Object(a.a)(n);try{for(c.s();!(r=c.n()).done;){var i=r.value.match(f);if(i){var u=i[1],s=parseInt(i[2]||"1",10);if(o.a.hasOwnProperty(u)){var d=u;t[d]=u in t?(t[d]||0)+s:s}}}}catch(b){c.e(b)}finally{c.f()}return t}(t);var r={};return n.forEach((function(t){var n,a=e(t.formula);for(var c in a)if(o.a.hasOwnProperty(c)){var i=c;n=(a[i]||0)*t.count,r[i]=c in r?(r[i]||0)+n:n}})),r},l=/([A-Z][a-z]{0,2})(\d*)/g,f=/([A-Z][a-z]{0,2})(\d*)/;function s(e){return u(e)}function d(e){var t,n={NH4:0,NO3:0},o=/NH4|NO3/g,u=Object(a.a)(i(e));try{for(u.s();!(t=u.n()).done;){var l=t.value;if(n.hasOwnProperty(l.formula))n[l.formula]+=l.count;else if(l.formula!==e){var f,s=Object(a.a)(Object(c.b)(d(l.formula)));try{for(s.s();!(f=s.n()).done;){var b=Object(r.a)(f.value,2),O=b[0],p=b[1];n[O]+=p}}catch(j){s.e(j)}finally{s.f()}}else{var m,v=Object(a.a)(l.formula.matchAll(o));try{for(v.s();!(m=v.n()).done;){n[m.value[0]]+=l.count}}catch(j){v.e(j)}finally{v.f()}}}}catch(j){u.e(j)}finally{u.f()}return n}function b(e){var t=Object.fromEntries(Object(c.b)(e).map((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];return[n,o.a[n]*a]}))),n=Object(c.e)(Object(c.h)(t));return Object.fromEntries(Object(c.b)(t).map((function(e){var t=Object(r.a)(e,2),a=t[0],o=t[1];return[a,Object(c.d)(o/n,2)]})))}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=[{name:"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u043e\u0435",elements:{NO3:214,NH4:14,P:60,K:250,Ca:170,Mg:50,S:46}},{name:"\u041f\u0435\u0440\u0435\u0446 \u0432\u0435\u0433\u0435\u0442\u0430\u0446\u0438\u044f",color:"green",elements:{NO3:224,NH4:14,P:39,K:264,Ca:200,Mg:36,S:56}},{name:"\u041f\u0435\u0440\u0435\u0446 \u0446\u0432\u0435\u0442\u0435\u043d\u0438\u0435",color:"yellow",elements:{NO3:150,NH4:0,P:90,K:280,Ca:170,Mg:50,S:56}},{name:"\u041f\u0435\u0440\u0435\u0446 \u043f\u043b\u043e\u0434\u043e\u043d\u043e\u0448\u0435\u043d\u0438\u0435",color:"red",elements:{NO3:140,NH4:0,P:50,K:330,Ca:170,Mg:50,S:56}},{name:"\u0422\u043e\u043c\u0430\u0442 \u0432\u0435\u0433\u0435\u0442\u0430\u0446\u0438\u044f",color:"green",elements:{NO3:220,NH4:0,P:50,K:260,Ca:220,Mg:60,S:141}},{name:"\u0422\u043e\u043c\u0430\u0442 \u0446\u0432\u0435\u0442\u0435\u043d\u0438\u0435",color:"yellow",elements:{NO3:220,NH4:0,P:50,K:280,Ca:200,Mg:60,S:141}},{name:"\u0422\u043e\u043c\u0430\u0442 \u043f\u043b\u043e\u0434\u043e\u043d\u043e\u0448\u0435\u043d\u0438\u0435",color:"red",elements:{NO3:200,NH4:0,P:50,K:320,Ca:180,Mg:60,S:141}},{name:"\u041e\u0433\u0443\u0440\u0446\u044b",elements:{NO3:180,NH4:0,P:80,K:320,Ca:180,Mg:50,S:44}},{name:"\u0421\u0430\u043b\u0430\u0442",elements:{NO3:200,NH4:0,P:80,K:200,Ca:170,Mg:50,S:0}},{name:"\u0411\u043e\u0431\u043e\u0432\u044b\u0435",elements:{NO3:80,NH4:0,P:110,K:400,Ca:170,Mg:50,S:0}},{name:"\u041a\u0430\u043f\u0443\u0441\u0442\u0430",elements:{NO3:200,NH4:0,P:70,K:200,Ca:170,Mg:50,S:0}},{name:"\u041a\u043b\u0443\u0431\u043d\u0438\u043a\u0430",elements:{NO3:150,NH4:0,P:70,K:350,Ca:200,Mg:50,S:48}},{name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c",elements:{NO3:200,NH4:0,P:80,K:200,Ca:170,Mg:50,S:0}},{name:"\u0422\u044b\u043a\u0432\u0430",elements:{NO3:100,NH4:0,P:95,K:320,Ca:170,Mg:50,S:0}}]},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return s}));var r=n(64),a=n(8),c=n(11),o=n(3),i=n(44),u=n(39),l={NO3:"NO3",NH4:"NH4",P:"P2O5",K:"K2O",Ca:"CaO",Mg:"MgO",S:"S"};function f(e,t){return{id:e,composition:Object(o.b)(t).filter((function(e){return e[1]>0})).map((function(e){var t=Object(c.a)(e,2),n=t[0],r=t[1];return{formula:l[n],percent:r}}))}}function s(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],f=Object(u.c)(),s=Object(a.a)(e.composition);try{for(s.s();!(t=s.n()).done;){var d,b=t.value,O=Object(i.b)(b.formula),p=Object(i.a)(O),m=Object(a.a)(Object(o.b)(p));try{for(m.s();!(d=m.n()).done;){var v=Object(c.a)(d.value,2),j=v[0],h=v[1],g=Object(r.a)({},j,1);"N"===j&&(g=Object(i.c)(b.formula),Object(o.c)(f).includes(b.formula)&&(h=1));var N,E=Object(o.e)(Object(o.h)(g)),w=Object(a.a)(Object(o.b)(g));try{for(w.s();!(N=w.n()).done;){var y=Object(c.a)(N.value,2),S=y[0],C=y[1];if(f.hasOwnProperty(S)){var x=100;b.percent&&(x=b.percent),x*=C/E,f[S]+=Object(o.d)(x*h,2)}}}catch(P){w.e(P)}finally{w.f()}}}catch(P){m.e(P)}finally{m.f()}}}catch(P){s.e(P)}finally{s.f()}return n||Object(o.c)(f).forEach((function(e){var t=l[e],n=Object(i.a)(Object(i.b)(t));if(!n.hasOwnProperty("N")&&!n.hasOwnProperty("S")){var r=n[e];if(r){var a=Object(o.d)(Object(o.e)(Object(o.h)(n))/r,2);f[e]=Object(o.d)(f[e]*a,2)}}})),{id:e.id,elements:f}}},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return d}));var r=n(10),a=function(){return{type:r.b}},c=function(e){return{type:r.c,result:e}},o=function(){return{type:r.a}},i=function(e){return{type:r.d,payload:e}},u=function(e){return{type:r.e,payload:e}},l=function(){return{type:r.f}},f=function(e){return{type:r.g,payload:e}},s=function(e){return{type:r.h,payload:e}},d=function(){return{type:r.i}}}},[[159,1,2]]]);
//# sourceMappingURL=main.09ea9501.chunk.js.map