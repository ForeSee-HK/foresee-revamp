import{r as t,j as e}from"./index-5eea802e.js";function u(i){const[n,s]=t.useState({});return t.useEffect(()=>{const a=o=>{o.forEach(h=>{const l=h.target.getAttribute("nav-show");l?h.isIntersecting?s(p=>({...p,[l]:{isInView:!0}})):s(p=>({...p,[l]:{isInView:!1}})):console.warn("Encountered entry with no name. You should add nav-show to every element passed to the isInView hook.")})};let d={rootMargin:"0px",threshold:.6};const r=new IntersectionObserver(a,d);return i.forEach(o=>{o.current&&r.observe(o.current)}),()=>r.disconnect()},[]),n}const f="_NavDiv_15y8w_1",w="_NavText_15y8w_17",k="_NavIcon_15y8w_28",_="_NavProgress_15y8w_33",R="_container_15y8w_37",b="_progressBar_15y8w_41",y="_active_15y8w_86",D="_last_15y8w_96",c={NavDiv:f,NavText:w,NavIcon:k,NavProgress:_,container:R,progressBar:b,active:y,last:D},L=""+new URL("eye-ded99676.svg",import.meta.url).href,N=i=>{const n=[];for(let s=0;s<6;s++)n.push(e.jsx("li",{className:`${i.progress>=s?c.active:""} ${i.progress==s?c.last:""}`},s));return e.jsxs("div",{className:c.NavDiv,children:[e.jsx("img",{src:L,className:c.NavIcon}),e.jsx("span",{className:c.NavText,children:"ForeSee"}),e.jsx("div",{className:c.NavProgress,children:e.jsx("div",{className:c.container,children:e.jsx("ul",{className:c.progressBar,children:n})})})]})},I="_example_1dobs_1",U={example:I},j=t.forwardRef(function(n,s){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:U.example,ref:s,"nav-show":n.id,children:["example ",n.id]})})}),P="_workedWith_y9ted_1",F="_titleDiv_y9ted_10",W="_imageDiv_y9ted_25",g={workedWith:P,titleDiv:F,imageDiv:W},C=""+new URL("Mr Dick Lo-7117fdd3.jpeg",import.meta.url).href,E=""+new URL("HKUST Sight-ead20dec.png",import.meta.url).href,Q=t.forwardRef(function(n,s){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:g.workedWith,ref:s,"nav-show":n.id,children:[e.jsxs("div",{className:g.titleDiv,children:[e.jsx("span",{children:"Proudly Worked With"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"550",height:"10",viewBox:"0 0 650 10",fill:"none",children:e.jsx("path",{d:"M0 5H650",stroke:"#258F8C",strokeWidth:"6"})})]}),e.jsxs("div",{className:g.imageDiv,children:[e.jsxs("div",{children:[e.jsx("img",{src:C,alt:"Mr Dick Lo"}),e.jsx("span",{children:"Mr Dick Lo"})]}),e.jsxs("div",{children:[e.jsx("img",{src:E,alt:"HKUST Sight"}),e.jsx("span",{children:"HKUST Sight"})]})]})]})})}),T="_contactUs_11ifk_1",S="_titleDiv_11ifk_11",Y="_desktopDiv_11ifk_26",M="_mobileDiv_11ifk_43",x={contactUs:T,titleDiv:S,desktopDiv:Y,mobileDiv:M},$=""+new URL("Facebook QR-6b109c63.png",import.meta.url).href,A=""+new URL("Google Play QR-5c3947da.png",import.meta.url).href,B=""+new URL("Instagram QR-478f3c7b.png",import.meta.url).href,H=""+new URL("LinkedIn QR-ff5cc4e5.png",import.meta.url).href,G=""+new URL("Linktree QR-326a8a0c.png",import.meta.url).href,V=""+new URL("YouTube QR-d3b4a49c.png",import.meta.url).href,z=""+new URL("Facebook-a216a86c.png",import.meta.url).href,K=""+new URL("Google Play-f79b988c.jpg",import.meta.url).href,Z=""+new URL("Instagram-7b75fb99.png",import.meta.url).href,q=""+new URL("LinkedIn-7934e6bc.png",import.meta.url).href,O=""+new URL("Linktree-ddccc543.svg",import.meta.url).href,X=""+new URL("Youtube-64c4a138.png",import.meta.url).href,J=t.forwardRef(function(n,s){const[a,d]=t.useState(window.innerWidth>=768);t.useEffect(()=>{const o=()=>{d(window.innerWidth>=768)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]);const r=o=>{window.open(o,"_blank")};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:x.contactUs,ref:s,"nav-show":n.id,children:[e.jsxs("div",{className:x.titleDiv,children:[e.jsx("span",{children:"Contact Us"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"550",height:"10",viewBox:"0 0 650 10",fill:"none",children:e.jsx("path",{d:"M0 5H650",stroke:"#258F8C",strokeWidth:"6"})}),e.jsx("p",{children:"sightforesee@ust.hk"})]}),a?e.jsxs("div",{className:x.desktopDiv,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("img",{src:B,alt:"Instagram"}),e.jsx("span",{children:"Instagram"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("img",{src:$,alt:"Facebook"}),e.jsx("span",{children:"Facebook"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("img",{src:A,alt:"Google"}),e.jsx("span",{children:"Google"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("img",{src:H,alt:"LinkedIn"}),e.jsx("span",{children:"LinkedIn"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("img",{src:G,alt:"Linktree"}),e.jsx("span",{children:"Linktree"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("img",{src:V,alt:"YouTube"}),e.jsx("span",{children:"YouTube"})]})]}):e.jsxs("div",{className:x.mobileDiv,children:[e.jsxs("div",{onClick:()=>r("https://instagram.com/foresee_hk?igshid=Y2I2MzMwZWM3ZA=="),children:[e.jsx("img",{src:Z,alt:"Instagram"}),e.jsx("span",{children:"Instagram"})]}),e.jsxs("div",{onClick:()=>r("https://www.facebook.com/foreseehkust"),children:[e.jsx("img",{src:z,alt:"Facebook"}),e.jsx("span",{children:"Facebook"})]}),e.jsxs("div",{onClick:()=>r("https://play.google.com/store/apps/details?id=com.foresee.hk&pli=1"),children:[e.jsx("img",{src:K,alt:"Google Play"}),e.jsx("span",{children:"Google Play"})]}),e.jsxs("div",{onClick:()=>r("https://www.linkedin.com/company/foreseehk/"),children:[e.jsx("img",{src:q,alt:"LinkedIn"}),e.jsx("span",{children:"LinkedIn"})]}),e.jsxs("div",{onClick:()=>r("https://linktr.ee/foresee_hk?utm_source=qr_code"),children:[e.jsx("img",{src:O,alt:"Linktree"}),e.jsx("span",{children:"Linktree"})]}),e.jsxs("div",{onClick:()=>r("https://www.youtube.com/channel/UCXjkhENQuYXNIqz9AdKVZBw"),children:[e.jsx("img",{src:X,alt:"Youtube"}),e.jsx("span",{children:"Youtube"})]})]})]})})}),ee="_homePage_1lvxl_1",se="_buttonApp_1lvxl_10",ne={homePage:ee,buttonApp:se};const te=t.forwardRef(function(n,s){return e.jsx(e.Fragment,{children:e.jsx("div",{className:ne.homePage,ref:s,"nav-show":n.id})})}),ie="_appsPage_1vnm2_1",re="_titleDiv_1vnm2_10",oe="_col_1vnm2_25",v={appsPage:ie,titleDiv:re,col:oe},ce=""+new URL("rectangle-b98c6c77.png",import.meta.url).href,m=""+new URL("circle-4678f8c6.png",import.meta.url).href,le=t.forwardRef(function(n,s){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:v.appsPage,ref:s,"nav-show":n.id,children:[e.jsxs("div",{className:v.titleDiv,children:[e.jsx("span",{children:"Apps"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"125",height:"20",viewBox:"0 0 650 10",fill:"none",children:e.jsx("path",{d:"M0 5H650",stroke:"#258F8C",strokeWidth:"50"})})]}),e.jsxs("div",{className:v.col,children:[e.jsxs("div",{children:[e.jsxs("row",{children:[e.jsx("span",{children:"temp 1"}),e.jsx("img",{src:m})]}),e.jsxs("row",{children:[e.jsx("span",{children:"temp 2"}),e.jsx("img",{src:m})]}),e.jsxs("row",{children:[e.jsx("span",{children:"temp 3"}),e.jsx("img",{src:m})]})]}),e.jsx("div",{children:e.jsx("img",{src:ce})}),e.jsxs("div",{children:[e.jsxs("row",{children:[e.jsx("img",{src:m}),e.jsx("span",{children:"temp 4"})]}),e.jsxs("row",{children:[e.jsx("img",{src:m}),e.jsx("span",{children:"temp 5"})]}),e.jsxs("row",{children:[e.jsx("img",{src:m}),e.jsx("span",{children:"temp 6"})]})]})]})]})})}),de=()=>{const i=t.useRef(null),n=t.useRef(null),s=t.useRef(null),a=t.useRef(null),d=t.useRef(null),r=t.useRef(null),o=u([i,n,s,a,d,r]);return e.jsxs("div",{children:[e.jsx(N,{progress:Object.keys(o).reduce((h,l)=>o[l].isInView&&l>h?l:h,-1)}),e.jsx(te,{ref:i,id:"0"}),e.jsx(le,{ref:n,id:"1"}),e.jsx(j,{ref:s,id:"2"}),e.jsx(j,{ref:a,id:"3"}),e.jsx(Q,{ref:d,id:"4"}),e.jsx(J,{ref:r,id:"5"})]})};export{de as default};
