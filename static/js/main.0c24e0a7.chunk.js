(this["webpackJsonptimer-app"]=this["webpackJsonptimer-app"]||[]).push([[0],{13:function(e,s,c){},14:function(e,s,c){"use strict";c.r(s);var t=c(1),n=c.n(t),a=c(6),r=c.n(a),i=c(7),l=c(2),j=c(0),h=function(e){var s=e.start,c=e.status,t=e.stop,n=e.reset,a=e.resume,r=e.mark;return Object(j.jsxs)("div",{className:"btnWrapper",children:[0===c?Object(j.jsx)("span",{children:Object(j.jsx)("span",{className:"material-icons-round",id:"btnStart",onClick:s,children:"play_arrow"})}):null,1===c?Object(j.jsxs)("div",{className:"btnWrapper",children:[Object(j.jsx)("span",{children:Object(j.jsx)("span",{className:"material-icons-round",id:"btnMark",onClick:r,children:"check"})}),Object(j.jsx)("span",{children:Object(j.jsx)("span",{className:"material-icons-round",id:"btnStop",onClick:t,children:"pause"})})]}):null,2===c?Object(j.jsxs)("div",{className:"btnWrapper",children:[Object(j.jsx)("span",{children:Object(j.jsx)("span",{className:"material-icons-round",id:"btnReset",onClick:n,children:"stop"})}),Object(j.jsx)("span",{children:Object(j.jsx)("span",{className:"material-icons-round",id:"btnResume",onClick:a,children:"play_arrow"})})]}):null]})},o=function(e){return e>=10?e:"0".concat(e)},d=function(e){return 0===e?null:Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{children:[" ",o(e)," "]}),":"]})},b=function(e){var s=e.time,c=e.isMark,t=c?"withMarks":"",n=s.ms,a=s.s,r=s.m,i=s.h;return Object(j.jsxs)("div",{className:"displayWrapper ".concat(t),children:[d(i),Object(j.jsxs)("span",{children:[" ",o(r)," "]}),":",Object(j.jsxs)("span",{children:[" ",o(a)," "]}),".",Object(j.jsxs)("span",{children:[" ",o(n)," "]}),Object(j.jsxs)("div",{className:"textMark",children:[" ",c?"Current time":null," "]})]})},m=(c(13),function(e){var s=e.isMark,c=e.markTime,t=function(e,s,c,t){return e+100*s+6e3*c+36e4*t};return Object(j.jsx)(j.Fragment,{children:!0===s?Object(j.jsx)("div",{className:"markWrapper",children:c.map((function(e,s){var n=e.ms,a=e.s,r=e.m,i=e.h,l=s>0?c[s-1]:e,h=t(n,a,r,i)-t(l.ms,l.s,l.m,l.h);return Object(j.jsxs)("div",{className:"markFlex",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"material-icons-round",id:"marks",children:" done "}),Object(j.jsx)("span",{className:"numOfMark",children:o(s+1)})]}),Object(j.jsx)("div",{children:Object(j.jsxs)("span",{className:"different",children:["+",d(Math.floor(h/36e4)),o(Math.floor(h/6e3)%60),":",o(Math.floor(h/100)%60),".",o(h%100)]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("span",{children:[d(i),o(e.m),":",o(e.s),".",o(e.ms)]})})]},s)}))}):null})});var u=function(e){var s=e.isChecked,c=e.changeTheme;return console.log(s),Object(j.jsx)("div",{className:"checkbox",children:Object(j.jsx)("label",{className:"custom-checkbox ".concat(s?"checked":""),onClick:c,children:Object(j.jsx)("span",{className:"custom-checkbox-button"})})})},O=function(e){var s=e.isChecked,c=e.changeTheme;return Object(j.jsxs)("header",{children:[Object(j.jsxs)("h2",{className:"header",children:["stop",Object(j.jsx)("span",{children:"W"}),"atch"]}),Object(j.jsx)(u,{isChecked:s,changeTheme:c})]})},p=function(){var e=Object(t.useState)({ms:0,s:0,m:0,h:0}),s=Object(l.a)(e,2),c=s[0],n=s[1],a=Object(t.useState)(),r=Object(l.a)(a,2),o=r[0],d=r[1],u=Object(t.useState)(0),p=Object(l.a)(u,2),x=p[0],k=p[1],v=Object(t.useState)(!1),f=Object(l.a)(v,2),N=f[0],g=f[1],M=Object(t.useState)([]),C=Object(l.a)(M,2),S=C[0],w=C[1],T=Object(t.useState)("light"),W=Object(l.a)(T,2),y=W[0],I=W[1],F=Object(t.useState)(!0),J=Object(l.a)(F,2),R=J[0],_=J[1];console.log(R),console.log(y);var B=function(){A(),k(1),d(setInterval(A,10))},E=c.ms,V=c.s,q=c.m,z=c.h,A=function(){return 60===q&&(z++,q=0),60===V&&(q++,V=0),99===E&&(V++,E=-1),E++,n({ms:E,s:V,m:q,h:z})};return Object(j.jsxs)("div",{className:"app ".concat(y),children:[Object(j.jsx)(O,{isChecked:R,changeTheme:function(){I("light"===y?"dark":"light"),_(!R)}}),Object(j.jsx)(b,{time:c,isMark:N}),Object(j.jsx)(m,{isMark:N,markTime:S}),Object(j.jsx)(h,{start:B,status:x,stop:function(){clearInterval(o),k(2)},reset:function(){clearInterval(o),k(0),n({ms:0,s:0,m:0,h:0}),w([]),g(!1)},resume:function(){return B()},mark:function(){g(!0);var e={ms:c.ms,s:c.s,m:c.m,h:c.h};w([].concat(Object(i.a)(S),[e]))}}),Object(j.jsx)("footer",{children:Object(j.jsxs)("span",{children:["app by ",Object(j.jsx)("a",{href:"https://www.linkedin.com/in/vanja-volokha/",children:"Ivan Volokha"})," "]})})]})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0c24e0a7.chunk.js.map