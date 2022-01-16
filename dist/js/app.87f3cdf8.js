(function(e){function t(t){for(var o,c,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ec78ba17"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Menu"),n("router-view"),n("Footer")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-dark"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-between"},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark",staticStyle:{width:"100%"}},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Cookie Game "),n("br"),n("span",{staticStyle:{color:"#808080","font-size":"60%"}},[e._v("Coded in Vue 2 and Express.js")])]),e._m(0)],1)])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],u={name:"Menu"},s=u,l=n("2877"),f=Object(l["a"])(s,c,i,!1,null,null,null),d=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("© 2020 - "+e._s(e.currentYear)+" Janet Wang")])])},b=[],v={name:"Footer",data:function(){return{currentYear:(new Date).getFullYear()}}},h=v,m=Object(l["a"])(h,p,b,!1,null,null,null),g=m.exports,w={name:"App",components:{Menu:d,Footer:g}},y=w,_=(n("034f"),Object(l["a"])(y,r,a,!1,null,null,null)),S=_.exports,j=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h1",[e._v("Cookie Game")]),n("p",[e._v("Score: "+e._s(e.scoresum))]),n("button",{on:{click:function(t){return e.addScore()}}},[e._v("Cookie button")])])},C=[],k=(n("99af"),n("bc3a")),x=n.n(k),E="".concat(window.location.protocol,"//").concat(window.location.host,"/score"),P="".concat(window.location.protocol,"//").concat(window.location.host,"/updatescore"),T={name:"Home",data:function(){return{scoresum:0}},methods:{addScore:function(){var e=this,t=1;x.a.post(P,{score:t}).then((function(t){console.log("Score added."),e.scoresum=t.data[0].score})).catch((function(t){e.error="Something went wrong! ".concat(t)})),this.showScore()},showScore:function(){var e=this;x.a.get(E).then((function(t){e.scoresum=0==t.data.length?0:t.data[0].score})).catch((function(t){e.error="Something went wrong! ".concat(t)}))}},created:function(){this.showScore(),setInterval(function(){this.showScore(),console.log("Score refreshed.")}.bind(this),5e3)}},M=T,$=Object(l["a"])(M,O,C,!1,null,null,null),F=$.exports;o["a"].use(j["a"]);var A=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],D=new j["a"]({routes:A}),J=D;o["a"].config.productionTip=!1,new o["a"]({router:J,render:function(e){return e(S)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.87f3cdf8.js.map