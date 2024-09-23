(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1760],{18460:function(e,r,t){Promise.resolve().then(t.bind(t,67220))},67220:function(e,r,t){"use strict";t.r(r),t.d(r,{UserGroupContext:function(){return P},default:function(){return $}});var n=t(36164),s=t(3546),a=t(2578),l=t(40055),o=t(36758),i=t(98454),d=t(70410),u=t(31458),c=t(79972),f=t(81565),m=t(6230),p=t(90379),x=t(84381),h=t(5493),v=t(23782),N=t(43240),j=t(11634),g=t(30220),b=t(98150),y=t(82394);let w=(0,N.BX)("\n  mutation createUserGroup($input: CreateUserGroupInput!) {\n    createUserGroup(input: $input)\n  }\n"),C=v.Ry({name:v.Z_().trim()});function k(e){let{onSubmit:r,children:t}=e,[a,l]=s.useState(!1),o=(0,h.cI)({resolver:(0,x.F)(C)}),{isSubmitting:i}=o.formState,d=e=>{i||(e||setTimeout(()=>{o.reset()},500),l(e))},c=(0,j.D)(w,{form:o}),m=async e=>c({input:{name:e.name}}).then(e=>{var t;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.createUserGroup)&&(null==r||r(e.data.createUserGroup),d(!1))}).catch(()=>{});return(0,n.jsxs)(g.Vq,{open:a,onOpenChange:d,children:[(0,n.jsxs)(g.cZ,{children:[(0,n.jsx)(g.fK,{className:"gap-3",children:(0,n.jsx)(g.$N,{children:"Create Group"})}),(0,n.jsx)(b.l0,{...o,children:(0,n.jsx)("div",{className:"grid gap-2",children:(0,n.jsxs)("form",{className:"grid gap-6",onSubmit:o.handleSubmit(m),children:[(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsx)(b.Wi,{control:o.control,name:"name",render:e=>{let{field:r}=e;return(0,n.jsxs)(b.xJ,{children:[(0,n.jsx)(b.lX,{required:!0,children:"Name"}),(0,n.jsx)(b.pf,{children:"Group name need to be unique, and it cannot be changed after creation."}),(0,n.jsx)(b.NI,{children:(0,n.jsx)(y.I,{placeholder:"e.g backend-dev",autoCapitalize:"none",autoCorrect:"off",autoComplete:"off",...r})}),(0,n.jsx)(b.zG,{})]})}}),(0,n.jsx)(b.zG,{})]}),(0,n.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,n.jsx)(u.z,{type:"button",variant:"ghost",disabled:i,onClick:()=>d(!1),children:"Cancel"}),(0,n.jsxs)(u.z,{type:"submit",disabled:i,children:[i&&(0,n.jsx)(f.IconSpinner,{className:"mr-2"}),"Create"]})]})]})})})]}),(0,n.jsx)(g.hg,{asChild:!0,children:t})]})}var R=t(1544),I=t(73460),G=t(82030),z=t(36065),Y=t(84942),S=t(54594),A=t(99047),D=t(52569);let _=(0,N.BX)("\n  mutation DeleteUserGroupMembership($userGroupId: ID!, $userId: ID!) {\n    deleteUserGroupMembership(userGroupId: $userGroupId, userId: $userId)\n  }\n"),F=(0,N.BX)("\n  mutation UpsertUserGroupMembership($input: UpsertUserGroupMembershipInput!) {\n    upsertUserGroupMembership(input: $input)\n  }\n");function T(e){let{className:r,members:t}=e,{isServerAdmin:a,isGroupAdmin:l}=(0,s.useContext)(Z),[o,i]=(0,s.useState)(!1);return(0,n.jsxs)("div",{className:(0,R.cn)("flex flex-col gap-2 border-b px-1 py-2",r),children:[(0,n.jsx)("div",{className:"max-h-[286px] flex-1 overflow-auto",children:t.length||o?(0,n.jsx)(A.iA,{className:"table-fixed",children:(0,n.jsxs)(A.RM,{children:[t.map(e=>(0,n.jsx)(U,{member:e,onRemoveEmptyItem:()=>i(!1)},e.user.id)),o&&(0,n.jsx)(U,{onRemoveEmptyItem:()=>i(!1)})]})}):(0,n.jsx)("div",{className:"p-3 pl-4 text-muted-foreground",children:"No members"})}),(a||l)&&(0,n.jsx)("div",{className:"mb-2 ml-2 flex justify-start",children:(0,n.jsxs)(u.z,{variant:"outline",disabled:o,onClick:()=>{o||i(!0)},children:[(0,n.jsx)(f.IconPlus,{className:"mr-2"}),"Add Member"]})})]})}function U(e){let{member:r,onRemoveEmptyItem:t}=e,{isServerAdmin:l,isGroupAdmin:o,memberIds:i,userGroupId:d}=(0,s.useContext)(Z),c=(0,s.useRef)(null),[m,p]=(0,s.useState)(l?i.length?"0":"1":"0");(0,s.useEffect)(()=>{r&&r.isGroupAdmin!==("1"===m)&&p(r.isGroupAdmin?"1":"0")},[r]),(0,s.useEffect)(()=>{if(!r){var e;null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}},[]);let x=(0,j.D)(_),h=(0,j.D)(F),v=(e,r,t)=>h({input:r,extraParams:{user:t,isInsert:e}}).then(e=>{var r,n;if(!(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.upsertUserGroupMembership)){let r=(null==e?void 0:null===(n=e.error)||void 0===n?void 0:n.message)||"Failed to update ".concat(t.name||t.email);a.A.error(r),p(m);return}}).catch(e=>{a.A.error(e.message||"Failed to update ".concat(t.name||t.email)),p(m)}),N=l||o&&(!r||!r.isGroupAdmin);return(0,n.jsxs)(A.SC,{className:"border-0 !bg-background pl-1",ref:c,children:[(0,n.jsx)(A.pj,{children:(0,n.jsx)(O,{membership:r,onChange:(e,r)=>{v(!0,{userId:e,userGroupId:d,isGroupAdmin:"1"===m},(0,G.Z)(r,"id","email","createdAt","name")),t()}})}),(0,n.jsx)(A.pj,{className:"w-[30%]",children:(0,n.jsxs)(S.Ph,{onValueChange:e=>{p(e),r&&v(!1,{userGroupId:d,userId:r.user.id,isGroupAdmin:"1"===e},r.user)},value:m,disabled:!l,children:[(0,n.jsx)(S.i4,{className:"h-10",children:(0,n.jsx)(S.ki,{placeholder:"Select role"})}),(0,n.jsxs)(S.Bw,{children:[(0,n.jsx)(S.Ql,{value:"1",children:"Group Admin"}),(0,n.jsx)(S.Ql,{value:"0",children:"Group Member"})]})]})}),(0,n.jsx)(A.pj,{className:"w-[100px] text-right",children:N&&(0,n.jsx)(u.z,{size:"icon",variant:"hover-destructive",onClick:()=>{if(!r){t();return}x({userGroupId:d,userId:r.user.id}).then(e=>{var t,n;if(!(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.deleteUserGroupMembership)){let t=(null==e?void 0:null===(n=e.error)||void 0===n?void 0:n.message)||"Failed to delete ".concat(r.user.name||r.user.email);a.A.error(t);return}}).catch(e=>{a.A.error(e.message||"Failed to delete ".concat(r.user.name||r.user.email))})},children:(0,n.jsx)(f.IconTrash,{})})})]})}function O(e){let{membership:r,onChange:t}=e,a=null==r?void 0:r.user.id,{fetchingAllUsers:l,allUsers:o}=(0,s.useContext)(P),{memberIds:i}=(0,s.useContext)(Z),[d,c]=(0,s.useState)(!1),m=(0,s.useRef)(null),p=(0,s.useMemo)(()=>o.filter(e=>!i.includes(e.id)),[i,o]),x=()=>{requestAnimationFrame(()=>{m.current&&(m.current.scrollTop=0)})},h=e=>{c(!1),t(e,p.find(r=>r.id===e))};return(0,n.jsxs)(Y.J2,{open:d,onOpenChange:c,children:[(0,n.jsx)(Y.xo,{asChild:!0,children:(0,n.jsxs)(u.z,{variant:"outline",role:"combobox",className:(0,R.cn)("h-10 w-full justify-between font-normal",{"text-muted-foreground hover:text-muted-foreground":!a,"cursor-auto shadow-none hover:bg-background":!!a}),onClick:e=>{a&&e.preventDefault()},children:[l?"Loading...":a?(0,n.jsx)(M,{user:r.user}):"Select member",!a&&(0,n.jsx)(f.IconChevronUpDown,{})]})}),(0,n.jsx)(Y.yk,{className:"w-[var(--radix-popover-trigger-width)] p-0",align:"start",side:"bottom",children:(0,n.jsxs)(z.mY,{className:"transition-all",children:[(0,n.jsx)(z.sZ,{placeholder:"Search member...",onValueChange:()=>{x()}}),(0,n.jsxs)(z.e8,{className:"max-h-[30vh]",ref:m,children:[(0,n.jsx)(z.rb,{children:l?(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(f.IconSpinner,{className:"h-6 w-6"})}):"No user found"}),(0,n.jsx)(z.fu,{children:p.map(e=>(0,n.jsx)(z.di,{onSelect:h,value:e.id,children:(0,n.jsx)(M,{user:e})},e.id))})]})]})})]})}function M(e){let{user:r}=e,t=r.name;return(0,n.jsxs)("div",{className:"flex h-10 items-center gap-2",children:[(0,n.jsx)(D.Yt,{user:r,className:"h-7 w-7"}),(0,n.jsxs)("span",{className:"space-x-1",children:[r.name,(0,n.jsx)("span",{className:(0,R.cn)("text-sm",{"text-muted-foreground":!!t}),children:t?"(".concat(r.email,")"):r.email})]})]})}let V=(0,N.BX)("\n  mutation DeleteUserGroup($id: ID!) {\n    deleteUserGroup(id: $id)\n  }\n"),Z=(0,s.createContext)({});function E(e){let{onSuccess:r,userGroup:t,isLastItem:l}=e,{me:o}=(0,s.useContext)(P),i=!!((null==o?void 0:o.isOwner)||(null==o?void 0:o.isAdmin)),d=(0,s.useMemo)(()=>{let e=t.members.filter(e=>e.isGroupAdmin).map(e=>e.user.id);return null!=o&&!!o.id&&e.includes(o.id)},[o,t]),[c,m]=(0,s.useState)(!1),[p,x]=(0,s.useState)(!1),[h,v]=(0,s.useState)(!1),N=(0,j.D)(V),g=(0,s.useMemo)(()=>t.members.map(e=>e.user.id),[t.members]),b=t.members.length;return(0,n.jsx)(Z.Provider,{value:{isGroupAdmin:d,isServerAdmin:i,memberIds:g,userGroupId:t.id},children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:(0,R.cn)("flex cursor-pointer items-center gap-2 border-b p-3 hover:bg-muted/50",{"border-b-0":!!l&&!p}),onClick:()=>x(!p),children:[(0,n.jsx)(f.IconChevronRight,{className:(0,R.cn)("shrink-0 transition-all",{"rotate-90":p})}),(0,n.jsx)(f.IconUsers,{className:"shrink-0"}),(0,n.jsxs)("div",{className:"flex flex-1 items-center gap-2 overflow-hidden",children:[(0,n.jsx)("div",{className:"font-semibold",children:t.name}),(0,n.jsx)("span",{className:"text-sm text-muted-foreground",children:"(".concat(b," member").concat(b>1?"s":"",")")})]}),(0,n.jsx)("div",{onClick:e=>e.stopPropagation(),className:"flex items-center gap-2",children:i&&(0,n.jsxs)(I.aR,{open:c,onOpenChange:m,children:[(0,n.jsx)(I.vW,{asChild:!0,children:(0,n.jsx)(u.z,{size:"icon",variant:"hover-destructive",children:(0,n.jsx)(f.IconTrash,{})})}),(0,n.jsxs)(I._T,{children:[(0,n.jsxs)(I.fY,{children:[(0,n.jsx)(I.f$,{children:"Delete this group"}),(0,n.jsxs)(I.yT,{children:["Are you sure you want to delete user group",(0,n.jsx)("span",{className:"ml-1 font-bold",children:'"'.concat(t.name,'"')}),"? This operation is not revertible."]})]}),(0,n.jsxs)(I.xo,{children:[(0,n.jsx)(I.le,{children:"Cancel"}),(0,n.jsxs)(I.OL,{className:(0,u.d)({variant:"destructive"}),onClick:e=>{e.preventDefault(),v(!0),N({id:t.id}).then(e=>{var t,n;if(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.deleteUserGroup)null==r||r(),x(!1);else{let r=(null==e?void 0:null===(n=e.error)||void 0===n?void 0:n.message)||"Failed to delete";a.A.error(r)}}).catch(e=>{let r=(null==e?void 0:e.message)||"Failed to delete";a.A.error(r)}).finally(()=>{v(!1)})},children:[h&&(0,n.jsx)(f.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Yes, delete it"]})]})]})]})})]}),p&&(0,n.jsx)(T,{members:t.members,userGroupId:t.id,userGroupName:t.name,className:l?"border-b-0":void 0})]})})}let P=s.createContext({});function $(){let[e,r]=(0,o.d)(),[{data:t,error:x,fetching:h},v]=(0,l.aM)({query:d.gI}),[{data:N}]=(0,i.P)(),j=!!((null==N?void 0:N.me.isOwner)||(null==N?void 0:N.me.isAdmin));s.useEffect(()=>{(null==x?void 0:x.message)&&a.A.error(x.message)},[x]);let g=async()=>{v()},b=null==t?void 0:t.userGroups;return(0,n.jsxs)(P.Provider,{value:{allUsers:e,fetchingAllUsers:r,refreshUserGroups:v,me:null==N?void 0:N.me},children:[(0,n.jsx)(c.Ol,{className:"px-0 pt-0",children:(0,n.jsxs)(c.ll,{className:"flex min-h-[2rem] items-start justify-between",children:["Groups",(null==N?void 0:N.me.isAdmin)&&(0,n.jsx)(k,{onSubmit:g,children:(0,n.jsxs)(u.z,{className:"gap-1",children:[(0,n.jsx)(f.IconPlus,{}),"Create"]})})]})}),(0,n.jsx)(m.Z,{loading:h,fallback:(0,n.jsx)(p.cg,{}),children:(null==b?void 0:b.length)?(0,n.jsx)("div",{className:"overflow-hidden rounded-lg border",children:b.map((e,r)=>(0,n.jsx)(E,{userGroup:e,onSuccess:()=>v(),isLastItem:r===b.length-1},e.id))}):(0,n.jsxs)("div",{className:"flex flex-col items-center gap-4 rounded-lg border-4 border-dashed py-8",children:[(0,n.jsx)("div",{children:"No Data"}),j&&(0,n.jsx)("div",{className:"mb-4 flex justify-end",children:(0,n.jsx)(k,{onSubmit:g,children:(0,n.jsx)(u.z,{type:"button",children:"Create"})})})]})})]})}},6230:function(e,r,t){"use strict";var n=t(36164),s=t(3546),a=t(24449),l=t(90379);r.Z=e=>{let{loading:r,fallback:t,delay:o,children:i}=e,[d,u]=s.useState(!r),[c]=(0,a.n)(d,null!=o?o:200);return(s.useEffect(()=>{r||d||u(!0)},[r]),c)?i:t||(0,n.jsx)(l.cg,{})}},90379:function(e,r,t){"use strict";t.d(r,{PF:function(){return i},cg:function(){return l},tB:function(){return o}});var n=t(36164),s=t(1544),a=t(3448);let l=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,s.cn)("space-y-3",r),...t,children:[(0,n.jsx)(a.O,{className:"h-4 w-full"}),(0,n.jsx)(a.O,{className:"h-4 w-full"}),(0,n.jsx)(a.O,{className:"h-4 w-full"}),(0,n.jsx)(a.O,{className:"h-4 w-full"})]})},o=e=>{let{className:r,...t}=e;return(0,n.jsx)(a.O,{className:(0,s.cn)("h-4 w-full",r),...t})},i=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",r),...t,children:[(0,n.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(a.O,{className:"h-4 w-full"}),(0,n.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(a.O,{className:"h-4 w-full"})]})}},73460:function(e,r,t){"use strict";t.d(r,{OL:function(){return v},_T:function(){return f},aR:function(){return i},f$:function(){return x},fY:function(){return m},le:function(){return N},vW:function(){return d},xo:function(){return p},yT:function(){return h}});var n=t(36164),s=t(3546),a=t(28961),l=t(1544),o=t(31458);let i=a.fC,d=a.xz,u=e=>{let{className:r,children:t,...s}=e;return(0,n.jsx)(a.h_,{className:(0,l.cn)(r),...s,children:(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-end justify-center sm:items-center",children:t})})};u.displayName=a.h_.displayName;let c=s.forwardRef((e,r)=>{let{className:t,children:s,...o}=e;return(0,n.jsx)(a.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in",t),...o,ref:r})});c.displayName=a.aV.displayName;let f=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsxs)(u,{children:[(0,n.jsx)(c,{}),(0,n.jsx)(a.VY,{ref:r,className:(0,l.cn)("fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",t),...s})]})});f.displayName=a.VY.displayName;let m=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-2 text-center sm:text-left",r),...t})};m.displayName="AlertDialogHeader";let p=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",r),...t})};p.displayName="AlertDialogFooter";let x=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.Dx,{ref:r,className:(0,l.cn)("text-lg font-semibold",t),...s})});x.displayName=a.Dx.displayName;let h=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.dk,{ref:r,className:(0,l.cn)("text-sm text-muted-foreground",t),...s})});h.displayName=a.dk.displayName;let v=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.aU,{ref:r,className:(0,l.cn)((0,o.d)(),t),...s})});v.displayName=a.aU.displayName;let N=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.$j,{ref:r,className:(0,l.cn)((0,o.d)({variant:"outline"}),"mt-2 sm:mt-0",t),...s})});N.displayName=a.$j.displayName},31458:function(e,r,t){"use strict";t.d(r,{d:function(){return i},z:function(){return d}});var n=t(36164),s=t(3546),a=t(74047),l=t(14375),o=t(1544);let i=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,r)=>{let{className:t,variant:s,size:l,asChild:d=!1,...u}=e,c=d?a.g7:"button";return(0,n.jsx)(c,{className:(0,o.cn)(i({variant:s,size:l,className:t})),ref:r,...u})});d.displayName="Button"},79972:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},Zb:function(){return l},aY:function(){return u},eW:function(){return c},ll:function(){return i}});var n=t(36164),s=t(3546),a=t(1544);let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s})});l.displayName="Card";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",t),...s})});o.displayName="CardHeader";let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("h3",{ref:r,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})});i.displayName="CardTitle";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("p",{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})});d.displayName="CardDescription";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("p-6 pt-0",t),...s})});u.displayName="CardContent";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex items-center p-6 pt-0",t),...s})});c.displayName="CardFooter"},36065:function(e,r,t){"use strict";t.d(r,{di:function(){return p},e8:function(){return u},fu:function(){return f},mY:function(){return i},rb:function(){return c},sZ:function(){return d},zz:function(){return m}});var n=t(36164),s=t(3546),a=t(53241),l=t(93170),o=t(1544);t(30220);let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.mY,{ref:r,className:(0,o.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",t),...s})});i.displayName=a.mY.displayName;let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,n.jsx)(l.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,n.jsx)(a.mY.Input,{ref:r,className:(0,o.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",t),...s})]})});d.displayName=a.mY.Input.displayName;let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.mY.List,{ref:r,className:(0,o.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",t),...s})});u.displayName=a.mY.List.displayName;let c=s.forwardRef((e,r)=>(0,n.jsx)(a.mY.Empty,{ref:r,className:"py-6 text-center text-sm",...e}));c.displayName=a.mY.Empty.displayName;let f=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.mY.Group,{ref:r,className:(0,o.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",t),...s})});f.displayName=a.mY.Group.displayName;let m=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.mY.Separator,{ref:r,className:(0,o.cn)("-mx-1 h-px bg-border",t),...s})});m.displayName=a.mY.Separator.displayName;let p=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.mY.Item,{ref:r,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-accent aria-selected:text-accent-foreground",t),...s})});p.displayName=a.mY.Item.displayName},30220:function(e,r,t){"use strict";t.d(r,{$N:function(){return x},Be:function(){return h},Vq:function(){return i},cN:function(){return p},cZ:function(){return f},fK:function(){return m},hg:function(){return d}});var n=t(36164),s=t(3546),a=t(4318),l=t(1663),o=t(1544);let i=a.fC,d=a.xz,u=a.h_;a.x8;let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.aV,{ref:r,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s})});c.displayName=a.aV.displayName;let f=s.forwardRef((e,r)=>{let{className:t,children:s,...i}=e;return(0,n.jsxs)(u,{children:[(0,n.jsx)(c,{}),(0,n.jsxs)(a.VY,{ref:r,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...i,children:[s,(0,n.jsxs)(a.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(l.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=a.VY.displayName;let m=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",r),...t})};m.displayName="DialogHeader";let p=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",r),...t})};p.displayName="DialogFooter";let x=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.Dx,{ref:r,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",t),...s})});x.displayName=a.Dx.displayName;let h=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.dk,{ref:r,className:(0,o.cn)("text-sm text-muted-foreground",t),...s})});h.displayName=a.dk.displayName},98150:function(e,r,t){"use strict";t.d(r,{NI:function(){return h},Wi:function(){return c},l0:function(){return d},lX:function(){return x},pf:function(){return v},xJ:function(){return p},zG:function(){return N}});var n=t(36164),s=t(3546),a=t(74047),l=t(5493),o=t(1544),i=t(5266);let d=l.RV,u=s.createContext({}),c=e=>{let{...r}=e;return(0,n.jsx)(u.Provider,{value:{name:r.name},children:(0,n.jsx)(l.Qr,{...r})})},f=()=>{let e=s.useContext(u),r=s.useContext(m),{getFieldState:t,formState:n}=(0,l.Gc)(),a=e.name||"root",o=t(a,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:i}=r;return{id:i,name:a,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...o}},m=s.createContext({}),p=s.forwardRef((e,r)=>{let{className:t,...a}=e,l=s.useId();return(0,n.jsx)(m.Provider,{value:{id:l},children:(0,n.jsx)("div",{ref:r,className:(0,o.cn)("space-y-2",t),...a})})});p.displayName="FormItem";let x=s.forwardRef((e,r)=>{let{className:t,required:s,...a}=e,{error:l,formItemId:d}=f();return(0,n.jsx)(i._,{ref:r,className:(0,o.cn)(l&&"text-destructive",s&&'after:ml-0.5 after:text-destructive after:content-["*"]',t),htmlFor:d,...a})});x.displayName="FormLabel";let h=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:l,formDescriptionId:o,formMessageId:i}=f();return(0,n.jsx)(a.g7,{ref:r,id:l,"aria-describedby":s?"".concat(o," ").concat(i):"".concat(o),"aria-invalid":!!s,...t})});h.displayName="FormControl";let v=s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:a}=f();return(0,n.jsx)("div",{ref:r,id:a,className:(0,o.cn)("text-sm text-muted-foreground",t),...s})});v.displayName="FormDescription";let N=s.forwardRef((e,r)=>{let{className:t,children:s,...a}=e,{error:l,formMessageId:i}=f(),d=l?String(null==l?void 0:l.message):s;return d?(0,n.jsx)("p",{ref:r,id:i,className:(0,o.cn)("text-sm font-medium text-destructive",t),...a,children:d}):null});N.displayName="FormMessage"},82394:function(e,r,t){"use strict";t.d(r,{I:function(){return l}});var n=t(36164),s=t(3546),a=t(1544);let l=s.forwardRef((e,r)=>{let{className:t,type:s,...l}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...l})});l.displayName="Input"},5266:function(e,r,t){"use strict";t.d(r,{_:function(){return d}});var n=t(36164),s=t(3546),a=t(90893),l=t(14375),o=t(1544);let i=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.f,{ref:r,className:(0,o.cn)(i(),t),...s})});d.displayName=a.f.displayName},84942:function(e,r,t){"use strict";t.d(r,{J2:function(){return o},i9:function(){return u},tW:function(){return c},xo:function(){return i},xp:function(){return d},yk:function(){return f}});var n=t(36164),s=t(3546),a=t(83299),l=t(1544);let o=a.fC,i=a.xz,d=a.x8,u=a.h_,c=a.ee,f=s.forwardRef((e,r)=>{let{className:t,sideOffset:s=4,...o}=e;return(0,n.jsx)(a.VY,{ref:r,sideOffset:s,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...o})});f.displayName=a.VY.displayName},54594:function(e,r,t){"use strict";t.d(r,{Bw:function(){return f},DI:function(){return d},Ph:function(){return i},Ql:function(){return p},U$:function(){return x},i4:function(){return c},ki:function(){return u}});var n=t(36164),s=t(3546),a=t(31889),l=t(1544),o=t(81565);let i=a.fC,d=a.ZA,u=a.B4,c=s.forwardRef((e,r)=>{let{className:t,children:s,...i}=e;return(0,n.jsxs)(a.xz,{ref:r,className:(0,l.cn)("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...i,children:[s,(0,n.jsx)(a.JO,{asChild:!0,children:(0,n.jsx)(o.IconChevronUpDown,{className:"opacity-50"})})]})});c.displayName=a.xz.displayName;let f=s.forwardRef((e,r)=>{let{className:t,children:s,position:o="popper",...i}=e;return(0,n.jsx)(a.h_,{children:(0,n.jsx)(a.VY,{ref:r,className:(0,l.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80","popper"===o&&"translate-y-1",t),position:o,...i,children:(0,n.jsx)(a.l_,{className:(0,l.cn)("p-1","popper"===o&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s})})})});f.displayName=a.VY.displayName;let m=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.__,{ref:r,className:(0,l.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...s})});m.displayName=a.__.displayName;let p=s.forwardRef((e,r)=>{let{className:t,children:s,isPlaceHolder:i,...d}=e;return(0,n.jsxs)(a.ck,{ref:r,className:(0,l.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...d,children:[!i&&(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(a.wU,{children:(0,n.jsx)(o.IconCheck,{className:"h-4 w-4"})})}),(0,n.jsx)(a.eT,{children:s})]})});p.displayName=a.ck.displayName;let x=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.Z0,{ref:r,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",t),...s})});x.displayName=a.Z0.displayName},3448:function(e,r,t){"use strict";t.d(r,{O:function(){return a}});var n=t(36164),s=t(1544);function a(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",r),...t})}},99047:function(e,r,t){"use strict";t.d(r,{RM:function(){return i},SC:function(){return u},iA:function(){return l},pj:function(){return f},ss:function(){return c},xD:function(){return o}});var n=t(36164),s=t(3546),a=t(1544);let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("table",{ref:r,className:(0,a.cn)("w-full caption-bottom text-sm",t),...s})});l.displayName="Table";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("thead",{ref:r,className:(0,a.cn)("[&_tr]:border-b",t),...s})});o.displayName="TableHeader";let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tbody",{ref:r,className:(0,a.cn)("[&_tr:last-child]:border-0",t),...s})});i.displayName="TableBody";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tfoot",{ref:r,className:(0,a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s})});d.displayName="TableFooter";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tr",{ref:r,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s})});u.displayName="TableRow";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("th",{ref:r,className:(0,a.cn)("h-12 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...s})});c.displayName="TableHead";let f=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("td",{ref:r,className:(0,a.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0",t),...s})});f.displayName="TableCell";let m=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("caption",{ref:r,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",t),...s})});m.displayName="TableCaption"},52569:function(e,r,t){"use strict";t.d(r,{SQ:function(){return b},Yt:function(){return g},nY:function(){return j}});var n=t(36164),s=t(3546),a=t(87782),l=t(21454),o=t(36327),i=t(98454),d=t(3765),u=t(1544),c=t(66612);let f=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(c.fC,{ref:r,className:(0,u.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...s})});f.displayName=c.fC.displayName;let m=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(c.Ee,{ref:r,className:(0,u.cn)("aspect-square h-full w-full",t),...s})});m.displayName=c.Ee.displayName;let p=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(c.NY,{ref:r,className:(0,u.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...s})});p.displayName=c.NY.displayName;var x=t(3448),h=t(30410).lW;let v="not_found",N=!0,j=e=>{N=!0,(0,l.JG)("/avatar/".concat(e))};function g(e){var r;let{user:t,className:l,fallback:i}=e,c=null==t?void 0:t.id,{data:j,isLoading:g,error:b}=(0,o.Z)(c?"/avatar/".concat(c):null,e=>{if(N)return(0,d.Z)(e,{responseFormatter:async e=>{let r=await e.blob(),t=h.from(await r.arrayBuffer());return"data:image/png;base64,".concat(t.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(v)}})}),y=s.useMemo(()=>{if(null==t?void 0:t.email)return(0,a.B)(t.email)},[null==t?void 0:t.email]);return g?(0,n.jsx)(x.O,{className:(0,u.cn)("h-16 w-16 rounded-full",l)}):((null==b?void 0:b.message)===v&&(N=!1),j||y||!i)?!j&&y?(0,n.jsx)(a.Z,{className:(0,u.cn)("h-16 w-16",l),...y}):(0,n.jsxs)(f,{className:(0,u.cn)("h-16 w-16",l),children:[(0,n.jsx)(m,{src:j,alt:null==t?void 0:t.email,className:"object-cover"}),(0,n.jsx)(p,{children:null==t?void 0:null===(r=t.email)||void 0===r?void 0:r.substring(0,2)})]}):i}function b(e){let[{data:r}]=(0,i.P)();return(0,n.jsx)(g,{user:null==r?void 0:r.me,...e})}},36758:function(e,r,t){"use strict";t.d(r,{d:function(){return l}});var n=t(3546),s=t(40055),a=t(70410);function l(){let[{data:e,fetching:r,error:t}]=(0,s.aM)({query:a.TH}),l=(0,n.useMemo)(()=>{var r;return null!==(r=null==e?void 0:e.users.edges.map(e=>e.node))&&void 0!==r?r:[]},[null==e?void 0:e.users]);return[l,r,t]}},24449:function(e,r,t){"use strict";t.d(r,{S:function(){return o},n:function(){return i}});var n=t(3546),s=t(45391),a=t(16784);let l=e=>{let r=(0,a.d)(e);n.useEffect(()=>()=>{r.current()},[])};function o(e,r,t){let o=(0,a.d)(e),i=n.useMemo(()=>(0,s.Z)(function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return o.current(...r)},r,t),[]);return l(()=>{var e;null==t||null===(e=t.onUnmount)||void 0===e||e.call(t,i),i.cancel()}),{run:i,cancel:i.cancel,flush:i.flush}}function i(e,r,t){let[s,a]=n.useState(e),{run:l}=o(()=>{a(e)},r,t);return n.useEffect(()=>{l()},[e]),[s,a]}},16784:function(e,r,t){"use strict";t.d(r,{d:function(){return s}});var n=t(3546);function s(e){let r=n.useRef(e);return r.current=e,r}},98454:function(e,r,t){"use strict";t.d(r,{P:function(){return l}});var n=t(40055),s=t(43240);let a=(0,s.BX)("\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isOwner\n      isPasswordSet\n      name\n    }\n  }\n"),l=()=>(0,n.aM)({query:a})},3765:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(44745),s=t(57778),a=t(79716),l=t(91302),o=t(66794);async function i(e,r){var t;let n=null!==(t=null==r?void 0:r.customFetch)&&void 0!==t?t:window.fetch;if(function(e){var r;if(e.startsWith("/oauth/providers"))return!1;let t=null===(r=(0,o.bW)())||void 0===r?void 0:r.accessToken;if(!t)return!0;try{let{exp:e}=(0,a.o)(t);return(0,o.pw)(e)}catch(e){return!0}}(e))return o.gN.refreshToken(d).then(t=>f(e,r));let s=await n(e,u(r));return 401===s.status?(o.gN.clearAccessToken(),o.gN.refreshToken(d).then(t=>f(e,r))):m(s,r)}async function d(){var e,r;let t=null===(e=(0,o.bW)())||void 0===e?void 0:e.refreshToken;if(!t)return;let n=await c(t);return null==n?void 0:null===(r=n.data)||void 0===r?void 0:r.refreshToken}function u(e){var r;let t=new Headers(null==e?void 0:e.headers);return t.append("authorization","Bearer ".concat(null===(r=(0,o.bW)())||void 0===r?void 0:r.accessToken)),{...e||{},headers:t}}async function c(e){let r=new n.KU({url:"/graphql",requestPolicy:"network-only",exchanges:[n.Ek]}),t=r.createRequestOperation("mutation",(0,s.h)(l.Dp,{refreshToken:e}));return r.executeMutation(t)}function f(e,r){var t;let n=null!==(t=null==r?void 0:r.customFetch)&&void 0!==t?t:window.fetch;return n(e,u(r)).then(e=>m(e,r))}function m(e,r){return(null==e?void 0:e.ok)?(null==r?void 0:r.responseFormatter)?r.responseFormatter(e):(null==r?void 0:r.responseFormat)==="blob"?e.blob():e.json():(null==r?void 0:r.errorHandler)?r.errorHandler(e):void 0}}},function(e){e.O(0,[1386,55,1058,1350,3643,3449,2578,9421,240,2287,1454,8961,4546,426,4318,9275,1889,7657,1544,1565,3240,3396,3375,5289,1744],function(){return e(e.s=18460)}),_N_E=e.O()}]);