(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,c){},,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),l=c(5),a=c.n(l),r=(c(11),c(2)),s=(c(4),c(0));function i(e){return Object(s.jsx)("div",{children:Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode.theme," bg-").concat(e.mode.theme," "),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:e.a})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"#",children:e.b})})]}),Object(s.jsxs)("form",{className:"d-flex",children:[Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{onClick:e.togglerLight,className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio4",value:"option4"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio4",children:"Lightmode"})]}),Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{onClick:e.togglerRed,className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"option1"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio1",children:"Redmode"})]}),Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{onClick:e.togglerBlue,className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"option2"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio2",children:"Bluemode"})]}),Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{onClick:e.togglerGreen,className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio3",value:"option3"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio3",children:"Greenmode"})]})]})]})]})})})}i.defaultProps={title:"enter Title",a:"first tab",b:"second tab",c:"third tab"};c(13),c(14);function d(e){var t=Object(o.useState)(e.a),c=Object(r.a)(t,2),n=c[0],l=c[1],a="";return"white"===e.mode.color?a="":"blue"===e.mode.color?a="#003154":"red"===e.mode.color?a="#690000":"green"===e.mode.color&&(a="#00350c"),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"container my-",children:Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("h3",{children:e.heading}),Object(s.jsx)("textarea",{className:"form-control",id:"mytext",rows:"8",value:n,onChange:function(e){l(e.target.value)}}),Object(s.jsx)("button",{style:{backgroundColor:a,border:"solid 1px white"},className:"btn btn-primary m-2 ",onClick:function(){var t=n.toUpperCase();l(t),e.showAlert("Text formatted to Upper case","success","warning")},children:"UpperCase"}),Object(s.jsx)("button",{style:{backgroundColor:a,border:"solid 1px white"},className:"btn btn-primary m-2",onClick:function(){var t=n.toLowerCase();l(t),e.showAlert("Text formatted to Lower case","success","danger")},children:"LowerCase"}),Object(s.jsx)("button",{style:{backgroundColor:a,border:"solid 1px white"},className:"btn btn-primary m-2",onClick:function(){document.getElementById("mytext").select(),document.execCommand("copy"),e.showAlert("Text Copied to Clipboard","success","success")},children:"CopyText"}),Object(s.jsx)("button",{style:{backgroundColor:a,border:"solid 1px white"},className:"btn btn-primary m-2",onClick:function(){l(""),e.showAlert("Text Cleared","success","warning")},children:"ClearText"}),Object(s.jsx)("button",{style:{backgroundColor:a,border:"solid 1px white"},className:"btn btn-primary m-2",onClick:function(){var t=n.replace(/  +/g," ");l(t),e.showAlert("extra spaces removed","success","success")},children:"clear Extra space"})]})}),Object(s.jsx)("div",{className:"container outer my-3",children:Object(s.jsxs)("div",{className:"inner1",children:[Object(s.jsx)("h2",{style:{color:"dark"===e.mode.theme?"yellow":"black"},children:"Your Text Summary"}),Object(s.jsxs)("p",{children:[n.split(" ").length-1," words and ",n.length," characters"]}),Object(s.jsxs)("p",{children:["read time - ",.008*n.split(" ").length]}),Object(s.jsx)("h3",{style:{color:"dark"===e.mode.theme?"yellow":"black"},children:"Preview"}),Object(s.jsx)("p",{children:n.length>0?n:"enter some text to preview"})]})})]})}function b(e){return e.alert&&Object(s.jsx)("div",{className:"container alertUpper",children:Object(s.jsxs)("div",{className:"alert alert-".concat(e.alert.alertColor,' " role="alert  fade show fixed-top alertIMP'),children:[Object(s.jsx)("strong",{children:e.alert.type.charAt(0).toUpperCase()+e.alert.type.slice("1")})," ",e.alert.msg]})})}d.defaultProps={heading:"enter you text",a:"hello world"};var m=function(){var e=Object(o.useState)({theme:"light",color:"white"}),t=Object(r.a)(e,2),c=t[0],n=t[1],l=Object(o.useState)(null),a=Object(r.a)(l,2),m=a[0],h=a[1],u=function(e,t,c){h({msg:e,type:t,alertColor:c}),setTimeout((function(){h(null)}),1500)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{title:"TextUtils",a:"About",b:"Text",c:"FollowUs",mode:c,togglerLight:function(){"white"!==c.color&&(n({theme:"light",color:"white"}),document.body.style.backgroundColor="white",document.body.style.color="black",u("Light mode enabled","success","success"))},togglerBlue:function(){"blue"!==c.color&&(n({theme:"dark",color:"blue"}),document.body.style.backgroundColor="#003154",document.body.style.color="white",u("Blue mode enabled","success","success"))},togglerRed:function(){"red"!==c.color&&(n({theme:"dark",color:"red"}),document.body.style.backgroundColor="#690000",document.body.style.color="white",u("Red mode enabled","success","success"))},togglerGreen:function(){"green"!==c.color&&(n({theme:"dark",color:"green"}),document.body.style.backgroundColor="#00350c",document.body.style.color="white",u("Green mode enabled","success","success"))},showAlert:u}),Object(s.jsx)(b,{alert:m}),Object(s.jsx)(d,{heading:"enter your text to analyze",a:"",mode:c,showAlert:u})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,o=t.getFID,n=t.getFCP,l=t.getLCP,a=t.getTTFB;c(e),o(e),n(e),l(e),a(e)}))};a.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),h()}],[[15,1,2]]]);
//# sourceMappingURL=main.1e682b18.chunk.js.map