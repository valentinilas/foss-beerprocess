(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0641":function(t,e,n){"use strict";n("a757")},"1c44":function(t,e,n){t.exports=n.p+"media/sample6.847d7948.mp4"},"1fc5":function(t,e,n){},"243d":function(t,e,n){t.exports=n.p+"media/sample3.4bd9b08a.mp4"},"25f0":function(t,e,n){"use strict";n("361a")},"276e":function(t,e,n){},"2aa8":function(t,e,n){},3179:function(t,e,n){},3545:function(t,e,n){},"361a":function(t,e,n){},3900:function(t,e,n){t.exports=n.p+"media/sample.6d544572.mp4"},"3a16":function(t,e,n){"use strict";n("baf7")},"55aa":function(t,e,n){"use strict";n("3179")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-navigation"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1),n("loader",{attrs:{spinner:t.loaded}})],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-nav"},[n("router-link",{staticClass:"main-nav__step-wrapper",attrs:{to:"/"}},[n("div",{staticClass:"main-nav__step main-nav__step--start"},[n("div",{staticClass:"main-nav__step-image"}),n("div",{staticClass:"main-nav__step-text"},[t._v("START")])])]),n("router-link",{staticClass:"main-nav__step-wrapper",attrs:{to:"/step-1"}},[n("div",{staticClass:"main-nav__step main-nav__step main-nav__step--1"},[n("div",{staticClass:"main-nav__step-image"}),n("div",{staticClass:"main-nav__step-text"},[t._v("Malt grinding")])])]),n("router-link",{staticClass:"main-nav__step-wrapper",attrs:{to:"/step-2"}},[n("div",{staticClass:"main-nav__step main-nav__step main-nav__step--2"},[n("div",{staticClass:"main-nav__step-image"}),n("div",{staticClass:"main-nav__step-text"},[t._v("Mashing")])])]),n("router-link",{staticClass:"main-nav__step-wrapper",attrs:{to:"/step-3"}},[n("div",{staticClass:"main-nav__step main-nav__step main-nav__step--3"},[n("div",{staticClass:"main-nav__step-image"}),n("div",{staticClass:"main-nav__step-text"},[t._v("Laudering")])])]),n("router-link",{staticClass:"main-nav__step-wrapper",attrs:{to:"/step-4"}},[n("div",{staticClass:"main-nav__step main-nav__step main-nav__step--4"},[n("div",{staticClass:"main-nav__step-image"}),n("div",{staticClass:"main-nav__step-text"},[t._v("Boiling")])])]),n("router-link",{staticClass:"main-nav__step-wrapper",attrs:{to:"/step-5"}},[n("div",{staticClass:"main-nav__step main-nav__step main-nav__step--5"},[n("div",{staticClass:"main-nav__step-image"}),n("div",{staticClass:"main-nav__step-text"},[t._v("Fermentation")])])]),n("router-link",{staticClass:"main-nav__step-wrapper",attrs:{to:"/step-6"}},[n("div",{staticClass:"main-nav__step main-nav__step main-nav__step--6"},[n("div",{staticClass:"main-nav__step-image"}),n("div",{staticClass:"main-nav__step-text"},[t._v("Finished beer")])])])],1)},o=[],c={name:"Navigation"},l=c,p=(n("3a16"),n("2877")),u=Object(p["a"])(l,r,o,!1,null,null,null),d=u.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.spinner?t._e():n("div",{staticClass:"spinner"},[t._m(0)])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-roller"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],_={name:"Loader",props:["spinner"]},f=_,h=(n("6da9"),Object(p["a"])(f,m,v,!1,null,null,null)),g=h.exports,b={name:"App",data:function(){return{spinner:this.loaded}},components:{"app-navigation":d,loader:g},computed:{loaded:function(){return this.$store.getters.getLoadedStatus}},methods:{onResize:function(){var t,e=document.getElementById("app"),n=window.innerWidth,a=window.innerHeight,s=e.clientWidth,i=e.clientHeight;t=Math.min(n/s,a/i),n<1920&&(e.style.transform="scale("+t+")")}},mounted:function(){window.addEventListener("resize",this.onResize),this.onResize()},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},created:function(){this.$store.dispatch("preload")}},y=b,C=(n("57f3"),Object(p["a"])(y,s,i,!1,null,null,null)),w=C.exports,x=n("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{staticClass:"in-page-link in-page-link--welcome",attrs:{to:"/step-1"}},[a("div",{staticClass:"in-page-link__wrapper"},[a("div",{staticClass:"in-page-link__icon"}),a("div",{staticClass:"in-page-link__text"},[t._v('Watch "Welcome"')])])]),a("router-link",{staticClass:"in-page-link in-page-link--grinding",attrs:{to:"/step-1"}},[a("div",{staticClass:"in-page-link__wrapper"},[a("div",{staticClass:"in-page-link__icon"}),a("div",{staticClass:"in-page-link__text"},[t._v('Watch "Grinding"')])])]),a("video",{staticClass:"step-video",attrs:{id:"step-start",width:"1280",height:"720",autoplay:"",muted:"",preload:"",loop:"",disablePictureInPicture:""},domProps:{muted:!0}},[a("source",{attrs:{src:n("3900"),type:"video/mp4"}})])],1)},P=[],k={name:"PageStart",computed:{videoUrl:function(){return this.$store.getters.getVideos[0]}}},O=k,S=(n("ea1f"),Object(p["a"])(O,E,P,!1,null,null,null)),$=S.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("video",{staticClass:"step-video",attrs:{id:"step-1",width:"1280",height:"720",autoplay:"",preload:"",disablePictureInPicture:""}},[a("source",{attrs:{src:n("bb69"),type:"video/mp4"}})])])}],B={name:"Step1",mounted:function(){document.getElementById("step-1").play()}},L=B,M=(n("9085"),Object(p["a"])(L,j,I,!1,null,null,null)),R=M.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("video",{staticClass:"step-video",attrs:{id:"step-2",width:"1280",height:"720",autoplay:"",preload:"",disablePictureInPicture:""}},[a("source",{attrs:{src:n("243d"),type:"video/mp4"}})])])}],U={name:"Step2",mounted:function(){document.getElementById("step-2").play()}},W=U,A=(n("af25"),Object(p["a"])(W,z,T,!1,null,null,null)),V=A.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("video",{staticClass:"step-video",attrs:{id:"step-3",width:"1280",height:"720",autoplay:"",disablePictureInPicture:""}},[a("source",{attrs:{src:n("fae1"),type:"video/mp4"}})])])}],J={name:"Step3",mounted:function(){document.getElementById("step-3").play()}},D=J,G=(n("0641"),Object(p["a"])(D,H,F,!1,null,null,null)),N=G.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("video",{staticClass:"step-video",attrs:{id:"step-4",width:"1280",height:"720",autoplay:"",disablePictureInPicture:""}},[a("source",{attrs:{src:n("ecf2"),type:"video/mp4"}})])])}],Q={name:"Step4",mounted:function(){document.getElementById("step-4").play()}},X=Q,Y=(n("25f0"),Object(p["a"])(X,q,K,!1,null,null,null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("video",{staticClass:"step-video",attrs:{id:"step-5",width:"1280",height:"720",autoplay:"",disablePictureInPicture:""}},[a("source",{attrs:{src:n("1c44"),type:"video/mp4"}})])])}],nt={name:"Step5",mounted:function(){document.getElementById("step-5").play()}},at=nt,st=(n("f319"),Object(p["a"])(at,tt,et,!1,null,null,null)),it=st.exports,rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("video",{staticClass:"step-video",attrs:{id:"step-6",width:"1280",height:"720",autoplay:"",preload:"",disablePictureInPicture:""}},[a("source",{attrs:{src:n("1c44"),type:"video/mp4"}})])])}],ct={name:"Step6",mounted:function(){document.getElementById("step-6").play()}},lt=ct,pt=(n("55aa"),Object(p["a"])(lt,rt,ot,!1,null,null,null)),ut=pt.exports;a["a"].use(x["a"]);var dt=[{path:"/",name:"Home",component:$},{path:"/step-1",name:"Step1",component:R},{path:"/step-2",name:"Step2",component:V},{path:"/step-3",name:"Step3",component:N},{path:"/step-4",name:"Step4",component:Z},{path:"/step-5",name:"Step5",component:it},{path:"/step-6",name:"Step6",component:ut}],mt=new x["a"]({routes:dt,linkExactActiveClass:"is-active"}),vt=mt,_t=n("2f62"),ft=(n("d81d"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.map((function(t){return new Promise((function(e){fetch(t).then((function(t){return console.log(t),t.blob()})).then((function(t){var n=window.URL.createObjectURL(t);e(n)}))}))}));return Promise.all(a)});a["a"].use(_t["a"]);var ht=new _t["a"].Store({state:{loaded:!0,videos:[]},mutations:{setVideoUrls:function(t,e){t.videos=e,t.loaded=!0}},actions:{preload:function(t){ft("./assets/videos/sample.mp4","./assets/videos/sample2.mp4","./assets/videos/sample3.mp4","./assets/videos/sample4.mp4","./assets/videos/sample5.mp4","./assets/videos/sample6.mp4").then((function(e){console.log(e),t.commit("setVideoUrls",e)}))}},getters:{getVideos:function(t){return t.videos},getLoadedStatus:function(t){return t.loaded}}});a["a"].config.productionTip=!1,new a["a"]({router:vt,store:ht,render:function(t){return t(w)}}).$mount("#app")},"57f3":function(t,e,n){"use strict";n("3545")},"6da9":function(t,e,n){"use strict";n("1fc5")},"77fc":function(t,e,n){},9085:function(t,e,n){"use strict";n("77fc")},"9ce5":function(t,e,n){},a757:function(t,e,n){},af25:function(t,e,n){"use strict";n("276e")},baf7:function(t,e,n){},bb69:function(t,e,n){t.exports=n.p+"media/sample2.ed0a69e6.mp4"},ea1f:function(t,e,n){"use strict";n("9ce5")},ecf2:function(t,e,n){t.exports=n.p+"media/sample5.34cbe81d.mp4"},f319:function(t,e,n){"use strict";n("2aa8")},fae1:function(t,e,n){t.exports=n.p+"media/sample4.88f3928c.mp4"}});
//# sourceMappingURL=app.87b19f37.js.map