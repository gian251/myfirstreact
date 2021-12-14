(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{31:function(e,t,c){},51:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(25),s=c.n(r),l=(c(31),c(0)),o=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"/",children:"ICS2608"}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{class:"navbar-nav",children:[Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact",children:"Home"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/employees",children:"Employees"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/add",children:"Add Employee"}),Object(l.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})},i=c(15),d=c(2),j=c(5),b=c(26),u=c.n(b).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"content-type":"application/json"}}),h=function(){return u.get("/employees")},m=function(e){return u.post("/employees",e)},O=function(e){return u.put("/employees",e)},p=function(e){return u.get("/employees/".concat(e))},f=function(e){return u.delete("/employees/".concat(e))},x=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(j.a)(r,2),o=s[0],i=s[1],b=Object(n.useState)(""),u=Object(j.a)(b,2),h=u[0],f=u[1],x=Object(d.f)(),v=Object(d.g)().employeeId,y=Object(n.useState)(""),g=Object(j.a)(y,2),N=g[0],k=g[1];return Object(n.useEffect)((function(){v&&p(v).then((function(e){a(e.data.name),i(e.data.location),f(e.data.department)})).catch((function(e){console.error("ERROR",e)}))}),[]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"Add Employee"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"name",className:"form-label",children:"Name:"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:c,id:"name",placeholder:"Add employee's name...",onChange:function(e){a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"location",className:"form-label",children:"Location:"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:o,id:"location",placeholder:"Add employee's address...",onChange:function(e){i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"department",className:"form-label",children:"Department:"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:h,id:"department",placeholder:"Add employee's department...",onChange:function(e){f(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),c&&o&&h?(k(""),v?O({employeeId:v,name:c,location:o,department:h}).then((function(e){console.log("Employee record updated",e.data),x("/myfirstreact/employees")})).catch((function(e){console.error("ERROR",e)})):m({name:c,location:o,department:h}).then((function(e){console.log("Employee record added",e.data),x("/myfirstreact/employees")})).catch((function(e){console.error("ERROR",e)}))):(console.error("Please fill up all field boxes."),k("Please fill up all field boxes."))}(e)},children:"Save"}),Object(l.jsx)("p",{id:"error",children:N&&Object(l.jsx)("p",{className:"error",children:N})})]})]})},v=(c(53),function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){r()}));var r=function(){h().then((function(e){a(e.data)})).catch(console.log("Hello"))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"List of Employees"}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("table",{className:"table table-hover table-dark table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Location"}),Object(l.jsx)("td",{children:"Department"}),Object(l.jsx)("td",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e){return Object(l.jsxs)("tr",{className:"table-light",children:[Object(l.jsx)("td",{align:"left",children:e.name}),Object(l.jsx)("td",{align:"left",children:e.location}),Object(l.jsx)("td",{align:"left",children:e.department}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"d-grid gap-2 d-md-flex",children:[Object(l.jsx)(i.b,{className:"btn btn-primary",to:"/myfirstreact/edit/".concat(e.employeeId),children:"Update"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e.employeeId,void(window.confirm("Are you sure you want to delete this record?")&&f(t).then((function(e){console.log("Employee record deleted.")})).catch((function(e){console.error("ERROR",e)})));var t},children:"Delete"})]})})]})}))})]})})]})}),y=c.p+"static/media/logo.6ce24c58.svg";c(51);var g=function(){return Object(l.jsx)("h1",{children:"Ohayou-gozaimasu!"})},N=c(3),k=c(4),C=c(7),E=c(6),A=function(e){Object(C.a)(c,e);var t=Object(E.a)(c);function c(){var e;return Object(N.a)(this,c),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1}),console.log("added 1")},e.state={count:0},e}return Object(k.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:this.addCounter,children:"Dagdagan mo ko"}),Object(l.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),c}(a.a.Component);var R=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:y,className:"App-logo",alt:"logo"}),Object(l.jsx)("a",{className:"App-link",href:"https://youtu.be/XCs7FacjHQY",target:"_blank",rel:"noopener noreferrer",children:"kunwari di babagsak"}),Object(l.jsx)("p",{children:"ano yan kapatid"}),Object(l.jsx)(g,{}),Object(l.jsx)(A,{})]})})},S=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Page not found :( "})})},D=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{exact:!0,path:"/myfirstreact",element:Object(l.jsx)(R,{})}),Object(l.jsx)(d.a,{exact:!0,path:"/myfirstreact/employees",element:Object(l.jsx)(v,{})}),Object(l.jsx)(d.a,{exact:!0,path:"/myfirstreact/add",element:Object(l.jsx)(x,{})}),Object(l.jsx)(d.a,{exact:!0,path:"/myfirstreact/edit/:employeeid",element:Object(l.jsx)(x,{})}),Object(l.jsx)(d.a,{exact:!0,path:"*",element:Object(l.jsx)(S,{})})]})})})};var I=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(D,{})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c(52);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),w()}},[[54,1,2]]]);
//# sourceMappingURL=main.8fac5e05.chunk.js.map