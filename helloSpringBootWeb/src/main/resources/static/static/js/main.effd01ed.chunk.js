(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),i=a.n(l),o=a(20),u=a(17),c=a(18),s=a(21),m=a(19),d=a(22),h=(a(104),a(23)),p=a.n(h),v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={todo:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.todo.todoList.map(function(e,t){return r.a.createElement("li",{key:t},e)});return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({todo:t.target.value})}}),r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){return e.props.addTodo(e.state.todo)}},"\u8ffd\u52a0"),r.a.createElement("br",null),r.a.createElement("ul",null,t))}}]),t}(r.a.Component),b=Object(o.b)(function(e){return{todo:e.todo}},function(e){return{addTodo:function(t){return e(function(e){return{type:"ADD_TODO",payload:{todo:e}}}(t))}}})(v),f=a(24),g=a.n(f),E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={num1:0,num2:0},a.state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(){return this.props.add(this.state.num1,this.state.num2),this.props.pageSet()}},{key:"handleSubmitJava",value:function(e){window.alert("submit")}},{key:"doChange",value:function(e){var t=e.target.value.replace(/[^0-9]/g,"");this.setState({num1:t})}},{key:"render",value:function(){var e=this;console.log(this.props);var t=function(t){return e.doChange(t)};return r.a.createElement("div",null,r.a.createElement("form",{method:"post",action:"/index2",onSubmit:function(t){return e.handleSubmitJava(t)}},r.a.createElement(g.a,{type:"text",name:"numInput1",value:this.state.num1,onChange:t,label:"\u5165\u529b\u5024\uff11",variant:"outlined",margin:"normal"}),r.a.createElement(g.a,{type:"text",name:"name",onChange:function(t){return e.setState({num2:t.target.value})},label:"\u5165\u529b\u5024\uff12",variant:"outlined",margin:"normal"}),r.a.createElement("br",null),r.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary",onClick:function(){return e.handleSubmit()}},"\u8a08\u7b97\u7d50\u679c"),r.a.createElement("br",null),r.a.createElement(g.a,{type:"text",name:"numInput1",value:this.state.num1,onChange:t,label:"id",variant:"outlined",margin:"normal"}),r.a.createElement(g.a,{type:"text",name:"name",onChange:function(t){return e.setState({num2:t.target.value})},label:"name",variant:"outlined",margin:"normal"}),r.a.createElement("br",null),r.a.createElement(p.a,{type:"submit",variant:"contained",color:"secondary"},"java\u901a\u4fe1"),r.a.createElement("br",null)))}}]),t}(r.a.Component),y=Object(o.b)(function(e){return{num1:e.cal.num1,num2:e.cal.num2}},function(e){return{add:function(t,a){return e(function(e,t){return{type:"ADD",payload:{num1:e,num2:t}}}(t,a))}}})(E),j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={num1:0,num2:0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleSubmitJava",value:function(e){window.alert("submit")}},{key:"doChange",value:function(e){var t=e.target.value.replace(/[^0-9]/g,"");this.setState({num1:t})}},{key:"render",value:function(){var e=this;console.log(this.props);return r.a.createElement("div",null,r.a.createElement("form",{method:"post",action:"/index2",onSubmit:function(t){return e.handleSubmitJava(t)}},r.a.createElement(g.a,{type:"text",name:"numInput1",value:this.state.num1,onChange:function(t){return e.doChange(t)},label:"id",variant:"outlined",margin:"normal"}),r.a.createElement(g.a,{type:"text",name:"name",onChange:function(t){return e.setState({num2:t.target.value})},label:"name",variant:"outlined",margin:"normal"}),r.a.createElement("br",null),r.a.createElement(p.a,{type:"submit",variant:"contained",color:"secondary"},"java\u901a\u4fe1"),r.a.createElement("br",null)))}}]),t}(r.a.Component),O=Object(o.b)(function(e){return{}},function(e){return{}})(j),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={total:""},a.state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(){return this.props.pageSet()}},{key:"render",value:function(){var e=this,t=this.props.total;return r.a.createElement("div",null,"\u8a08\u7b97\u7d50\u679c",r.a.createElement("ul",null,t),r.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary",onClick:function(){return e.handleSubmit()}},"\u623b\u308b"),r.a.createElement("br",null))}}]),t}(r.a.Component),S=Object(o.b)(function(e){return{total:e.cal.total}},function(e){return{}})(A),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={mailAddress:"",pass:"",isAddMode:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleSubmitJava",value:function(e){}},{key:"doChange",value:function(e){var t=e.target.value;this.setState({mailAddress:t}),this.state.mailAddress.length>3&&this.state.pass.length>6?this.state.isAddMode=!0:this.state.isAddMode=!1}},{key:"doChange2",value:function(e){var t=e.target.value;this.setState({pass:t}),this.state.mailAddress.length>3&&this.state.pass.length>6?this.state.isAddMode=!0:this.state.isAddMode=!1}},{key:"doChange3",value:function(e){var t=e.target.value;switch(e.target.type){case"mailAddress":this.setState({mailAddress:t});break;case"pass":this.setState({pass:t})}this.state.mailAddress.length>0&&this.state.pass.length>0&&(this.state.isAddMode=!0)}},{key:"render",value:function(){var e=this;console.log(this.props);var t={registerBtn:{isAdd:{display:"inline-block"},isNotAdd:{display:"none"}}};return r.a.createElement("div",null,r.a.createElement("form",{method:"post",action:"/mailReg",onSubmit:function(t){return e.handleSubmitJava(t)}},r.a.createElement(g.a,{type:"text",name:"mailAddress",style:{width:"500px"},value:this.state.mailAddress,onChange:function(t){return e.doChange(t)},label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",variant:"outlined",margin:"normal"}),r.a.createElement("br",null),r.a.createElement(g.a,{type:"text",name:"pass",size:"20",value:this.state.pass,onChange:function(t){return e.doChange2(t)},label:"\u30d1\u30b9\u30ef\u30fc\u30c9",variant:"outlined",margin:"normal"}),r.a.createElement("br",null),r.a.createElement(p.a,{type:"submit",label:"\u767b\u9332",variant:"contained",color:"secondary",style:this.state.isAddMode?t.registerBtn.isAdd:t.registerBtn.isNotAdd},"\u767b\u9332"),r.a.createElement("br",null)))}}]),t}(r.a.Component),C=Object(o.b)(function(e){return{mailAddress:e.mailReg.mailAddress,pass:e.mailReg.pass,isAddMode:e.mailReg.isAddMode}},function(e){return{}})(k),w=a(253),x=a(254),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={page:1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"setNextPage",value:function(){this.setState({page:2})}},{key:"setPrePage",value:function(){this.setState({page:1})}},{key:"render",value:function(){var e=this,t=null,a=null;switch(this.state.page){case 1:t=function(){return r.a.createElement(y,{pageSet:function(){e.setNextPage()}})},a=function(){return r.a.createElement(b,null)};break;case 2:t=function(){return r.a.createElement(S,{pageSet:function(){e.setPrePage()}})},a=function(){return""};break;default:t=function(){return r.a.createElement(y,{pageSet:function(){e.setNextPage()}})},a=function(){return r.a.createElement(b,null)}}return r.a.createElement(w.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x.a,{exact:!0,path:"/",component:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u3069\u306e\u958b\u767a\u30da\u30fc\u30b8\u3078\u9077\u79fb\u3059\u308b\uff1f"),r.a.createElement("ui",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/list"},"\u30ea\u30b9\u30c8\u8ffd\u52a0")),r.a.createElement("li",null,r.a.createElement("a",{href:"/add"},"\u8db3\u3057\u7b97")),r.a.createElement("li",null,r.a.createElement("a",{href:"/java"},"Java\u901a\u4fe1")),r.a.createElement("li",null,r.a.createElement("a",{href:"/mailReg"},"\u30e1\u30fc\u30eb\u767b\u9332"))))}}),r.a.createElement(x.a,{path:"/list",component:a}),r.a.createElement(x.a,{path:"/add",component:t}),r.a.createElement(x.a,{path:"/java",component:O}),r.a.createElement(x.a,{path:"/mailReg",component:C})))}}]),t}(n.Component),M=a(33),J=a(94),P=a.n(J),R={todoList:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var a=t.payload.todo,n=Object.assign({},e);return n.todoList.push(a),n;default:return e}},N={total:0},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":var a=parseInt(t.payload.num1),n=parseInt(t.payload.num2),r=Object.assign({},e);return r.total=a+n,console.log(r.total),r;default:return e}},T={isAddMode:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;switch((arguments.length>1?arguments[1]:void 0).type){case"ADD":return Object.assign({},e);default:return e}};var _=Object(M.d)(Object(M.c)({todo:I,cal:B,mailReg:L}),Object(M.a)(P.a));i.a.render(r.a.createElement(o.a,{store:_},r.a.createElement(D,null)),document.getElementById("root"))},95:function(e,t,a){e.exports=a(251)}},[[95,2,1]]]);
//# sourceMappingURL=main.effd01ed.chunk.js.map