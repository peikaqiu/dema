import{u as m}from"./vue-router.bce07dc8.js";import{_ as h}from"./index.df069297.js";import{a as g,r as v,o as n,g as c,l as t,F as I,G as f,k,x,u as S,D as b,E as w}from"./@vue.2fc3431d.js";const y="/assets/vue.5532db34.svg";const B=e=>(b("data-v-9c0c1d43"),e=e(),w(),e),C=B(()=>t("img",{class:"img-logo",src:y,alt:"dema"},null,-1)),H={class:"toolsBox"},D=["onClick"],E={__name:"header",setup(e){const r=m(),l=g(sessionStorage.getItem("nIndex")||"0"),_=v({tools:[{name:"\u9996\u9875",path:"/"},{name:"\u7EC4\u4EF6",path:"/home"},{name:"GitHub",path:"open",url:"https://github.com/wangibook/my-baseui"}]}),{tools:i}=_,u=()=>{r.push("/"),sessionStorage.setItem("nIndex","0")},d=(s,o)=>{l.value=o,s.path=="open"?window.open(s.url):r.push(s.path),sessionStorage.setItem("nIndex",o)};return(s,o)=>(n(),c("header",null,[C,t("a",{class:"left",href:"javascript:;",onClick:u},"dema"),t("div",H,[t("ul",null,[(n(!0),c(I,null,f(S(i),(p,a)=>(n(),c("li",{class:k(["tool-item",{active:l.value==a}]),key:a,onClick:F=>d(p,a)},x(p.name),11,D))),128))])])]))}},z=h(E,[["__scopeId","data-v-9c0c1d43"]]);export{z as H,y as _};
