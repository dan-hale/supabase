import{d as o,aq as n,H as i,aV as c,a_ as f,b8 as b}from"./5uFLRXWz.js";import{u as d}from"./B3cAN6Fg.js";import"./Cp7Md9uy.js";const p=o({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(r){const a=n(r.query,"source"),{fetchFileContributors:u}=d();i(a,()=>{t&&t()});const{data:e,refresh:t,pending:s}=await c(`github-file-contributors-${f(r.query)}`,()=>u(r.query));return{contributors:e,refresh:t,pending:s}},render({contributors:r,refresh:a,pending:u}){var t;const e=b();return(t=e==null?void 0:e.default)==null?void 0:t.call(e,{contributors:r,refresh:a,pending:u})}});export{p as default};
