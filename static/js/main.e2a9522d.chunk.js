(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{14:function(e,t,n){e.exports={app:"app_app__3mk8F",appMain:"app_appMain__1WD4g"}},25:function(e,t,n){e.exports={navMenuLink:"nav-menu-link_navMenuLink___XToH",_active:"nav-menu-link__active__IlgWF","nav-menu__link-animation":"nav-menu-link_nav-menu__link-animation__1Szjn"}},27:function(e,t,n){e.exports={navMenu:"nav-menu_navMenu__1TK3f"}},32:function(e,t,n){e.exports=n(57)},37:function(e,t,n){},38:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),c=n.n(o);n(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(1),i=n(14),u=n.n(i),s=n(3),m=Object(s.a)(),f=function(){return r.a.createElement(r.a.Fragment,null,"This page doesn't exist")},p=n(23),v=n(24),d=n(31),h=n(30),E=(n(38),["Array item 1","Array item 2","Array item 3"]),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props.children,t=void 0===e?[]:e,n=t.filter((function(e){var t=e.props;return t&&"list__item"===t.className}));return r.a.createElement(r.a.Fragment,null,t,r.a.createElement("ul",{className:"list"},n,E.map((function(e,t){return r.a.createElement("li",{key:t,className:"list__item"},e)}))))}}]),n}(a.Component),b=function(){return r.a.createElement(g,null)},k=n(9),x=n(12),y=n(25),_=n.n(y),O=Object(a.memo)((function(e){var t=e.text,n=e.to,a=e.linkStyleClass,o=Object(k.a)(e,["text","to","linkStyleClass"]);return r.a.createElement(x.a,Object.assign({},o,{strict:!0,exact:!0,to:n,activeClassName:"_active",className:"".concat(_.a.navMenuLink," ").concat(null!==a&&void 0!==a?a:"")}),t)})),j=(n(46),function(e){var t=e.transformY,n=void 0===t?8:t,a=e.fontSize,o=void 0===a?24:a,c=e.flex,l=void 0===c?1:c,i=e.margin,u=void 0===i?10:i,s={transform:"translateY(-".concat(n,")}px"),fontSize:"".concat(o,"px"),flex:"".concat(l),margin:"".concat(u,"px")};return r.a.createElement("span",{className:"nav-menu-title",style:s}," ","REACT PROJECT")});function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S=r.a.createElement("path",{d:"M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157         c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065         c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671         c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638         l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955         C511.56,208.649,513.033,202.688,511.267,197.258z"}),z=function(e){var t=e.svgRef,n=e.title,a=C(e,["svgRef","title"]);return r.a.createElement("svg",w({viewBox:"0 0 512.00002 512",ref:t},a),n?r.a.createElement("title",null,n):null,S)},L=r.a.forwardRef((function(e,t){return r.a.createElement(z,w({svgRef:t},e))})),M=(n.p,n(47),Object(a.memo)((function(e){var t=e.width,n=void 0===t?40:t,a=e.height,o=void 0===a?40:a,c=e.transform,l=void 0===c?10:c,i=e.fontSize,u=void 0===i?10:i,s={width:"".concat(n,"px"),height:"".concat(o,"px"),transform:"translateY(-".concat(l,"px)}"),fontSize:"".concat(u,"px")};return r.a.createElement(L,{style:s,className:"nav-menu-logo"})}))),N=n(27),T=n.n(N),R=function(e){var t=e.links,n=Object(k.a)(e,["links"]);return r.a.createElement("div",Object.assign({className:T.a.navMenu},n),r.a.createElement(M,null),r.a.createElement(j,null),t.map((function(e,t){return r.a.createElement(O,Object.assign({key:t},e))})))},P=function(){return r.a.createElement(r.a.Fragment,null,"Loading...")},V=[{text:"Home",to:"/",linkStyleClass:"link-1"},{text:"Components",to:"/components",linkStyleClass:"link-2"},{text:"Redux",to:"/redux",linkStyleClass:"link-3"},{text:"Hooks",to:"/hooks",linkStyleClass:"link-4"}],F=r.a.createContext(),W=r.a.createContext(),A=n(8),H=function(){var e=Object(a.useState)("dark"),t=Object(A.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){return document.body.classList.add("_dark"),function(){console.log("destroyed")}}),[]);return{themeContextValue:n,changeThemeContextValue:function(e){r(e),document.body.classList.remove("_dark","_light"),document.body.classList.add("_".concat(e))},setThemeContextValue:r}},B=n(28),I=n.n(B),J=n(29),Y=n.n(J);var D=function(){var e=Object(a.useState)(),t=Object(A.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=I.a.getParser(window.navigator.userAgent).parsedResult,t=e.browser,n=e.os,a=function(){var e,a=document.documentElement,o=a.clientWidth,c=a.clientHeight;r({clientWidth:o,clientHeight:c,browser:"Browser: ".concat(t.name," OS: ").concat(n.name),currentDeviceType:(e=o,e<768?"phone":e>768&&e<992?"laptop":e>992?"desktop":"no information found")})},o=Y()(a,1e3);return window.addEventListener("resize",o),a(),function(){return window.removeEventListener("resize",o)}}),[]),n},K=r.a.lazy((function(){return n.e(4).then(n.bind(null,63))})),X=r.a.lazy((function(){return n.e(3).then(n.bind(null,62))})),$=r.a.lazy((function(){return n.e(5).then(n.bind(null,64))})),q=function(){var e=H(),t=e.themeContextValue,n=e.changeThemeContextValue,o=D();return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.Provider,{value:o},r.a.createElement(F.Provider,{value:{themeContextValue:t,changeThemeContextValue:n}},r.a.createElement(l.b,{history:m},r.a.createElement("div",{className:u.a.app},r.a.createElement(R,{links:V}),r.a.createElement("main",{className:u.a.appMain},r.a.createElement(a.Suspense,{fallback:r.a.createElement(P,null)},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/components",component:K}),r.a.createElement(l.a,{path:"/redux",component:X}),r.a.createElement(l.a,{path:"/hooks",component:$}),r.a.createElement(l.a,{path:"/",component:b}),r.a.createElement(l.a,{path:"*"},r.a.createElement(f,null))))))))))};c.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.e2a9522d.chunk.js.map