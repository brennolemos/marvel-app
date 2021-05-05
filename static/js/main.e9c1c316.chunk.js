(this["webpackJsonpmarvel-app"]=this["webpackJsonpmarvel-app"]||[]).push([[0],{88:function(n,e,t){"use strict";t.r(e);var r,a,i,c,o,s,d,l,b,u,m,p,h,j,x,f,g,O,v=t(0),w=t.n(v),y=t(37),k=t.n(y),S=t(44),E=t(9),z=t(11),L=t(4),C=t.p+"static/media/marvel_logo.597ccdec.svg",D=t(2),N=t(3),B=N.b.header(r||(r=Object(D.a)(["\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.5rem;\n  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);\n  position: relative;\n\n  a {\n    transition: all 0.3s ease;\n\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n"]))),I=t(1),M=function(){return Object(I.jsx)(z.b,{exact:!0,to:"/",children:Object(I.jsx)(B,{children:Object(I.jsx)("img",{src:C,alt:"Marvel"})})})},q=t.p+"static/media/search.af8226e5.svg",A=N.b.form(a||(a=Object(D.a)(["\n  max-width: 600px;\n  margin: 0 auto;\n  position: relative;\n  padding: 0 0.5rem;\n"]))),H=N.b.input(i||(i=Object(D.a)(["\n  border-radius: 0.25rem;\n  border: 1px solid var(--white);\n  padding: 1rem;\n  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);\n  transition: all 0.3s ease;\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  width: 100%;\n  border: none;\n\n  &:hover,\n  &:focus {\n    outline: none;\n    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);\n    transform: scale(1.1);\n  }\n"]))),J=N.b.button(c||(c=Object(D.a)(["\n  width: 4rem;\n  height: 4rem;\n  background: url(",") no-repeat center center;\n  text-indent: -150px;\n  border: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n  outline: none;\n  box-shadow: none;\n"])),q),T=function(n){var e=n.name,t=n.setName;return Object(I.jsxs)(A,{onSubmit:function(n){n.preventDefault()},children:[Object(I.jsx)(H,{name:"search",id:"search",type:"text",placeholder:"Input search text...",required:!0,value:e,onChange:function(n){var e=n.target;return t(e.value)}}),Object(I.jsx)(J,{type:"submit"})]})},_=t(12),F=t.n(_),G=t(14),R=N.b.li(o||(o=Object(D.a)(["\n  background-color: var(--white);\n  border-radius: 0.25rem;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);\n  border: 1px solid transparent;\n  transition: all 0.3s ease;\n  position: relative;\n\n  &:hover {\n    margin-top: -0.5rem;\n    margin-bottom: 0.5rem;\n  }\n"]))),U=N.b.p(s||(s=Object(D.a)(["\n  padding: 1rem;\n"]))),Y=function(n){var e=n.character;return Object(I.jsx)(z.b,{to:"".concat(e.id),children:Object(I.jsxs)(R,{children:[Object(I.jsx)("img",{src:"".concat(e.thumbnail.path,"/standard_fantastic.").concat(e.thumbnail.extension),alt:""}),Object(I.jsx)(U,{children:e.name})]})})},K=t(41),P=t.n(K),Q=t(42),V=t.n(Q),W=t(43),X="https://gateway.marvel.com:443/v1/public",Z="d72a5001d3107c1be54e08640d9362c8",$="388bb8cc19ee72f724d05434acd85b9afcc9992a",nn=function(){var n=Object(G.a)(F.a.mark((function n(){var e,t,r,a,i,c,o=arguments;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:0,r=(new Date).getTime(),a=V()("".concat(r).concat($).concat(Z)),i="".concat(X,"/").concat(e),c=Object(W.stringifyUrl)({url:i,query:{ts:r,apikey:Z,hash:a,offset:t}}),n.abrupt("return",P.a.get(c));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),en=N.b.ul(d||(d=Object(D.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  margin-top: 1rem;\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (max-width: 576px) {\n    grid-template-columns: 1fr;\n  }\n"]))),tn=N.b.div(l||(l=Object(D.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.2);\n"]))),rn=N.b.div(b||(b=Object(D.a)(["\n  margin: auto;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  border: 10px solid rgba(255, 255, 255, 0.5);\n  border-right-color: transparent;\n  animation: loading 0.8s infinite;\n\n  @keyframes loading {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]))),an=function(){return Object(I.jsx)(tn,{children:Object(I.jsx)(rn,{})})},cn=N.b.div(u||(u=Object(D.a)(["\n  color: var(--red);\n  background-color: var(--pink);\n  padding: 0.75rem 1.25rem;\n  border-radius: 0.25rem;\n  max-width: 350px;\n  margin: 0 auto;\n"]))),on=function(n){var e=n.error;return Object(I.jsxs)(cn,{children:["Error: ",e]})},sn=function(n){var e=n.name,t=n.offset,r=w.a.useState(null),a=Object(E.a)(r,2),i=a[0],c=a[1],o=w.a.useState(null),s=Object(E.a)(o,2),d=s[0],l=s[1],b=w.a.useState(!1),u=Object(E.a)(b,2),m=u[0],p=u[1],h=w.a.useState(null),j=Object(E.a)(h,2),x=j[0],f=j[1],g=function(){var n=Object(G.a)(F.a.mark((function n(){var e,r;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),f(null),n.next=5,nn("characters",t);case 5:e=n.sent,r=e.data,l(r.data.results),c(r.data.results),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),f(n.t0.message);case 14:return n.prev=14,p(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})));return function(){return n.apply(this,arguments)}}();return w.a.useEffect((function(){g()}),[]),w.a.useEffect((function(){var n=void 0!==(null===i||void 0===i?void 0:i.filter((function(n){return n.name.includes(e)})))?null===i||void 0===i?void 0:i.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):i;l(n)}),[e]),m?Object(I.jsx)(an,{}):x?Object(I.jsx)(on,{error:x}):null===d?null:Object(I.jsx)(en,{children:d.map((function(n){return Object(I.jsx)(Y,{character:n},n.id)}))})},dn=Object(N.a)(m||(m=Object(D.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  :root {\n    --white: #fff;\n    --gray-fa: #fafafa;\n    --gray-e: #eee;\n    --gray-20: #202020;\n\n    --red: #721c24;\n    --marvel-red: #ED1D24;\n    --pink: #f8d7da;\n  }\n\n  ul, li {\n    margin: 0;\n    padding: 0;\n  } \n\n  li {\n    list-style: none;\n  }\n\n  img {\n    display: block;\n    max-width: 100%;\n  }\n\n\n  *, button, input {\n    border: 0;\n    outline: 0;\n\n    font-family: 'Oxygen', sans-serif;\n    color: var(--gray-20);\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  .App {\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n    background-color: var(--gray-fa);\n  }\n\n  .container {\n    padding: 2rem 1.5rem;\n    flex: 1 1;\n    max-width: 75rem;\n    margin: 0 auto;\n  }\n\n  @media (max-width: 768px) {\n    html {\n      font-size: 93.75%;\n    }\n  }\n\n  @media (max-width: 576px) {\n    html {\n      font-size: 87.5%;\n    }\n  }\n"]))),ln=N.b.footer(p||(p=Object(D.a)(["\n  background-color: var(--gray-20);\n  text-align: center;\n  padding: 1rem;\n  color: var(--white);\n"]))),bn=function(){return Object(I.jsx)(ln,{children:"Made with \u2764\ufe0f and React by Breno Lemos"})},un=N.b.section(h||(h=Object(D.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  border-radius: 0.25rem;\n  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);\n  overflow: hidden;\n\n  @media (max-width: 576px) {\n    grid-template-columns: 1fr;\n  }\n"]))),mn=N.b.div(j||(j=Object(D.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n\n  h1 {\n    font-size: 2rem;\n    margin-bottom: 1.5rem;\n  }\n\n  p {\n    line-height: 1.4;\n    max-width: 25rem;\n    text-align: center;\n  }\n"]))),pn=N.b.div(x||(x=Object(D.a)(["\n  background-size: cover;\n  background-position: center center;\n  border-right: 1px solid var(--gray-fa);\n\n  &::after {\n    content: '';\n    display: block;\n    height: 0;\n    padding-bottom: 75%;\n  }\n"]))),hn=N.b.section(f||(f=Object(D.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 2rem;\n  margin-bottom: 2rem;\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (max-width: 576px) {\n    grid-template-columns: 1fr;\n  }\n"]))),jn=N.b.div(g||(g=Object(D.a)(["\n  padding: 1rem;\n  border-radius: 0.25rem;\n  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);\n\n  h2 {\n    text-align: center;\n  }\n\n  li {\n    border-bottom: 1px solid var(--gray-fa);\n    padding: 1rem 0;\n\n    &:last-child {\n      border: none;\n    }\n  }\n"]))),xn=Object(N.b)(z.b)(O||(O=Object(D.a)(["\n  background-color: var(--marvel-red);\n  color: var(--white);\n  padding: 0.5rem 1rem;\n  border-radius: 0.25rem;\n  transition: all 0.3s ease;\n\n  &:hover {\n    opacity: 0.9;\n  }\n"]))),fn=function(){var n=Object(L.e)().id,e=w.a.useState(null),t=Object(E.a)(e,2),r=t[0],a=t[1],i=w.a.useState(!1),c=Object(E.a)(i,2),o=c[0],s=c[1],d=w.a.useState(null),l=Object(E.a)(d,2),b=l[0],u=l[1];return w.a.useEffect((function(){(function(){var e=Object(G.a)(F.a.mark((function e(){var t,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),u(null),e.next=5,nn("characters/".concat(n));case 5:t=e.sent,r=t.data,a(r.data.results[0]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),u(e.t0.message);case 13:return e.prev=13,s(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}})()()}),[]),o?Object(I.jsx)(an,{}):b?Object(I.jsx)(on,{error:b}):null===r?null:Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(un,{children:[Object(I.jsx)(pn,{style:{backgroundImage:"url('".concat(r.thumbnail.path,".").concat(r.thumbnail.extension,"')")}}),Object(I.jsxs)(mn,{children:[Object(I.jsx)("h1",{children:r.name}),Object(I.jsx)("p",{children:r.description})]})]}),Object(I.jsxs)(hn,{children:[r.comics.items.length>0&&Object(I.jsxs)(jn,{children:[Object(I.jsx)("h2",{children:"Comics"}),Object(I.jsx)("ul",{children:r.comics.items.map((function(n,e){return Object(I.jsx)("li",{children:n.name},e)}))})]}),r.series.items.length>0&&Object(I.jsxs)(jn,{children:[Object(I.jsx)("h2",{children:"Series"}),Object(I.jsx)("ul",{children:r.series.items.map((function(n,e){return Object(I.jsx)("li",{children:n.name},e)}))})]}),r.stories.items.length>0&&Object(I.jsxs)(jn,{children:[Object(I.jsx)("h2",{children:"Stories"}),Object(I.jsx)("ul",{children:r.stories.items.map((function(n,e){return Object(I.jsx)("li",{children:n.name},e)}))})]})]}),Object(I.jsx)(xn,{exact:!0,to:"/",children:"Go Back"})]})},gn=function(){var n=w.a.useState(""),e=Object(E.a)(n,2),t=e[0],r=e[1],a=w.a.useState([0]),i=Object(E.a)(a,2),c=i[0],o=i[1];return w.a.useEffect((function(){var n=!1,e=function(e){window.scrollY>.75*(document.body.offsetHeight-window.innerHeight)&&!n&&(o((function(n){return[].concat(Object(S.a)(n),[20*n.length])})),n=!0,setTimeout((function(){n=!1}),1e3))};return""===t&&(window.addEventListener("wheel",e),window.addEventListener("scroll",e)),function(){window.removeEventListener("wheel",e),window.removeEventListener("scroll",e)}}),[]),Object(I.jsx)(z.a,{basename:"/",children:Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(dn,{}),Object(I.jsx)(M,{}),Object(I.jsxs)("main",{className:"container",children:[Object(I.jsxs)(L.a,{path:"/",exact:!0,children:[Object(I.jsx)(T,{name:t,setName:r}),c.map((function(n){return Object(I.jsx)(sn,{offset:n,name:t},n)}))]}),Object(I.jsx)(L.a,{path:"/:id",component:fn})]}),Object(I.jsx)(bn,{})]})})};k.a.render(Object(I.jsx)(w.a.StrictMode,{children:Object(I.jsx)(gn,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.e9c1c316.chunk.js.map