import{j as V}from"./jsx-runtime-CkxqCPlQ.js";import{r as B}from"./index-DJO9vBfz.js";var a=(r=>(r.ELEVATED="ELEVATED",r.FILLED="FILLED",r.TONAL="TONAL",r.OUTLINED="OUTLINED",r.TEXT="TEXT",r))(a||{});const A={primary:"#007bff",primaryLight:"#66b3ff",primaryDark:"#0056b3",secondary:"#6c757d",secondaryLight:"#adb5bd",secondaryDark:"#495057",accent:"#ff4081",background:"#ffffff",surface:"#f8f9fa",error:"#dc3545",warning:"#ffc107",info:"#17a2b8",success:"#28a745",text:{primary:"#343a40",secondary:"#6c757d",disabled:"#adb5bd",hint:"#868e96"},grey:{50:"#f8f9fa",100:"#e9ecef",200:"#dee2e6",300:"#ced4da",400:"#adb5bd",500:"#868e96",600:"#495057",700:"#343a40",800:"#212529",900:"#000000"}},C={small:"0.75rem",medium:"1rem",large:"1.25rem"},F={none:"none",small:"4px",medium:"8px",large:"10px",round:"50%"},R={colors:A,fontSizes:C,spacing:r=>`${r*5/16}rem`,borderRadius:F},q=B.createContext({theme:R,setTheme:()=>{}}),j=()=>{const r=B.useContext(q);if(!r)throw new Error("useTheme must be used within a ThemeProvider");return r},D=({children:r,onClick:k,textTransform:w,type:O="button",color:t="primary",variant:S=a.FILLED})=>{const{theme:e}=j(),I={[a.FILLED]:{backgroundColor:e.colors[t],color:e.colors.background,border:"none",boxShadow:"none"},[a.OUTLINED]:{backgroundColor:"transparent",color:e.colors[t],border:`1px solid ${e.colors[t]}`,boxShadow:"none"},[a.TEXT]:{backgroundColor:"transparent",color:e.colors[t],border:"none",boxShadow:"none"},[a.ELEVATED]:{backgroundColor:e.colors[t],color:e.colors.background,border:"none",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)"}}[S],N={backgroundColor:e.colors.primaryDark,fontSize:e.fontSizes.small,textTransform:w||"none",textDecoration:"none",cursor:"pointer",color:e.colors.background,border:e.borderRadius.large,borderRadius:e.borderRadius.large,paddingRight:e.spacing(5),paddingLeft:e.spacing(5),height:"2.5rem",textAlign:"center",transition:"background-color 0.3s ease, color 0.3s ease",...I};return V.jsx("button",{type:O,onClick:k,style:N,children:r})};D.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"ButtonVariant"},description:"",defaultValue:{value:"ButtonVariant.FILLED",computed:!0}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},textTransform:{required:!1,tsType:{name:"union",raw:"'none' | 'uppercase' | 'lowercase' | 'capitalize'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'uppercase'"},{name:"literal",value:"'lowercase'"},{name:"literal",value:"'capitalize'"}]},description:""}}};const _={title:"Design System/Button",component:D,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},n={args:{children:"Button",variant:a.ELEVATED}},o={args:{children:"Button",variant:a.FILLED}},s={args:{children:"Button",variant:a.OUTLINED}},c={args:{children:"Button",variant:a.TEXT}},i={args:{children:"Button",variant:a.TONAL}};var u,d,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: ButtonVariant.ELEVATED
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: ButtonVariant.FILLED
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,b,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: ButtonVariant.OUTLINED
  }
}`,...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var E,h,y;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: ButtonVariant.TEXT
  }
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var L,v,x;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: ButtonVariant.TONAL
  }
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const $=["ElevatedButton","FilledButton","OutlinedButton","TextButton","TonalButton"];export{n as ElevatedButton,o as FilledButton,s as OutlinedButton,c as TextButton,i as TonalButton,$ as __namedExportsOrder,_ as default};
