(this["webpackJsonpsocial-media-app"]=this["webpackJsonpsocial-media-app"]||[]).push([[10],{133:function(e,t,n){},134:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(49),c=n(1),s=n(0),i=n(4),a=n(50),o=n.n(a),u=n(66),l=n(65),d=n(15),j=n(11),b=n(12),f=n(53);n(133);function O(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),i=n[0],a=n[1],O=Object(j.c)((function(e){return e.user.userId})),h=Object(j.c)((function(e){return e.user.avatar})),m=Object(d.d)(),x=Object(c.jsxs)("div",{children:[Object(c.jsx)(b.b,{to:"/edit",children:Object(c.jsx)(l.a,{icon:u.b})}),Object(c.jsx)("br",{}),Object(c.jsx)(l.a,{icon:u.c,color:"red"})]});return Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)(f.a,{width:50,height:50,url:"/uploads/".concat(h)}),Object(c.jsxs)("div",{className:"pl-2 pr-2",children:[Object(c.jsx)("span",{children:e.name}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:e.gmail})]})]}),Object(c.jsx)("div",{children:1===e.friend?Object(c.jsx)("button",{className:"btn-follow",onClick:function(){return function(){a(!i);var t=e.id;o.a.post("/user/unfollow",{currentUserId:O,friendUserId:t}).then((function(e){"success"===e.data.status&&m.show("Unfollowed")}))}()},children:!0===i?"UNFOLLOW":"FOLLOW"}):x})]})}n(134);var h=Object(s.lazy)((function(){return Promise.all([n.e(2),n.e(5),n.e(9)]).then(n.bind(null,191))}));function m(){Object(j.c)((function(e){return e.user.name})),Object(j.c)((function(e){return e.user.email}));var e=Object(j.c)((function(e){return e.user.userId})),t=Object(s.useState)(""),n=Object(r.a)(t,2),a=n[0],u=n[1],l=Object(s.useState)(""),d=Object(r.a)(l,2),b=d[0],f=d[1],m=Object(i.g)().id,x=Object(s.useState)([]),p=Object(r.a)(x,2),v=p[0],g=p[1];return Object(s.useEffect)((function(){o.a.get("/post/getlistpostuser/"+m).then((function(e){g(e.data.listPost)})).catch((function(e){console.log(e)})),o.a.get("/user/getinfouser/"+m).then((function(e){u(e.data.user[0].name),f(e.data.user[0].email)})).catch((function(e){console.log(e)}))}),[m]),Object(c.jsxs)("div",{className:"shadow w-50 profile border p-3",children:[Object(c.jsx)("h3",{className:"text-center",children:"Profile"}),m===e?Object(c.jsx)(O,{friend:0,name:a,gmail:b}):Object(c.jsx)(O,{friend:1,name:a,gmail:b,id:m}),Object(c.jsx)("hr",{}),Object(c.jsx)(s.Suspense,{fallback:Object(c.jsx)("div",{className:"loading",children:Object(c.jsx)("div",{className:"spinner-border text-danger",role:"status",children:Object(c.jsx)("span",{className:"sr-only text-center",children:"Loading..."})})}),children:m===e?Object(c.jsx)(h,{listPost:v,friend:0,idUser:m}):Object(c.jsx)(h,{listPost:v,friend:1,idUser:m})})]})}},49:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(o){c=!0,s=o}finally{try{r||null==a.return||a.return()}finally{if(c)throw s}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return c}))},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1);n(0),n(61),n.p;function c(e){return Object(r.jsx)("div",{className:"ava",children:Object(r.jsx)("img",{src:e.url,width:e.width,height:e.height})})}},61:function(e,t,n){}}]);
//# sourceMappingURL=10.34034389.chunk.js.map