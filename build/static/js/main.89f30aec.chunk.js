(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(13),o=t.n(r),c=t(2),l=t(3),i=t.n(l),m=function(){return i.a.get("/api/persons/").then((function(e){return e.data}))},s=function(e){return i.a.post("/api/persons/",e).then((function(e){return e.data}))},f=function(e){return i.a.delete("/api/persons/"+e.id).then((function(e){return e.data}))},d=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(""),l=Object(c.a)(o,2),i=l[0],d=l[1],b=Object(a.useState)(""),h=Object(c.a)(b,2),p=h[0],v=h[1],E=Object(a.useState)(""),g=Object(c.a)(E,2),j=g[0],O=g[1],k=Object(a.useState)(null),y=Object(c.a)(k,2);y[0],y[1];Object(a.useEffect)((function(){m().then((function(e){return r(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement("form",{onSubmit:function(e){var n=!1;e.preventDefault();var a={name:i,number:p};t.map((function(e){e.name!==a.name&&e.number!==a.number||(alert(a.name+"'s name/number is already added to the phone book -- Add functionality to change numbers if entered the same name lol"),n=!0)})),!1===n&&(r(t.concat(a)),s(a).then((function(e){r(t.concat(e))})).catch((function(e){console.log(e.response.data),setTimeout({},5e3)}))),d(""),v("")}},u.a.createElement("div",null," name: ",u.a.createElement("input",{value:i,onChange:function(e){d(e.target.value)}})," "),u.a.createElement("div",null," phone number: ",u.a.createElement("input",{value:p,onChange:function(e){v(e.target.value)}})," "),u.a.createElement("div",null," ",u.a.createElement("button",{type:"submit"},"add")," ")),u.a.createElement("h2",null,"Numbers"),u.a.createElement("div",null,"filter: ",u.a.createElement("input",{value:j,onChange:function(e){O(e.target.value)}})),u.a.createElement("div",null,t.filter((function(e){return e.name.includes(j)})).map((function(e){return u.a.createElement("li",{key:e.id,className:"notes"},e.name," : ",e.number,u.a.createElement("button",{onClick:function(){return n=e,void(window.confirm("Are you sure you want to delete ",n.name)&&f(n).then((function(e){m().then((function(e){return r(e)}))})).catch((function(e){alert("The contact for ",n.name," has encountered an error being deleted")})));var n}},"Delete"))}))))};t(36);o.a.render(u.a.createElement(d,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.89f30aec.chunk.js.map