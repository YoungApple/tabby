(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6524],{72657:function(e,n,t){"use strict";t.d(n,{K:function(){return o}});var s=t(36164);t(3546);var a=t(12624),r=t(1544),l=t(31458),i=t(81565);function o(e){let{className:n,container:t,offset:o,...d}=e,c=(0,a.e)(o||0,t);return(0,s.jsxs)(l.z,{variant:"outline",size:"icon",className:(0,r.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",c?"opacity-0":"opacity-100",n),onClick:()=>{t?t.scrollTo({top:t.scrollHeight,behavior:"smooth"}):window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})},...d,children:[(0,s.jsx)(i.IconArrowDown,{}),(0,s.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}},90168:function(e,n,t){"use strict";t.d(n,{q:function(){return v}});var s=t(36164),a=t(3546),r=t(74630),l=t(1544),i=t(29),o=t(43739),d=t(14079);let c=o.fC,u=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,s.jsx)(o.ck,{ref:n,className:(0,l.cn)("border-b",t),...a})});u.displayName="AccordionItem";let m=a.forwardRef((e,n)=>{let{className:t,children:a,...r}=e;return(0,s.jsxs)(o.xz,{ref:n,className:(0,l.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...r,children:[a,(0,s.jsx)(d.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})});m.displayName=o.xz.displayName;let h=a.forwardRef((e,n)=>{let{className:t,children:a,...r}=e;return(0,s.jsx)(o.VY,{ref:n,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...r,children:(0,s.jsx)("div",{className:(0,l.cn)("pb-4 pt-0",t),children:a})})});h.displayName=o.VY.displayName;var f=t(81565);let v=(0,a.forwardRef)((e,n)=>{var t,r;let{contexts:i,userContexts:o,className:d,onContextClick:f,enableTooltip:v,onTooltipClick:x,isExternalLink:g,highlightIndex:j}=e,N=((null==o?void 0:o.length)||0)+i.length,b=null!==(t=null==i?void 0:i.length)&&void 0!==t?t:0,w=null!==(r=null==o?void 0:o.length)&&void 0!==r?r:0,C=b+w,[y,A]=(0,a.useState)(C<=5?"references":void 0);return((0,a.useEffect)(()=>{C<=5?A("references"):A(void 0)},[C]),0===N)?null:(0,s.jsx)(c,{type:"single",collapsible:!0,className:(0,l.cn)("bg-transparent text-foreground",d),ref:n,value:y,onValueChange:A,children:(0,s.jsxs)(u,{value:"references",className:"my-0 border-0",children:[(0,s.jsx)(m,{className:"my-0 py-2 font-semibold",children:(0,s.jsx)("span",{className:"mr-2",children:"Read ".concat(N," file").concat(N>1?"s":"")})}),(0,s.jsxs)(h,{className:"space-y-2",children:[null==o?void 0:o.map((e,n)=>(0,s.jsx)(p,{context:e,onContextClick:e=>null==f?void 0:f(e,!0),isHighlighted:j===n},"user-".concat(n))),i.map((e,n)=>(0,s.jsx)(p,{context:e,onContextClick:e=>null==f?void 0:f(e,!1),enableTooltip:v,onTooltipClick:x,isExternalLink:g,isHighlighted:j===n+((null==o?void 0:o.length)||0)},"assistant-".concat(n)))]})]})})});function p(e){var n,t,o,d,c,u,m;let{context:h,clickable:v=!0,onContextClick:p,enableTooltip:x,onTooltipClick:g,isExternalLink:j,isHighlighted:N}=e,[b,w]=(0,a.useState)(!1),C=!(0,r.Z)(null===(n=h.range)||void 0===n?void 0:n.start)&&!(0,r.Z)(null===(t=h.range)||void 0===t?void 0:t.end)&&h.range.start<h.range.end,y=h.filepath.split("/"),A=y[y.length-1],k=y.slice(0,y.length-1).join("/"),M=null==h?void 0:null===(o=h.extra)||void 0===o?void 0:o.scores;return(0,s.jsxs)(i.u,{open:b,onOpenChange:e=>{x&&M&&w(e)},delayDuration:0,children:[(0,s.jsx)(i.aJ,{asChild:!0,children:(0,s.jsx)("div",{className:(0,l.cn)("rounded-md border p-2",{"cursor-pointer hover:bg-accent":v,"cursor-default pointer-events-auto":!v,"bg-accent transition-all":N}),onClick:e=>v&&(null==p?void 0:p(h)),children:(0,s.jsxs)("div",{className:"flex items-center gap-1 overflow-hidden",children:[(0,s.jsx)(f.IconFile,{className:"shrink-0"}),(0,s.jsxs)("div",{className:"flex-1 truncate",title:h.filepath,children:[(0,s.jsx)("span",{children:A}),(null===(d=h.range)||void 0===d?void 0:d.start)&&(0,s.jsxs)("span",{className:"text-muted-foreground",children:[":",h.range.start]}),C&&(0,s.jsxs)("span",{className:"text-muted-foreground",children:["-",h.range.end]}),(0,s.jsx)("span",{className:"ml-2 text-xs text-muted-foreground",children:k})]}),j&&(0,s.jsx)(f.IconExternalLink,{className:"shrink-0 text-muted-foreground"})]})})}),(0,s.jsx)(i._v,{align:"start",onClick:g,className:"cursor-pointer p-2",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"mb-2 font-semibold",children:"Scores"}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("span",{className:"w-20",children:"rrf:"}),null!==(c=null==M?void 0:M.rrf)&&void 0!==c?c:"-"]}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("span",{className:"w-20",children:"bm25:"}),null!==(u=null==M?void 0:M.bm25)&&void 0!==u?u:"-"]}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("span",{className:"w-20",children:"embedding:"}),null!==(m=null==M?void 0:M.embedding)&&void 0!==m?m:"-"]})]})]})})]})}v.displayName="CodeReferences"},73033:function(e,n,t){"use strict";t.d(n,{s:function(){return l}});var s=t(36164),a=t(3546),r=t(52991);let l=(0,a.memo)(e=>(0,s.jsx)(r.D,{linkTarget:"_blank",...e}),(e,n)=>e.children===n.children&&e.className===n.className)},83171:function(e,n,t){"use strict";t.d(n,{p:function(){return o},t:function(){return d}});var s=t(36164);t(3546);var a=t(68035),r=t(18500),l=t(1544),i=t(81565);function o(e){let{kind:n,label:t,className:r}=e;return(0,s.jsxs)(a.T5,{as:"span",className:(0,l.cn)("source-mention rounded-sm px-1",r),children:[(0,s.jsx)(c,{kind:n,className:"self-center"}),(0,s.jsx)("span",{children:t})]})}function d(e){let{kind:n,label:t,id:a}=e.node.attrs;return(0,s.jsx)(o,{kind:n,label:t,id:a})}function c(e){let{kind:n,...t}=e;switch(n){case r.DU.Doc:return(0,s.jsx)(i.IconEmojiBook,{...t});case r.DU.Web:return(0,s.jsx)(i.IconEmojiGlobe,{...t});case r.DU.Git:return(0,s.jsx)(i.IconCode,{...t});case r.DU.Github:return(0,s.jsx)(i.IconGitHub,{...t});case r.DU.Gitlab:return(0,s.jsx)(i.IconGitLab,{...t});default:return null}}},10279:function(e,n,t){"use strict";t.d(n,{mE:function(){return L},JG:function(){return D},V$:function(){return S}});var s=t(36164),a=t(3546),r=t(42891),l=t.n(r),i={src:"/_next/static/media/default-favicon.a2df8fbb.png",height:16,width:16,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAElEQVR42mOAAqaMgrXeIYlL2jwjF7WZey7wBolB5eyZotNX1PdMO/Br466r/89dfvx/w7aLv6LSlteDFem5zPPesPXir20Hbv7ftPfGrz9///969urL/xkLj/0KjlvqzZCct6rt9r3X/w+cvP/r8fOP/0Hg/uN3vzbsvPq/rmVzG0Nk+oq2J8/f///89devOw/f/n/7/uv/T19+/Dpx7uH/3NK1bQwMarO8tu66/Auk89qd17/mrzn/682H7//3H7rxi4FhsheDDYMhU0DC0vqde6/+On/lyf/5q878X7Tq9M+E7JX1cJ/4MpgzMajO9ApNXtoWl7mszc5nvhdMEgB1uZJfA01kRAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},o=t(62226),d=t.n(o),c=t(6797),u=t.n(c),m=t(1853),h=t(74630),f=t(66686),v=t(36982),p=t(93668),x=t(1544),g=t(73162),j=t(83008),N=t(28312),b=t(31458),w=t(81565),C=t(29);let y=(0,a.memo)(e=>{let{language:n,value:t,onCopyContent:a,onApplyInEditor:r}=e,{isCopied:l,copyToClipboard:i}=(0,N.m)({timeout:2e3,onCopyContent:a});return(0,s.jsxs)("div",{className:"codeblock relative w-full bg-zinc-950 font-sans",children:[(0,s.jsxs)("div",{className:"flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100",children:[(0,s.jsx)("span",{className:"text-xs lowercase",children:n}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[r&&(0,s.jsxs)(C.u,{children:[(0,s.jsx)(C.aJ,{asChild:!0,children:(0,s.jsxs)(b.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:r.bind(null,t),children:[(0,s.jsx)(w.IconApplyInEditor,{}),(0,s.jsx)("span",{className:"sr-only",children:"Apply in Editor"})]})}),(0,s.jsx)(C._v,{children:(0,s.jsx)("p",{className:"m-0",children:"Apply in Editor"})})]}),(0,s.jsxs)(C.u,{children:[(0,s.jsx)(C.aJ,{asChild:!0,children:(0,s.jsxs)(b.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{l||i(t)},children:[l?(0,s.jsx)(w.IconCheck,{}):(0,s.jsx)(w.IconCopy,{}),(0,s.jsx)("span",{className:"sr-only",children:"Copy"})]})}),(0,s.jsx)(C._v,{children:(0,s.jsx)("p",{className:"m-0",children:"Copy"})})]})]})]}),(0,s.jsx)(g.Z,{language:"toml"===n?"bash":n,style:j.RY,PreTag:"div",showLineNumbers:!0,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},children:t})]})});y.displayName="CodeBlock";var A=t(90615),k=t(73033);t(80804);var M=t(74038),I=t(83171),E=t(3448);let z=e=>{let n=d().sanitize(e,{ALLOWED_TAGS:[],ALLOWED_ATTR:[]}),t=f.TU.parse(n),s=u().decode(t),a=s.replace(/<\/?[^>]+(>|$)/g,"");return a},R=(0,a.createContext)({});function D(e){let{message:n,headline:t=!1,attachmentDocs:r,attachmentCode:l,onApplyInEditor:i,onCopyContent:o,contextInfo:d,fetchingContextInfo:c,className:u,...f}=e,g=(0,a.useMemo)(()=>{var e,n;let t=null!==(e=null==r?void 0:r.map(e=>({type:"doc",data:e})))&&void 0!==e?e:[],s=null!==(n=null==l?void 0:l.map(e=>({type:"code",data:e})))&&void 0!==n?n:[];return(0,m.Z)([...t,...s])},[r,l]),j=e=>{let n;let a=[],r=0,l=e=>{e&&a.push(e)},i=(t,i,o)=>{for(;null!==(n=t.exec(e));)l(e.slice(r,n.index)),a.push((0,s.jsx)(i,{...o(n)},n.index)),r=n.index+n[0].length};return i(M.H,T,e=>{let n=parseInt(e[1],10),t=(0,h.Z)(n)?void 0:null==g?void 0:g[n-1],s=null==t?void 0:t.type,a=t&&!(0,h.Z)(n);return{citationIndex:n,showcitation:a,citationType:s,citationSource:t}}),i(M.z,O,e=>{let n=e[1];return{sourceId:n,className:t?"text-[1rem] font-semibold":void 0}}),l(e.slice(r)),a};return(0,s.jsx)(R.Provider,{value:{onCopyContent:o,onApplyInEditor:i,onCodeCitationClick:f.onCodeCitationClick,onCodeCitationMouseEnter:f.onCodeCitationMouseEnter,onCodeCitationMouseLeave:f.onCodeCitationMouseLeave,contextInfo:d,fetchingContextInfo:!!c},children:(0,s.jsx)(k.s,{className:(0,x.cn)("message-markdown prose max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",u),remarkPlugins:[v.Z,p.Z],components:{p(e){let{children:n}=e;return(0,s.jsx)("p",{className:"mb-2 last:mb-0",children:n.map((e,n)=>"string"==typeof e?j(e):(0,s.jsx)("span",{children:e},n))})},li(e){let{children:n}=e;return n&&n.length?(0,s.jsx)("li",{children:n.map((e,n)=>"string"==typeof e?j(e):(0,s.jsx)("span",{children:e},n))}):(0,s.jsx)("li",{children:n})},code(e){let{node:n,inline:t,className:a,children:r,...l}=e;if(r.length){if("▍"==r[0])return(0,s.jsx)("span",{className:"mt-1 animate-pulse cursor-default",children:"▍"});r[0]=r[0].replace("`▍`","▍")}let d=/language-(\w+)/.exec(a||"");return t?(0,s.jsx)("code",{className:a,...l,children:r}):(0,s.jsx)(y,{language:d&&d[1]||"",value:String(r).replace(/\n$/,""),onApplyInEditor:i,onCopyContent:o,...l},Math.random())}},children:n})})}function L(e){let{error:n="Fail to fetch"}=e,t=(0,a.useMemo)(()=>"```\n"+JSON.stringify({error:!0,message:n},null,2)+"\n```",[n]);return(0,s.jsx)(k.s,{className:"prose-full-width prose break-words text-sm dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[v.Z,p.Z],components:{code(e){let{node:n,inline:t,className:a,children:r,...l}=e;return(0,s.jsx)("div",{...l,className:(0,x.cn)(a,"bg-zinc-950 p-2"),children:r})}},children:t})}function T(e){let{citationIndex:n,showcitation:t,citationType:a,citationSource:r}=e;return(0,s.jsx)("div",{className:"inline",children:t&&(0,s.jsx)(s.Fragment,{children:"doc"===a?(0,s.jsx)(Z,{relevantDocument:r.data,citationIndex:n}):"code"===a?(0,s.jsx)(P,{relevantCode:r.data,citationIndex:n}):null})})}function O(e){var n;let{sourceId:t,className:r}=e,{contextInfo:l,fetchingContextInfo:i}=(0,a.useContext)(R);if(!t)return null;let o=null==l?void 0:null===(n=l.sources)||void 0===n?void 0:n.find(e=>e.sourceId===t);return o?(0,s.jsx)("span",{className:"node-mention",children:(0,s.jsx)("span",{children:i?(0,s.jsx)(E.O,{className:"w-16"}):(0,s.jsx)(I.p,{id:o.sourceId,label:o.displayName,kind:o.kind,className:r})})}):null}function Z(e){let{relevantDocument:n,citationIndex:t}=e,a=n?new URL(n.link):null;return(0,s.jsxs)(A.zs,{children:[(0,s.jsx)(A.Yi,{children:(0,s.jsx)("span",{className:"relative -top-2 mr-0.5 inline-block h-4 w-4 cursor-pointer rounded-full bg-muted text-center text-xs font-medium",onClick:()=>window.open(n.link),children:t})}),(0,s.jsx)(A.bZ,{className:"w-96 text-sm",children:(0,s.jsxs)("div",{className:"flex w-full flex-col gap-y-1",children:[(0,s.jsxs)("div",{className:"m-0 flex items-center space-x-1 text-xs leading-none text-muted-foreground",children:[(0,s.jsx)(S,{hostname:a.hostname,className:"m-0 mr-1 leading-none"}),(0,s.jsx)("p",{className:"m-0 leading-none",children:a.hostname})]}),(0,s.jsx)("p",{className:"m-0 cursor-pointer font-bold leading-none transition-opacity hover:opacity-70",onClick:()=>window.open(n.link),children:n.title}),(0,s.jsx)("p",{className:"m-0 line-clamp-4 leading-none",children:z(n.content)})]})})]})}function P(e){let{relevantCode:n,citationIndex:t}=e,{onCodeCitationClick:r,onCodeCitationMouseEnter:l,onCodeCitationMouseLeave:i}=(0,a.useContext)(R);return(0,s.jsx)("span",{className:"relative -top-2 mr-0.5 inline-block h-4 w-4 cursor-pointer rounded-full bg-muted text-center text-xs font-medium",onClick:()=>{null==r||r(n)},onMouseEnter:()=>{null==l||l(t)},onMouseLeave:()=>{null==i||i(t)},children:t})}function S(e){let{hostname:n,className:t}=e,[r,o]=(0,a.useState)(!1);return(0,s.jsxs)("div",{className:"relative h-3.5 w-3.5",children:[(0,s.jsx)(l(),{src:i,alt:n,width:14,height:14,className:(0,x.cn)("absolute left-0 top-0 z-0 h-3.5 w-3.5 rounded-full leading-none",t)}),(0,s.jsx)(l(),{src:"https://s2.googleusercontent.com/s2/favicons?sz=128&domain_url=".concat(n),alt:n,width:14,height:14,className:(0,x.cn)("relative z-10 h-3.5 w-3.5 rounded-full bg-card leading-none",t,{"opacity-0":!r}),onLoad:()=>{o(!0)}})]})}},90379:function(e,n,t){"use strict";t.d(n,{PF:function(){return o},cg:function(){return l},tB:function(){return i}});var s=t(36164),a=t(1544),r=t(3448);let l=e=>{let{className:n,...t}=e;return(0,s.jsxs)("div",{className:(0,a.cn)("space-y-3",n),...t,children:[(0,s.jsx)(r.O,{className:"h-4 w-full"}),(0,s.jsx)(r.O,{className:"h-4 w-full"}),(0,s.jsx)(r.O,{className:"h-4 w-full"}),(0,s.jsx)(r.O,{className:"h-4 w-full"})]})},i=e=>{let{className:n,...t}=e;return(0,s.jsx)(r.O,{className:(0,a.cn)("h-4 w-full",n),...t})},o=e=>{let{className:n,...t}=e;return(0,s.jsxs)("div",{className:(0,a.cn)("flex flex-col gap-3",n),...t,children:[(0,s.jsx)(r.O,{className:"h-4 w-[20%]"}),(0,s.jsx)(r.O,{className:"h-4 w-full"}),(0,s.jsx)(r.O,{className:"h-4 w-[20%]"}),(0,s.jsx)(r.O,{className:"h-4 w-full"})]})}},90615:function(e,n,t){"use strict";t.d(n,{Yi:function(){return o},bZ:function(){return d},zs:function(){return i}});var s=t(36164),a=t(3546),r=t(38421),l=t(1544);let i=r.fC,o=r.xz,d=a.forwardRef((e,n)=>{let{className:t,align:a="center",sideOffset:i=4,...o}=e;return(0,s.jsx)(r.VY,{ref:n,align:a,sideOffset:i,className:(0,l.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...o})});d.displayName=r.VY.displayName},52569:function(e,n,t){"use strict";t.d(n,{Y:function(){return j},n:function(){return N}});var s=t(36164),a=t(3546),r=t(87782),l=t(21454),i=t(36327),o=t(98454),d=t(3765),c=t(1544),u=t(66612);let m=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,s.jsx)(u.fC,{ref:n,className:(0,c.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...a})});m.displayName=u.fC.displayName;let h=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,s.jsx)(u.Ee,{ref:n,className:(0,c.cn)("aspect-square h-full w-full",t),...a})});h.displayName=u.Ee.displayName;let f=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,s.jsx)(u.NY,{ref:n,className:(0,c.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...a})});f.displayName=u.NY.displayName;var v=t(3448),p=t(30410).lW;let x="not_found",g=!0;function j(e){var n,t,l,u;let{className:j,fallback:N}=e,[{data:b}]=(0,o.P)(),w=null==b?void 0:b.me.id,C=w&&"/avatar/".concat(b.me.id)||null,{data:y,isLoading:A,error:k}=(0,i.Z)(C,e=>{if(g)return(0,d.Z)(e,{responseFormatter:async e=>{let n=await e.blob(),t=p.from(await n.arrayBuffer());return"data:image/png;base64,".concat(t.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(x)}})}),M=a.useMemo(()=>{var e;if(null==b?void 0:null===(e=b.me)||void 0===e?void 0:e.email)return(0,r.B)(b.me.email)},[null==b?void 0:null===(n=b.me)||void 0===n?void 0:n.email]);return A?(0,s.jsx)(v.O,{className:(0,c.cn)("h-16 w-16 rounded-full",j)}):((null==k?void 0:k.message)===x&&(g=!1),y||M||!N)?!y&&M?(0,s.jsx)(r.Z,{className:(0,c.cn)("h-16 w-16",j),...M}):(0,s.jsxs)(m,{className:(0,c.cn)("h-16 w-16",j),children:[(0,s.jsx)(h,{src:y,alt:null==b?void 0:null===(t=b.me)||void 0===t?void 0:t.email,className:"object-cover"}),(0,s.jsx)(f,{children:null==b?void 0:null===(u=b.me)||void 0===u?void 0:null===(l=u.email)||void 0===l?void 0:l.substring(0,2)})]}):N}let N=e=>{g=!0,(0,l.JG)("/avatar/".concat(e))}},12624:function(e,n,t){"use strict";t.d(n,{e:function(){return r}});var s=t(3546),a=t(62940);function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,[t,r]=s.useState(!1);return s.useEffect(()=>{if(n)return;let t=(0,a.Z)(()=>{r(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)},100,{leading:!0});return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[e,n]),s.useEffect(()=>{if(!n)return;let t=(0,a.Z)(()=>{let{scrollTop:t,clientHeight:s,scrollHeight:a}=n;r(t+s>=a-e)},100,{leading:!0});return n.addEventListener("scroll",t,{passive:!0}),n.addEventListener("resize",t,{passive:!0}),t(),()=>{n.removeEventListener("scroll",t),n.removeEventListener("resize",t)}},[e,n]),t}},64566:function(e,n,t){"use strict";t.d(n,{x:function(){return u}});var s=t(3546),a=t(25937),r=t(43240),l=t(11634),i=t(16784);let o=(0,r.BX)("\n  subscription CreateThreadAndRun($input: CreateThreadAndRunInput!) {\n    createThreadAndRun(input: $input) {\n      threadCreated\n      threadUserMessageCreated\n      threadAssistantMessageCreated\n      threadRelevantQuestions\n      threadAssistantMessageAttachmentsCode {\n        code {\n          gitUrl\n          filepath\n          language\n          content\n          startLine\n        }\n        scores {\n          rrf\n          bm25\n          embedding\n        }\n      }\n      threadAssistantMessageAttachmentsDoc {\n        doc {\n          title\n          link\n          content\n        }\n        score\n      }\n      threadAssistantMessageContentDelta\n      threadAssistantMessageCompleted\n    }\n  }\n"),d=(0,r.BX)("\n  subscription CreateThreadRun($input: CreateThreadRunInput!) {\n    createThreadRun(input: $input) {\n      threadCreated\n      threadUserMessageCreated\n      threadAssistantMessageCreated\n      threadRelevantQuestions\n      threadAssistantMessageAttachmentsCode {\n        code {\n          gitUrl\n          filepath\n          language\n          content\n          startLine\n        }\n        scores {\n          rrf\n          bm25\n          embedding\n        }\n      }\n      threadAssistantMessageAttachmentsDoc {\n        doc {\n          title\n          link\n          content\n        }\n        score\n      }\n      threadAssistantMessageContentDelta\n      threadAssistantMessageCompleted\n    }\n  }\n"),c=(0,r.BX)("\n  mutation DeleteThreadMessagePair(\n    $threadId: ID!\n    $userMessageId: ID!\n    $assistantMessageId: ID!\n  ) {\n    deleteThreadMessagePair(\n      threadId: $threadId\n      userMessageId: $userMessageId\n      assistantMessageId: $assistantMessageId\n    )\n  }\n");function u(e){let{threadId:n,headers:t,onAssistantMessageCompleted:r}=e,[u,m]=s.useState(n),h=s.useRef(),[f,v]=s.useState(!1),[p,x]=s.useState(),[g,j]=s.useState(),N=s.useMemo(()=>t?{fetchOptions:{headers:t}}:{},[t]),b=(e,n)=>{var t,s;return n?{...e,...(0,a.Z)(n,e=>null!==e),threadAssistantMessageContentDelta:"".concat(null!==(t=null==e?void 0:e.threadAssistantMessageContentDelta)&&void 0!==t?t:"").concat(null!==(s=null==n?void 0:n.threadAssistantMessageContentDelta)&&void 0!==s?s:"")}:n},w=(0,i.d)(e=>{var n;null===(n=h.current)||void 0===n||n.call(h),h.current=void 0,v(!1),!e&&u&&(null==r||r(u,p))});s.useEffect(()=>{n!==u&&m(n)},[n]);let C=(e,n)=>{let{unsubscribe:t}=l.L.subscription(o,{input:{thread:{userMessage:e},options:n}},N).subscribe(e=>{var n,s,a,r;if(null==e?void 0:e.error){v(!1),j(e.error),t();return}(null==e?void 0:null===(s=e.data)||void 0===s?void 0:null===(n=s.createThreadAndRun)||void 0===n?void 0:n.threadAssistantMessageCompleted)&&w.current();let l=null===(r=e.data)||void 0===r?void 0:null===(a=r.createThreadAndRun)||void 0===a?void 0:a.threadCreated;l&&l!==u&&m(l),x(n=>{var t;return b(n,null===(t=e.data)||void 0===t?void 0:t.createThreadAndRun)})});return t},y=(e,n)=>{if(!u)return;let{unsubscribe:t}=l.L.subscription(d,{input:{threadId:u,additionalUserMessage:e,options:n}},N).subscribe(e=>{var n,s;if(null==e?void 0:e.error){v(!1),j(e.error),t();return}(null==e?void 0:null===(s=e.data)||void 0===s?void 0:null===(n=s.createThreadRun)||void 0===n?void 0:n.threadAssistantMessageCompleted)&&w.current(),x(n=>{var t;return b(n,null===(t=e.data)||void 0===t?void 0:t.createThreadRun)})});return t},A=(0,l.D)(c),k=(e,n)=>{f||(v(!0),j(void 0),x(void 0),u?h.current=y(e,n):h.current=C(e,n))},M=(e,n,t)=>A({threadId:e,userMessageId:n,assistantMessageId:t},N).then(e=>{var n;return null!=e&&null!==(n=e.data)&&void 0!==n&&!!n.deleteThreadMessagePair}).catch(e=>!1);return{isLoading:f,answer:p,error:g,setError:j,sendUserMessage:k,stop:w.current,regenerate:e=>{u&&(v(!0),j(void 0),x(void 0),M(e.threadId,e.userMessageId,e.assistantMessageId).finally(()=>{k(e.userMessage,e.threadRunOptions)}))},deleteThreadMessagePair:M}}},80804:function(){}}]);