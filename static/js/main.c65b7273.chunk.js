(this["webpackJsonpbmi-calculator"]=this["webpackJsonpbmi-calculator"]||[]).push([[0],{4:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),u=a(1);var m=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),m=Object(u.a)(r,2),o=m[0],i=m[1],s=Object(n.useState)(),h=Object(u.a)(s,2),g=h[0],p=h[1],b=Object(n.useState)(),v=Object(u.a)(b,2),E=v[0],f=v[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"BMI Calculator"),l.a.createElement("form",{onSubmit:function(e){p((function(){return"meter"===E&&a>0&&a<2.36&&o>0&&o<1e3?o/(a*a)+"kg/m2":"cm"===E&&a>0&&a<230&&o>0&&o<1e3?o/(a/100*(a/100))+"kg/m2":"inch"===E&&a>0&&a<92.91339&&o>0&&o<1e3?o/(a/39.3701*(a/39.3701))+"kg/m2":"please select measurement also give correct height and weight "})),e.preventDefault()}},l.a.createElement("input",{name:"height",onChange:function(e){var t=e.target.value;c(t)},type:"number",placeholder:"enter height",value:a}),l.a.createElement("div",{className:"useflex"},l.a.createElement("label",{htmlFor:"height"},"Choose Measuring Unit "),l.a.createElement("select",{name:"selectmeasure",onChange:function(e){var t=e.target.value;f(t)},value:E},l.a.createElement("option",null,"select"),l.a.createElement("option",null,"meter"),l.a.createElement("option",null,"cm"),l.a.createElement("option",null,"inch"))),l.a.createElement("input",{name:"weight",onChange:function(e){var t=e.target.value;i(t)},type:"number",placeholder:"enter weight",value:o}),l.a.createElement("button",{type:"submit"},"Calculate")),l.a.createElement("h1",null,g," "))};r.a.render(l.a.createElement(m,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.c65b7273.chunk.js.map