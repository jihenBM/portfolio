import{g as d,S as u,u as _}from"./projects-2faRAP0f.js";import{_ as m,b as t,c as e,e as o,A as p,F as c,x as n,n as f,z as h}from"./index-Bi4nUJq-.js";const g={mounted(){const a=Number(this.$route.params.index);this.project=this.store.projects[a],d.registerPlugin(u);const l=d.timeline({scrollTrigger:{trigger:".anim-portfolio",start:"top 100%",onEnter:()=>{l.play()}}});l.fromTo(".anim-portfolio",{opacity:0,y:"30%"},{opacity:1,y:"0%",duration:1})},data(){return{project:Object,store:_()}}},y={id:"portfolio",class:"d-flex align-items-center portfolio anim-portfolio"},x={class:"container"},j={class:"rounded bg-white w-100"},v={class:"d-flex gap-5 flex-column justify-content-evenly justify-content-md-center h-100 align-items-center"},k={class:"header position-relative pt-5 pt-md-0"},b={class:"title",id:"exampleModalLabel"},w={class:"gap-5 d-flex flex-md-row flex-column align-items-center"},S={key:0},V=["autoplay"],B=["src"],E={key:1},N=["src","alt"],P=["href"];function T(a,l,z,C,s,F){return t(),e("section",y,[o("div",x,[o("div",j,[o("div",v,[o("div",k,[o("h5",b,p(s.project.title),1)]),o("div",w,[o("div",null,[["RimExpert"].includes(s.project.title)?(t(),e("div",E,[(t(!0),e(c,null,n(s.project.src,(r,i)=>(t(),e("img",{class:"img-modal",src:"/portfolio"+r,alt:r.title,key:i},null,8,N))),128))])):(t(),e("div",S,[(t(!0),e(c,null,n(s.project.videos,(r,i)=>(t(),e("video",{class:"w-100 px-4 px-md-0",key:i,controls:"",autoplay:i==0,loop:""},[o("source",{src:"/portfolio"+r,type:"video/mp4"},null,8,B)],8,V))),128))]))]),o("div",{style:f(s.project.title!="Herodot Studio"?"max-width:350px":"width:71%")},[o("ul",null,[(t(!0),e(c,null,n(s.project.description,(r,i)=>(t(),e("li",{style:{"list-style":"square"},key:i},p(r),1))),128))]),s.project.link?(t(),e("a",{key:0,href:s.project.link,target:"_blank",style:{color:"#d92cf9"}}," Visit the website ",8,P)):h("",!0)],4)])])])])])}const A=m(g,[["render",T],["__scopeId","data-v-8d8dbcfa"]]);export{A as default};
