(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{29:function(e,t,n){e.exports=n(58)},34:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(27),l=n.n(r),o=(n(34),n(7)),u=n(9),i=n.n(u),s=n(12),p=n(13),m=n.n(p),h=n(11);var f=function(e){var t=e.match,n=Object(a.useState)({recipes:[]}),r=Object(o.a)(n,2),l=r[0],u=r[1],p="https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=".concat(t.params.foodName),f=Object(a.useState)(!1),E=Object(o.a)(f,2),d=E[0],b=E[1],v=Object(a.useState)(!1),g=Object(o.a)(v,2),j=g[0],O=g[1];return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,m()(p).then((function(e){u(e.data),O(!1),b(!1)})).catch((function(e){console.log(e),O(!0)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),c.a.createElement("div",null,j&&c.a.createElement("div",null,"Something went wrong ..."),d?c.a.createElement("div",null,"Loading ..."):c.a.createElement("div",null,l.recipes.map((function(e){return c.a.createElement("div",{key:e._id},c.a.createElement("div",null,c.a.createElement("p",null," ",c.a.createElement("img",{alt:e.title,src:e.image_url}),c.a.createElement(h.b,{to:"/recipe/".concat(e.recipe_id)},e.title),c.a.createElement("br",null),"Social Rank: ",e.social_rank," ",c.a.createElement("br",null),"Publisher: ",e.publisher),c.a.createElement("br",null)))}))))};var E=function(e){var t=e.match,n=Object(a.useState)([]),r=Object(o.a)(n,2),l=r[0],u=r[1],p="https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=".concat(t.params.id);return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()(p).then((function(e){var t=e.data;u(t),console.log(l)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p,l]),c.a.createElement("div",null,l)},d=n(1);var b=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement("div",null,"landing page"),c.a.createElement("input",{type:"text",onChange:function(e){return r(e.target.value)}}),console.log(n),c.a.createElement(h.b,{to:"/searchResults/".concat(n)},c.a.createElement("button",null,"search")))},v=function(){return c.a.createElement("div",null,c.a.createElement(h.a,null,c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/",exact:!0,component:b}),c.a.createElement(d.a,{path:"/searchresults/:foodName",component:f}),c.a.createElement(d.a,{path:"/recipe/:id",component:E}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e70872e0.chunk.js.map