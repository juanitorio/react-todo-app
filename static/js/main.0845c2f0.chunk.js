(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{24:function(e,t,n){e.exports=n(37)},29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(21),c=n.n(r),i=(n(29),n(18)),s=n(5),l=n.n(s),u=n(14),p=n(6),d=n(7),f=n(8),m=n(9),h=n(13),v=n(10),b=n(39);function g(){return o.a.createElement("header",null,o.a.createElement("h3",null,"Todo List"),o.a.createElement("p",{className:"nav"},o.a.createElement(h.b,{style:k,to:"/"},"Home")," ","|"," ",o.a.createElement(h.b,{style:k,to:"/about"},"About")))}var k={textDecoration:"none",color:"#fff"},w=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.task,a=e.completed;return o.a.createElement("li",null,o.a.createElement("label",{style:{textDecoration:a?"line-through":"none"}},o.a.createElement("input",{type:"checkbox",onChange:this.props.markCompleted.bind(this,t),checked:a})," ",n),o.a.createElement("button",{className:"btn-delete",onClick:this.props.deleteTodo.bind(this,t)},"X"))}}]),n}(a.Component),y=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("ul",{className:"todo-list"},this.props.todos.map((function(t,n){return o.a.createElement(w,{key:n,todo:t,markCompleted:e.props.markCompleted,deleteTodo:e.props.deleteTodo})})))}}]),n}(a.Component),E=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.onValueChange=function(t){var n=t.target.value;e.setState({value:n})},e.formSubmit=function(t){t.preventDefault(),""!==e.state.value&&(e.props.formSubmit(e.state.value),e.setState({value:""}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.input.focus()}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:this.formSubmit},o.a.createElement("input",{ref:function(t){return e.input=t},type:"text",placeholder:"Add Todo...",value:this.state.value,onChange:this.onValueChange}),o.a.createElement("input",{type:"submit",value:"Submit",hidden:!0}))}}]),n}(a.Component);function j(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"This is the about page of the react-todo app. This is just a test app."))}n(36);var O=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:Object(b.a)(),task:"Learn JavaScript",completed:!1},{id:Object(b.a)(),task:"Learn ES6+",completed:!1},{id:Object(b.a)(),task:"Learn React",completed:!1}]},e.markCompleted=function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({todos:e.state.todos.map((function(e){return e.id===n&&(e.completed=!e.completed),e}))});case 2:e.saveToLocalStorage();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteTodo=function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({todos:Object(i.a)(e.state.todos.filter((function(e){return e.id!==n})))});case 2:e.saveToLocalStorage();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.formSubmit=function(){var t=Object(u.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:Object(b.a)(),task:n,completed:!1},t.next=3,e.setState({todos:[].concat(Object(i.a)(e.state.todos),[a])});case 3:e.saveToLocalStorage();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.saveToLocalStorage=function(){localStorage.setItem("todos",JSON.stringify(e.state.todos))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=JSON.parse(localStorage.getItem("todos")))){e.next=4;break}return e.next=4,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.a.createElement(h.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-header"},o.a.createElement(g,null),o.a.createElement(v.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{formSubmit:e.formSubmit}),o.a.createElement(y,{todos:e.state.todos,markCompleted:e.markCompleted,deleteTodo:e.deleteTodo}))}}),o.a.createElement(v.a,{path:"/about",component:j}))))}}]),n}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-todo-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-todo-app","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.0845c2f0.chunk.js.map