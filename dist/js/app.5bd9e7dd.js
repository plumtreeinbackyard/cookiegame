(function(t){function e(e){for(var o,c,u=e[0],i=e[1],s=e[2],l=0,f=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a=[];function c(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ec78ba17"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(t);var s=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Menu"),n("router-view"),n("Footer")],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-dark"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-between"},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark",staticStyle:{width:"100%"}},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Cookie Game "),n("br"),n("span",{staticStyle:{color:"#808080","font-size":"60%"}},[t._v("Coded in Vue 2 and Express.js")])]),t._m(0)],1)])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],i={name:"Menu"},s=i,l=n("2877"),d=Object(l["a"])(s,c,u,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v("© 2020 - "+t._s(t.currentYear)+" Janet Wang")])])},b=[],v={name:"Footer",data:function(){return{currentYear:(new Date).getFullYear()}}},h=v,m=Object(l["a"])(h,p,b,!1,null,null,null),g=m.exports,w={name:"App",components:{Menu:f,Footer:g}},y=w,_=(n("034f"),Object(l["a"])(y,r,a,!1,null,null,null)),j=_.exports,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",[t._v("Cookie Game")]),n("p",[t._v("Score: "+t._s(t.scoresum))]),n("button",{on:{click:function(e){return t.addScore()}}},[t._v("Cookie button")])])},C=[],k=(n("99af"),n("bc3a")),x=n.n(k),E="".concat(window.location.protocol,"//").concat(window.location.host,"/score"),P="".concat(window.location.protocol,"//").concat(window.location.host,"/updatescore"),T={name:"Home",data:function(){return{scoresum:0}},methods:{addScore:function(){var t=this,e=1;x.a.post(P,{score:e}).then((function(e){console.log("returned data: ",e.data),t.scoresum=e.data[0].score})).catch((function(e){t.error="Something went wrong! ".concat(e)})),this.showScore()},showScore:function(){var t=this;x.a.get(E).then((function(e){console.log("returned data: ",e.data),t.scoresum=0==e.data.length?0:e.data[0].score})).catch((function(e){t.error="Something went wrong! ".concat(e)}))}},created:function(){this.showScore(),setInterval(function(){this.showScore()}.bind(this),5e3)}},M=T,$=Object(l["a"])(M,O,C,!1,null,null,null),F=$.exports;o["a"].use(S["a"]);var A=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],D=new S["a"]({routes:A}),J=D;o["a"].config.productionTip=!1,new o["a"]({router:J,render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.5bd9e7dd.js.map