(this.webpackJsonptypescript=this.webpackJsonptypescript||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(11),r=n.n(l),o=(n(21),n(4)),i=n(3),u=(n(22),function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper pink darken-2"},c.a.createElement("a",{href:"/",className:"brand-logo"},"React + typescript"),c.a.createElement("ul",{className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/about"},"\u041e \u043d\u0430\u0441")))))}),m=n(15),s=n(14),p=(n(28),function(e){var t=Object(a.useRef)(null);return c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{ref:t,type:"text",id:"title",placeholder:"\u0412\u0432\u0435\u0434\u0438 \u043d\u043e\u0432\u044b\u0439 \u0442\u0430\u0441\u043a",onKeyPress:function(n){"Enter"===n.key&&(e.onAdd(t.current.value),t.current.value="")}}),c.a.createElement("label",{htmlFor:"title",className:"active"},"Add new task"))}),d=(n(29),function(e){var t=e.todos,n=e.onRemove,a=e.onToggle;if(0===t.length)return c.a.createElement("p",{className:"center"},"There is no tasks");var l=function(e){return function(t){t.preventDefault(),n(e)}};return c.a.createElement("ul",null,t.map((function(e){var t,n=["todo"];return e.completed&&n.push("completed"),c.a.createElement("li",{className:n.join(" "),key:e.id},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:(t=e.id,function(){a(t)})}),c.a.createElement("span",null,e.title),c.a.createElement("i",{className:"material-icons red-text",onClick:l(e.id)},"delete")))})))}),f=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");l(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{onAdd:function(e){var t={title:e,id:Date.now(),completed:!1};l((function(e){return[t].concat(Object(m.a)(e))}))}}),c.a.createElement(d,{todos:n,onToggle:function(e){l((function(t){return t.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}))},onRemove:function(e){confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442?")&&l((function(t){return t.filter((function(t){return t.id!==e}))}))}}))},E=function(){var e=Object(i.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque velit? Repellat, animi molestiae vitae molestias in totam libero corrupti."),c.a.createElement("button",{className:"btn",onClick:function(){return e.push("/")}},"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0434\u0435\u043b"))},v=function(){return c.a.createElement(o.a,null,c.a.createElement(u,null),c.a.createElement("div",{className:"container"},c.a.createElement(i.c,null,c.a.createElement(i.a,{component:f,path:"/",exact:!0}),c.a.createElement(i.a,{component:E,path:"/about"}))))};r.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.439abf16.chunk.js.map