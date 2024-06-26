(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{14375:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.flat(1/0).filter(Boolean).join(" ")},o=(e,t)=>n=>{var o;if((null==t?void 0:t.variants)==null)return i(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:s,defaultVariants:l}=t,a=Object.keys(s).map(e=>{let t=null==n?void 0:n[e],i=null==l?void 0:l[e];if(null===t)return null;let o=r(t)||r(i);return s[e][o]}),u=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),c=null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:n,className:r,...i}=t;return Object.entries(i).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...l,...u}[t]):({...l,...u})[t]===n})?[...e,n,r]:e},[]);return i(e,a,c,null==n?void 0:n.class,null==n?void 0:n.className)}},7922:function(e,t,n){Promise.resolve().then(n.bind(n,71901))},71901:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(36164),i=n(70652),o=n.n(i),s=n(31458),l=n(3546),a=n(74630),u=n(2578),c=n(40055),d=n(21808),f=n(43240),v=n(11634),m=n(70410),h=n(81565),x=n(49506),g=n(99047),p=n(29),j=n(6230),b=n(14522);let N=(0,f.BX)("\n  mutation deleteGitRepository($id: ID!) {\n    deleteGitRepository(id: $id)\n  }\n"),y=d.L8;function w(){var e,t;let[n,i]=l.useState(),[{data:d,fetching:f},w]=(0,c.aM)({query:m.S1,variables:{last:y,before:n}}),[R,Z]=l.useState(1),O=l.useMemo(()=>{var e,t;return null==d?void 0:null===(t=d.gitRepositories)||void 0===t?void 0:null===(e=t.edges)||void 0===e?void 0:e.slice().reverse()},[null==d?void 0:null===(e=d.gitRepositories)||void 0===e?void 0:e.edges]),_=null==d?void 0:null===(t=d.gitRepositories)||void 0===t?void 0:t.pageInfo,S=Math.ceil(((null==O?void 0:O.length)||0)/y),C=e=>{var t,n;return null==O?void 0:null===(n=O.slice(0,(e-1)*y))||void 0===n?void 0:null===(t=n.pop())||void 0===t?void 0:t.cursor},T=e=>{i(C(e))},k=l.useMemo(()=>{var e;return null==O?void 0:null===(e=O.slice)||void 0===e?void 0:e.call(O,(R-1)*y,R*y)},[R,O]),I=(null==_?void 0:_.hasPreviousPage)||R<S,A=R>1,P=!!(null==k?void 0:k.length)&&(I||A),z=(0,v.D)(N),E=(0,v.D)(b.C),M=(e,t)=>{z({id:e}).then(e=>{var n,r;(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.deleteGitRepository)?T(t?R-1:R):u.A.error((null==e?void 0:null===(r=e.error)||void 0===r?void 0:r.message)||"Failed to delete repository")})},$=e=>E({command:e}).then(e=>{var t,n;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.triggerJobRun)?(u.A.success("The job has been triggered successfully, it may take a few minutes to process."),w()):u.A.error((null==e?void 0:null===(n=e.error)||void 0===n?void 0:n.message)||"Failed to trigger job")});return l.useEffect(()=>{!f&&S<R&&R>1&&Z(S)},[S,R]),(0,r.jsxs)(j.Z,{loading:f,children:[(0,r.jsxs)(g.iA,{className:"table-fixed border-b",children:[(0,r.jsx)(g.xD,{children:(0,r.jsxs)(g.SC,{children:[(0,r.jsx)(g.ss,{className:"w-[25%]",children:"Name"}),(0,r.jsx)(g.ss,{className:"w-[45%]",children:"Git URL"}),(0,r.jsx)(g.ss,{children:"Job"}),(0,r.jsx)(g.ss,{className:"w-[100px]"})]})}),(0,r.jsx)(g.RM,{children:(null==k?void 0:k.length)||1!==R?(0,r.jsx)(r.Fragment,{children:null==k?void 0:k.map(e=>{let t=e.node.jobInfo.lastJobRun,n=!!(null==t?void 0:t.id)&&(0,a.Z)(t.exitCode);return(0,r.jsxs)(g.SC,{children:[(0,r.jsx)(g.pj,{className:"truncate",children:e.node.name}),(0,r.jsx)(g.pj,{className:"truncate",children:e.node.gitUrl}),(0,r.jsx)(g.pj,{className:"truncate",children:(0,r.jsx)("div",{className:"flex items-center gap-1.5",children:n?(0,r.jsxs)(p.u,{children:[(0,r.jsx)(p.aJ,{asChild:!0,children:(0,r.jsx)(o(),{href:"/jobs/detail?id=".concat(t.id),className:(0,s.d)({variant:"ghost",size:"icon"}),children:(0,r.jsx)(h.IconSpinner,{})})}),(0,r.jsx)(p._v,{children:"Navigate to job detail"})]}):(0,r.jsxs)(p.u,{children:[(0,r.jsx)(p.aJ,{asChild:!0,children:(0,r.jsx)(s.z,{size:"icon",variant:"ghost",onClick:()=>{var t;return $(null===(t=e.node.jobInfo)||void 0===t?void 0:t.command)},children:(0,r.jsx)(h.IconCirclePlay,{className:"h-5 w-5"})})}),(0,r.jsx)(p._v,{children:(0,r.jsx)("p",{children:"Run"})})]})})}),(0,r.jsx)(g.pj,{className:"flex justify-end",children:(0,r.jsx)("div",{className:"flex gap-1",children:(0,r.jsx)(s.z,{size:"icon",variant:"hover-destructive",onClick:()=>M(e.node.id,1===k.length),children:(0,r.jsx)(h.IconTrash,{})})})})]},e.node.id)})}):(0,r.jsx)(g.SC,{children:(0,r.jsx)(g.pj,{colSpan:4,className:"h-[100px] text-center",children:"No Data"})})})]}),P&&(0,r.jsx)(x.tl,{className:"my-4",children:(0,r.jsxs)(x.ng,{children:[(0,r.jsx)(x.nt,{children:(0,r.jsx)(x.dN,{disabled:!A,onClick:()=>{if(R<=1||f)return;let e=R-1;T(e),Z(e)}})}),(0,r.jsx)(x.nt,{children:(0,r.jsx)(x.$0,{disabled:!I,onClick:()=>{if(!I||f)return;let e=R+1;T(e),Z(e)}})})]})})]})}function R(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{}),(0,r.jsx)("div",{className:"mt-4 flex justify-end",children:(0,r.jsx)(o(),{href:"./git/new",className:(0,s.d)(),children:"Create"})})]})}},14522:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var r=n(43240);let i=(0,r.BX)("\n  mutation triggerJobRun($command: String!) {\n    triggerJobRun(command: $command)\n  }\n")},6230:function(e,t,n){"use strict";var r=n(36164),i=n(3546),o=n(24449),s=n(90379);t.Z=e=>{let{loading:t,fallback:n,delay:l,children:a}=e,[u,c]=i.useState(!t),[d]=(0,o.n)(u,null!=l?l:200);return(i.useEffect(()=>{t||u||c(!0)},[t]),d)?a:n||(0,r.jsx)(s.cg,{})}},90379:function(e,t,n){"use strict";n.d(t,{PF:function(){return a},cg:function(){return s},tB:function(){return l}});var r=n(36164),i=n(74248),o=n(3448);let s=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,i.cn)("space-y-3",t),...n,children:[(0,r.jsx)(o.O,{className:"h-4 w-full"}),(0,r.jsx)(o.O,{className:"h-4 w-full"}),(0,r.jsx)(o.O,{className:"h-4 w-full"}),(0,r.jsx)(o.O,{className:"h-4 w-full"})]})},l=e=>{let{className:t,...n}=e;return(0,r.jsx)(o.O,{className:(0,i.cn)("h-4 w-full",t),...n})},a=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,i.cn)("flex flex-col gap-3",t),...n,children:[(0,r.jsx)(o.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(o.O,{className:"h-4 w-full"}),(0,r.jsx)(o.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(o.O,{className:"h-4 w-full"})]})}},31458:function(e,t,n){"use strict";n.d(t,{d:function(){return a},z:function(){return u}});var r=n(36164),i=n(3546),o=n(74047),s=n(14375),l=n(74248);let a=(0,s.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,t)=>{let{className:n,variant:i,size:s,asChild:u=!1,...c}=e,d=u?o.g7:"button";return(0,r.jsx)(d,{className:(0,l.cn)(a({variant:i,size:s,className:n})),ref:t,...c})});u.displayName="Button"},49506:function(e,t,n){"use strict";n.d(t,{$0:function(){return v},dN:function(){return f},ng:function(){return u},nt:function(){return c},tl:function(){return a}});var r=n(36164),i=n(3546),o=n(74248),s=n(31458),l=n(81565);let a=e=>{let{className:t,...n}=e;return(0,r.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,o.cn)("mx-auto flex w-full justify-center",t),...n})};a.displayName="Pagination";let u=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("ul",{ref:t,className:(0,o.cn)("flex flex-row items-center gap-1",n),...i})});u.displayName="PaginationContent";let c=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("li",{ref:t,className:(0,o.cn)("",n),...i})});c.displayName="PaginationItem";let d=e=>{let{className:t,isActive:n,size:i="icon",...l}=e;return(0,r.jsx)("a",{"aria-current":n?"page":void 0,className:(0,o.cn)((0,s.d)({variant:n?"outline":"ghost",size:i}),t),...l})};d.displayName="PaginationLink";let f=e=>{let{className:t,disabled:n,...i}=e;return(0,r.jsxs)(d,{"aria-label":"Go to previous page",size:"default",className:(0,o.cn)("cursor-pointer gap-1 pl-2.5",n&&"cursor-not-allowed text-muted-foreground",t),...i,children:[(0,r.jsx)(l.IconChevronLeft,{className:"h-4 w-4"}),(0,r.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let v=e=>{let{className:t,disabled:n,...i}=e;return(0,r.jsxs)(d,{"aria-label":"Go to next page",size:"default",className:(0,o.cn)("cursor-pointer gap-1 pr-2.5",n&&"cursor-not-allowed text-muted-foreground",t),...i,children:[(0,r.jsx)("span",{children:"Next"}),(0,r.jsx)(l.IconChevronRight,{className:"h-4 w-4"})]})};v.displayName="PaginationNext"},3448:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});var r=n(36164),i=n(74248);function o(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...n})}},99047:function(e,t,n){"use strict";n.d(t,{RM:function(){return a},SC:function(){return c},iA:function(){return s},pj:function(){return f},ss:function(){return d},xD:function(){return l}});var r=n(36164),i=n(3546),o=n(74248);let s=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("table",{ref:t,className:(0,o.cn)("w-full caption-bottom text-sm",n),...i})});s.displayName="Table";let l=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("thead",{ref:t,className:(0,o.cn)("[&_tr]:border-b",n),...i})});l.displayName="TableHeader";let a=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,o.cn)("[&_tr:last-child]:border-0",n),...i})});a.displayName="TableBody";let u=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",n),...i})});u.displayName="TableFooter";let c=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("tr",{ref:t,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",n),...i})});c.displayName="TableRow";let d=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("th",{ref:t,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",n),...i})});d.displayName="TableHead";let f=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("td",{ref:t,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",n),...i})});f.displayName="TableCell";let v=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("caption",{ref:t,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",n),...i})});v.displayName="TableCaption"},29:function(e,t,n){"use strict";n.d(t,{_v:function(){return c},aJ:function(){return u},pn:function(){return l},u:function(){return a}});var r=n(36164),i=n(3546),o=n(44421),s=n(74248);let l=o.zt,a=o.fC,u=o.xz,c=i.forwardRef((e,t)=>{let{className:n,sideOffset:i=4,...l}=e;return(0,r.jsx)(o.VY,{ref:t,sideOffset:i,className:(0,s.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...l})});c.displayName=o.VY.displayName},21808:function(e,t,n){"use strict";n.d(t,{$6:function(){return o},L8:function(){return i},o0:function(){return r}});let r="name@yourcompany.com",i=20,o={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_LATEST_MSG:"_tabby_search_latest_msg"}},24449:function(e,t,n){"use strict";n.d(t,{S:function(){return l},n:function(){return a}});var r=n(3546),i=n(45391),o=n(16784);let s=e=>{let t=(0,o.d)(e);r.useEffect(()=>()=>{t.current()},[])};function l(e,t,n){let l=(0,o.d)(e),a=r.useMemo(()=>(0,i.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.current(...t)},t,n),[]);return s(()=>a.cancel()),{run:a,cancel:a.cancel,flush:a.flush}}function a(e,t,n){let[i,o]=r.useState(e),{run:s}=l(()=>{o(e)},t,n);return r.useEffect(()=>{s()},[e]),[i,o]}},16784:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(3546);function i(e){let t=r.useRef(e);return t.current=e,t}},70652:function(e,t,n){e.exports=n(54007)},29434:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r,i=n(3546),o=n(65292);let s=(r||(r=n.t(i,2)))["useId".toString()]||(()=>void 0),l=0;function a(e){let[t,n]=i.useState(s());return(0,o.b)(()=>{e||n(e=>null!=e?e:String(l++))},[e]),e||(t?`radix-${t}`:"")}},7600:function(e,t,n){"use strict";var r=n(48717).Z.Symbol;t.Z=r},17996:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7600),i=Object.prototype,o=i.hasOwnProperty,s=i.toString,l=r.Z?r.Z.toStringTag:void 0,a=function(e){var t=o.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(e){}var i=s.call(e);return r&&(t?e[l]=n:delete e[l]),i},u=Object.prototype.toString,c=r.Z?r.Z.toStringTag:void 0,d=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?a(e):u.call(e)}},64380:function(e,t){"use strict";var n="object"==typeof global&&global&&global.Object===Object&&global;t.Z=n},48717:function(e,t,n){"use strict";var r=n(64380),i="object"==typeof self&&self&&self.Object===Object&&self,o=r.Z||i||Function("return this")();t.Z=o},6670:function(e,t){"use strict";var n=/\s/;t.Z=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},45391:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(84639),i=n(48717),o=function(){return i.Z.Date.now()},s=n(91971),l=Math.max,a=Math.min,u=function(e,t,n){var i,u,c,d,f,v,m=0,h=!1,x=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function p(t){var n=i,r=u;return i=u=void 0,m=t,d=e.apply(r,n)}function j(e){var n=e-v,r=e-m;return void 0===v||n>=t||n<0||x&&r>=c}function b(){var e,n,r,i=o();if(j(i))return N(i);f=setTimeout(b,(e=i-v,n=i-m,r=t-e,x?a(r,c-n):r))}function N(e){return(f=void 0,g&&i)?p(e):(i=u=void 0,d)}function y(){var e,n=o(),r=j(n);if(i=arguments,u=this,v=n,r){if(void 0===f)return m=e=v,f=setTimeout(b,t),h?p(e):d;if(x)return clearTimeout(f),f=setTimeout(b,t),p(v)}return void 0===f&&(f=setTimeout(b,t)),d}return t=(0,s.Z)(t)||0,(0,r.Z)(n)&&(h=!!n.leading,c=(x="maxWait"in n)?l((0,s.Z)(n.maxWait)||0,t):c,g="trailing"in n?!!n.trailing:g),y.cancel=function(){void 0!==f&&clearTimeout(f),m=0,i=v=u=f=void 0},y.flush=function(){return void 0===f?d:N(o())},y}},84639:function(e,t){"use strict";t.Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},96786:function(e,t){"use strict";t.Z=function(e){return null!=e&&"object"==typeof e}},55357:function(e,t,n){"use strict";var r=n(17996),i=n(96786);t.Z=function(e){return"symbol"==typeof e||(0,i.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}},91971:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(6670),i=/^\s+/,o=n(84639),s=n(55357),l=0/0,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,f=function(e){if("number"==typeof e)return e;if((0,s.Z)(e))return l;if((0,o.Z)(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=(0,o.Z)(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,(0,r.Z)(t)+1).replace(i,""):t;var f=u.test(e);return f||c.test(e)?d(e.slice(2),f?2:8):a.test(e)?l:+e}}},function(e){e.O(0,[7998,5498,6312,4007,5384,1283,3449,2578,4421,9736,1565,3396,3375,5289,1744],function(){return e(e.s=7922)}),_N_E=e.O()}]);