(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),u=n(25),o=n.n(u),c=n(9),l=n(6),i=n(7),s=n(10),m=n(8),p=n(11),d=(n(66),n(15)),f=n.n(d),h=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={todo:""},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;console.log(this.props);var e=this.props.todo.todoList.map(function(t,e){return r.a.createElement("li",{key:e},t)});return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(e){return t.setState({todo:e.target.value})}}),r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){return t.props.addTodo(t.state.todo)}},"\u8ffd\u52a0"),r.a.createElement("br",null),r.a.createElement("ul",null,e))}}]),e}(r.a.Component),b=Object(c.b)(function(t){return{todo:t.todo}},function(t){return{addTodo:function(e){return t(function(t){return{type:"ADD_TODO",payload:{todo:t}}}(e))}}})(h),v=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).state={num1:0,num2:0},n.state={},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"handleSubmit",value:function(){return this.props.add(this.state.num1,this.state.num2),this.props.pageSet()}},{key:"handleSubmitJava",value:function(t){window.alert("submit")}},{key:"doChange",value:function(t){var e=t.target.value.replace(/[^0-9]/g,"");this.setState({num1:e})}},{key:"render",value:function(){var t=this;console.log(this.props);return r.a.createElement("div",null,r.a.createElement("form",{method:"post",action:"/index2",onSubmit:function(e){return t.handleSubmitJava(e)}},r.a.createElement("input",{type:"text",name:"numInput1",value:this.state.num1,onChange:function(e){return t.doChange(e)}}),r.a.createElement("input",{type:"text",name:"name",onChange:function(e){return t.setState({num2:e.target.value})}}),r.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary",onClick:function(){return t.handleSubmit()}},"\u8a08\u7b97\u7d50\u679c"),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"java\u901a\u4fe1"}),r.a.createElement("br",null)))}}]),e}(r.a.Component),g=Object(c.b)(function(t){return{num1:t.cal.num1,num2:t.cal.num2}},function(t){return{add:function(e,n){return t(function(t,e){return{type:"ADD",payload:{num1:t,num2:e}}}(e,n))}}})(v),y=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).state={total:""},n.state={},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"handleSubmit",value:function(){return this.props.pageSet()}},{key:"render",value:function(){var t=this,e=this.props.total;return r.a.createElement("div",null,"\u8a08\u7b97\u7d50\u679c",r.a.createElement("ul",null,e),r.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary",onClick:function(){return t.handleSubmit()}},"\u623b\u308b"),r.a.createElement("br",null))}}]),e}(r.a.Component),O=Object(c.b)(function(t){return{total:t.cal.total}},function(t){return{}})(y),E=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).state={page:1},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"setNextPage",value:function(){this.setState({page:2})}},{key:"setPrePage",value:function(){this.setState({page:1})}},{key:"render",value:function(){var t=this,e=null,n=null;switch(this.state.page){case 1:e=function(){return r.a.createElement(g,{pageSet:function(){t.setNextPage()}})},n=function(){return r.a.createElement(b,null)};break;case 2:e=function(){return r.a.createElement(O,{pageSet:function(){t.setPrePage()}})},n=function(){return""};break;default:e=function(){return r.a.createElement(g,{pageSet:function(){t.setNextPage()}})},n=function(){return r.a.createElement(b,null)}}return r.a.createElement("div",{className:"App"},r.a.createElement(e,null)," ",r.a.createElement("br",null),r.a.createElement(n,null)," ")}}]),e}(a.Component),j=n(16),k=n(56),S=n.n(k),w={todoList:[]},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":var n=e.payload.todo,a=Object.assign({},t);return a.todoList.push(n),a;default:return t}},D={total:0},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD":var n=parseInt(e.payload.num1),a=parseInt(e.payload.num2),r=Object.assign({},t);return r.total=n+a,console.log(r.total),r;default:return t}};var P=Object(j.d)(Object(j.c)({todo:C,cal:x}),Object(j.a)(S.a));o.a.render(r.a.createElement(c.a,{store:P},r.a.createElement(E,null)),document.getElementById("root"))},57:function(t,e,n){t.exports=n(145)},66:function(t,e,n){}},[[57,2,1]]]);
//# sourceMappingURL=main.9764638f.chunk.js.map