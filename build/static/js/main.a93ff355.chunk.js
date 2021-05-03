(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{56:function(e,t,a){e.exports=a(86)},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=a(7),u=a(5),s=a.n(u),i=a(8),m=a(12),p=a(6),d=a(16),f=a(55),b=a(26),E=a(17),v=a.n(E),g="https://blog-app-list.herokuapp.com/api/blogs",h=null,O={setToken:function(e){h="bearer ".concat(e)},getAll:function(){return v.a.get(g).then((function(e){return e.data}))},create:function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:h}},e.next=3,v.a.post(g,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),incrementLikes:function(){var e=Object(i.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put("".concat(g,"/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),deleteBlog:function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("".concat(g,"/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e.map((function(e){return e.id===t.data.id?Object(b.a)(Object(b.a)({},e),{},{likes:e.likes+1}):e}));case"NEW_BLOG":return[].concat(Object(f.a)(e),[t.data]);case"DELETE_BLOG":case"INIT_BLOGS":return t.data;default:return e}},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var n=Object(i.a)(s.a.mark((function n(r){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(e),setTimeout((function(){r(j())}),1e3*t),r({type:"SET",message:e,time:t,error:a});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},j=function(){return{type:"EMPTY"}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":return{message:t.message,error:t.error};case"EMPTY":return null;default:return e}},x=a(88),S=function(e){var t=e.blog,a=Object(n.useState)(!1),c=Object(m.a)(a,2),l=(c[0],c[1],Object(o.b)());if(!t)return null;return r.a.createElement("div",{className:"blog"},r.a.createElement("div",{className:"authorAndTitle"},r.a.createElement("h2",null,t.title)),r.a.createElement("div",{className:"likesAndUrl"},r.a.createElement("a",{href:t.url,target:"_blank"},t.url),r.a.createElement("p",null,r.a.createElement("span",{className:"likes-blog",value:t.likes},t.likes," likes"),r.a.createElement(x.a,{style:{margin:"6px"},onClick:function(){var e;l((e=t,function(){var t=Object(i.a)(s.a.mark((function t(a){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(Object(b.a)({},e),{},{likes:e.likes+1}),t.next=3,O.incrementLikes(e.id,n);case 3:r=t.sent,console.log("lets go boiiis",r),a({type:"INCREMENT",data:e});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},className:"likeButton"},"like")),r.a.createElement("p",null,"added by ",t.author),t.user.username===t.user.username&&t.user.name===t.user.name?r.a.createElement(x.a,{onClick:function(){l(function(e){if(window.confirm("Remove blog ".concat(e.title," by ").concat(e.author)))try{return function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.deleteBlog(e.id);case 2:return t.sent,t.next=5,O.getAll();case 5:n=t.sent,console.log("DELETED: ",n),a({type:"DELETE_BLOG",data:n});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){console.log(t)}}(t)),l(k("'".concat(t.title,"' by ").concat(t.author," has been removed"),5,!1))}},"remove"):""))},L=a(93),C=function(){Object(o.b)();var e=Object(o.c)((function(e){return e.blogs}));return console.log(e),r.a.createElement("div",null,r.a.createElement(L.a,null,e.map((function(e){return r.a.createElement("div",null,r.a.createElement(L.a.Item,{className:"listGroupItem"},r.a.createElement(d.b,{to:"/blogs/".concat(e.id)},e.title)))}))))},N=function(e){var t=e.user;return t?r.a.createElement("div",null,r.a.createElement("h2",null,t.name),r.a.createElement("h1",null,"added blogs"),r.a.createElement("ul",null,t.blogs.map((function(e,t){return r.a.createElement("li",{key:t},e.title)})))):null},T=function(){var e=Object(o.c)((function(e){return e.users}));return console.log(e),r.a.createElement("div",null,r.a.createElement(L.a,null,e.map((function(e){return r.a.createElement("div",null,r.a.createElement(L.a.Item,{className:"listGroupItem"},r.a.createElement(d.b,{to:"/users/".concat(e.id)},e.name),", blogs created: ",e.blogs.length))}))))},I=function(){var e=Object(o.c)((function(e){return e.notifications}));return null===e?null:!1===e.error?r.a.createElement("div",{className:"success"},e.message):r.a.createElement("div",{className:"error"},e.message)},B=function(e){var t=e.handleSubmit,a=e.handleUsernameChange,n=e.handlePasswordChange,c=e.username,l=e.password;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"username",r.a.createElement("input",{id:"username",value:c,onChange:a})),r.a.createElement("div",null,"password",r.a.createElement("input",{id:"password",type:"password",value:l,onChange:n})),r.a.createElement(x.a,{id:"login-button",type:"submit"},"login")))},G=a(91),A=a(89),U=a(50),_=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(""),p=Object(m.a)(u,2),d=p[0],f=p[1],b=Object(n.useState)(""),E=Object(m.a)(b,2),v=E[0],g=E[1],h=Object(o.b)();return r.a.createElement("div",null,r.a.createElement("h2",null,"Create a new blog"),r.a.createElement(G.a,null,r.a.createElement(G.a.Group,{as:A.a,controlId:"formHorizontalTitle"},r.a.createElement(G.a.Label,{column:!0,sm:1},"Title"),r.a.createElement(U.a,{sm:5},r.a.createElement(G.a.Control,{type:"email",placeholder:"Email",onChange:function(e){var t=e.target;return l(t.value)}}))),r.a.createElement(G.a.Group,{as:A.a,controlId:"formHorizontalAuthor"},r.a.createElement(G.a.Label,{column:!0,sm:1},"Author"),r.a.createElement(U.a,{sm:5},r.a.createElement(G.a.Control,{type:"password",placeholder:"Password",onChange:function(e){var t=e.target;return f(t.value)}}))),r.a.createElement(G.a.Group,{as:A.a,controlId:"formHorizontalUrl"},r.a.createElement(G.a.Label,{column:!0,sm:1},"Url"),r.a.createElement(U.a,{sm:5},r.a.createElement(G.a.Control,{type:"password",placeholder:"Password",onChange:function(e){var t=e.target;return g(t.value)}}))),r.a.createElement(G.a.Group,{as:A.a},r.a.createElement(U.a,{sm:5},r.a.createElement(x.a,{type:"submit",onClick:function(e){e.preventDefault();var t,a={title:c,author:d,url:v};l(""),f(""),g(""),h((t=a,function(){var e=Object(i.a)(s.a.mark((function e(a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.create(t);case 2:n=e.sent,a({type:"NEW_BLOG",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),h(k("a new blog ".concat(c," by ").concat(d," added"),5,!1))}},e.buttonLabel)))))},D=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],l=a[1],o={display:c?"none":""},u={display:c?"":"none"},s=function(){l(!c)};return r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement(x.a,{onClick:s},e.buttonLabel)),r.a.createElement("div",{style:u},e.children,r.a.createElement(x.a,{onClick:s},"cancel")))},P={login:function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("https://blog-app-list.herokuapp.com/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){return v.a.get("https://blog-app-list.herokuapp.com/api/users").then((function(e){return e.data}))},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;default:return e}},z=a(90),J=a(92),W=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(m.a)(l,2),f=u[0],b=u[1],E=Object(n.useState)(null),v=Object(m.a)(E,2),g=v[0],h=v[1],w=Object(o.b)();Object(n.useEffect)((function(){w(function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAll();case 2:a=e.sent,t({type:"INIT_BLOGS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w(function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:a=e.sent,t({type:"INIT_USERS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[w]);var j=Object(o.c)((function(e){return e.blogs})),y=Object(o.c)((function(e){return e.users}));Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);h(t),O.setToken(t.token)}}),[]);var L=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,P.login({username:a,password:f});case 4:n=e.sent,window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(n)),O.setToken(n.token),h(n),w(k("".concat(n.name," has logged in"),5,!1)),c(""),b(""),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),w(k("Wrong credentials",5,!0));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();j.sort((function(e,t){return e.likes>t.likes?-1:1}));var G=Object(p.f)("/users/:id"),A=G?y.find((function(e){return e.id===G.params.id})):null,U=Object(p.f)("/blogs/:id"),M=U?j.find((function(e){return e.id===U.params.id})):null,W={padding:5};return r.a.createElement("div",null,r.a.createElement(I,null),null===g?r.a.createElement("h2",null,"Blog App")&&r.a.createElement(D,{buttonLabel:"Login"},r.a.createElement(B,{username:a,password:f,handleUsernameChange:function(e){var t=e.target;return c(t.value)},handlePasswordChange:function(e){var t=e.target;return b(t.value)},handleSubmit:L})):r.a.createElement("div",null,r.a.createElement(z.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(z.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(z.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(J.a,{className:"mr-auto"},r.a.createElement(J.a.Link,{href:"#",as:"span"},r.a.createElement(d.b,{style:W,to:"/blogs"},"Blogs")),r.a.createElement(J.a.Link,{href:"#",as:"span"},r.a.createElement(d.b,{style:W,to:"/users"},"Users")),r.a.createElement(J.a.Link,{href:"#",as:"span"},r.a.createElement("span",null,g.name," logged-in ",r.a.createElement(x.a,{onClick:function(){h(null),window.localStorage.clear(),window.location.reload(!1)},className:"navLink"},"logout")," "))))),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/users/:id"},r.a.createElement(N,{user:A})),r.a.createElement(p.a,{path:"/users"},r.a.createElement("h2",null,"Users"),r.a.createElement(T,null)),r.a.createElement(p.a,{path:"/blogs/:id"},r.a.createElement(S,{blog:M})),r.a.createElement(p.a,{path:"/"},r.a.createElement("h2",null,"Blogs"),r.a.createElement(D,{buttonLabel:"Create"},r.a.createElement(_,{buttonLabel:"Create"})),null!==g&&r.a.createElement(C,null)))))},H=a(25),Y=a(53),q=a(54),F=Object(H.combineReducers)({blogs:w,notifications:y,users:M}),K=Object(H.createStore)(F,Object(q.composeWithDevTools)(Object(H.applyMiddleware)(Y.a)));a(85);l.a.render(r.a.createElement(d.a,null,r.a.createElement(o.a,{store:K},r.a.createElement(W,null))),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.a93ff355.chunk.js.map