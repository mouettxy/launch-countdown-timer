import{d as e,c as t,F as s,r as n,o as r,a,t as l,h as o,b as c,e as i,f as u}from"./vendor.7c2c1f5e.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,a)=>{const l=new URL(e,n);if(self[t].moduleMap[l])return s(self[t].moduleMap[l]);const o=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){a(new Error(`Failed to import: ${e}`)),r(c)},onload(){s(self[t].moduleMap[l]),r(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/launch-countdown-timer/assets/");var d=e({name:"footer-icons",setup:()=>({icons:["bg-facebook","bg-pinterest","bg-instagram"]})});const m={class:"flex h-8 space-x-8"};d.render=function(e,a,l,o,c,i){return r(),t("div",m,[(r(!0),t(s,null,n(e.icons,(e=>(r(),t("a",{key:e,href:"#",class:[{[e]:!0},"block w-8 h-8 bg-no-repeat bg-cover lg:w-5 lg:h-5"]},null,2)))),128))])};var p=e({name:"header-title",setup:()=>({text:"We're launching soon"})});const f={class:"text-2xl pt-24 font-bold tracking-[0.4rem] text-center text-white uppercase"};p.render=function(e,s,n,o,c,i){return r(),t("div",f,[a("p",null,l(e.text),1)])};const x=o().add(7,"days").startOf("day");var b=e({name:"realtime-clock",setup(){const e=c({D:{text:"Days",time:0},H:{text:"Hours",time:0},M:{text:"Minutes",time:0},S:{text:"Seconds",time:0}}),t=(t,s,n,r)=>{(t=>{e.value.D.time=t})(t),(t=>{e.value.H.time=t})(s),(t=>{e.value.M.time=t})(n),(t=>{e.value.S.time=t})(r)},s=e=>{const s=o.duration(e.diff(o()));if(s.milliseconds()<0)return clearInterval(n),void t(0,0,0,0);t(s.days(),s.hours(),s.minutes(),s.seconds())};s(x);const n=setInterval((()=>{s(x)}),1e3);return{timeEntries:e}}});const v={class:"flex justify-center pt-16 space-x-8"},g={class:"relative shadow-md"},h=a("div",{class:"relative top-0 realtime-clock__flipper--base rounded-b-md"},null,-1),y=a("div",{class:"relative bottom-0 realtime-clock__flipper--base rounded-t-md"},null,-1),k=a("div",{class:"absolute z-1 shadow-inner left-[5%] w-[90%] bg-desaturated-blue h-2 top-1/2"},null,-1),w={class:"mt-2 font-bold text-center uppercase text-ultra-xs text-primary lg:text-xs lg:tracking-[.15rem]"};b.render=function(e,o,c,i,u,d){return r(),t("div",v,[(r(!0),t(s,null,n(e.timeEntries,(e=>(r(),t("div",{key:e.text},[a("div",g,[h,y,k,a("p",{class:[{"lg:left-3.5":2===e.time.toString().length},"absolute z-2 text-3xl text-center lg:text-6xl lg:inset-5 inset-3.5 text-secondary"]},l(e.time),3)]),a("p",w,l(e.text),1)])))),128))])};var j=e({name:"app",components:{FooterIcons:d,HeaderTitle:p,RealtimeClock:b}});const M={class:"relative h-screen font-default bg-stars bg-dark-blue"},_={class:"flex justify-center"},R={class:"fixed bottom-0 left-0 right-0 flex justify-center bg-cover bg-hills bg-left-85 h-[30%]"};j.render=function(e,s,n,l,o,c){const u=i("header-title"),d=i("realtime-clock"),m=i("footer-icons");return r(),t("section",M,[a("header",_,[a(u)]),a("main",null,[a(d)]),a("footer",R,[a(m,{class:"absolute bottom-8"})])])};u(j).mount("#app");
