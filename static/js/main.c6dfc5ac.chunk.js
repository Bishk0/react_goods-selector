(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),c=n(3),a=n.n(c),r=n(1),l=n(4),d=n(5),u=n(7),i=n(6),m=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={selectedGoods:["Jam"]},e.renderTitle=function(){var t=Object(r.a)(e.state.selectedGoods),n=Object(r.a)(t).pop();switch(t.length){case 0:return"No goods selected";case 1:return"".concat(t[0]," is selected");default:return t.pop(),"".concat(t.join(", ")," and\n          ").concat(n," are selected")}},e.addGoods=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(r.a)(e.selectedGoods),[t])}}))},e.removeGoods=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,this.renderTitle()),s.a.createElement("button",{type:"button",className:"reset",onClick:function(){return e.setState({selectedGoods:[]})},disabled:!this.state.selectedGoods.length},"Reset selections"),s.a.createElement("ul",{className:"goods-list"},m.map((function(t){return s.a.createElement("li",{key:Math.random(),className:e.state.selectedGoods.includes(t)?"selected goods":"goods"},s.a.createElement("span",null,t),s.a.createElement("button",{type:"button",className:"btn",onClick:function(){return e.state.selectedGoods.includes(t)?e.removeGoods(t):e.addGoods(t)}},e.state.selectedGoods.includes(t)?"Unselect":"Select"))}))))}}]),n}(o.Component);a.a.render(s.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c6dfc5ac.chunk.js.map