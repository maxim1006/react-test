(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[5],{64:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),l=n(8),c=Object(a.memo)((function(){var e=Object(a.useRef)(null);Object(a.useRef)({});Object(a.useEffect)((function(){console.log("useEffect ref ",e.current)}),[]),Object(a.useLayoutEffect)((function(){console.log("I'll be rendered before useEffect")}),[]);var t=Object(a.useState)(),n=Object(l.a)(t,2),c=n[0],r=n[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{ref:e,onClick:function(){return console.log(e)}},"useRef"),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(c)}},u.a.createElement("label",null,"Number:",u.a.createElement("input",{name:"name",type:"text",value:c,onChange:function(e){r(e.target.value)}})),u.a.createElement("input",{type:"submit",value:"Submit"})),u.a.createElement("h3",null,"The squared number is "))}));t.default=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Use state"),u.a.createElement(c,null))}}}]);
//# sourceMappingURL=5.425c83ad.chunk.js.map