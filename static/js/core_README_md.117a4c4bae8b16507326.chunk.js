(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([["core_README_md"],{32719:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSimpleSelector=t.useSimpleContext=t.SimpleProvider=t.createSimpleHooksSelector=t.createSimpleHooksContext=t.createSimpleProvider=t.createSimpleContext=void 0;let l=n("73156"),o=n("33884"),r=n("96879");t.createSimpleContext=()=>(0,l.createContext)([new o.ProviderInstance]);t.createSimpleProvider=e=>function(t){let{initalValue:n,instance:r,children:a}=t,[u]=(0,o.useSimpleProviderInstance)(r);return(0,l.useMemo)(()=>u.init(n),[]),(0,l.createElement)(e.Provider,{value:[u],children:a})};t.createSimpleHooksContext=e=>()=>(0,l.useContext)(e);t.createSimpleHooksSelector=e=>(0,r.Utils_createSelectorHook)(e);let a=(0,t.createSimpleContext)();t.SimpleProvider=(0,t.createSimpleProvider)(a),t.useSimpleContext=(0,t.createSimpleHooksContext)(a),t.useSimpleSelector=(0,t.createSimpleHooksSelector)(t.useSimpleContext)},33884:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSimpleProviderInstance=t.ProviderInstance=void 0;let l=n("73156"),o=n("96879");class r extends o.Utils_Selector{store={};constructor(){super()}init=e=>{this.store=e||{}};update=(e,t=!0)=>{"[object Object]"===Object.prototype.toString.call(e)&&(Object.entries(e).forEach(([e,t])=>{this.store[e]=t}),Object.keys(e).length&&t&&this._Utils_create_bathRunSelector())};getValue=()=>this.store}t.ProviderInstance=r;t.useSimpleProviderInstance=e=>{let t=(0,l.useRef)(null);return!t.current&&(e?t.current=e:t.current=new r),[t.current]}},22832:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSimpleReducer=void 0;let l=n("35685"),o=n("73156"),r=n("30784");l.__exportStar(n("30784"),t);t.useSimpleReducer=(e={},t)=>{let[n]=(0,r.useSimpleReducerInstance)(t);return(0,o.useMemo)(()=>n.init(e),[]),[n.getValue(),n.updateData,n]}},30784:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSimpleReducerInstance=t.SimpleReducerInstance=void 0;let l=n("73156");class o{_update;store={};constructor(e){this._update=e}init=e=>{this.store=e||{}};update=e=>{"[object Object]"===Object.prototype.toString.call(e)&&Object.entries(e).forEach(([e,t])=>{this.store[e]=t})};updateData=e=>{this.update(e),this._update?.(e)};getValue=()=>this.store;get instance(){return{getValue:this.getValue,updateData:this.updateData,update:this.update,init:this.init}}}t.SimpleReducerInstance=o;t.useSimpleReducerInstance=e=>{let t=(0,l.useRef)(null),[,n]=(0,l.useState)({}),r=(0,l.useRef)(n);return r.current=n,!t.current&&(e?t.current=e:t.current=new o(r.current).instance),[t.current]}},98922:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let l=n("35685");l.__exportStar(n("22832"),t),l.__exportStar(n("32719"),t)},96879:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Utils_createSelectorHook=t.Utils_Selector=void 0;let l=n("73156"),o=n("30620");class r{selectorMaps=new Map([]);_Utils_create_registerSelector=(e,t,n,l)=>{let o=t(this);return this.selectorMaps.set(e,{preValue:o,selector:t,updateData:n,equalityFn:l}),{data:o,unMount:()=>{this.selectorMaps.delete(e)}}};_Utils_create_bathRunSelector=()=>{this.selectorMaps.forEach(e=>{let t=e.selector(this),n=!1;"function"==typeof e.equalityFn&&(n=e.equalityFn?.(e.preValue,t)),e.preValue=t,!n&&e.updateData(t)})};_Utils_create_getSelectorValue=e=>{let t=this.selectorMaps.get(e);if(t){let n=t?.selector(this);t.preValue=n,this.selectorMaps.set(e,t)}return this.selectorMaps.get(e)?.preValue}}t.Utils_Selector=r;t.Utils_createSelectorHook=e=>function(t,n=o.Utils_isEqual){let[r]=e(),[,a]=(0,l.useState)({}),u=(0,l.useRef)(),s=(0,l.useRef)(t);s.current=t;let c=(0,l.useRef)(Symbol("useSelector"));u.current=()=>a({});let i=(0,l.useRef)(r._Utils_create_registerSelector(c.current,s.current,u.current,n));return(0,l.useEffect)(()=>()=>i.current?.unMount(),[]),r._Utils_create_getSelectorValue(c.current)}},30620:function(e,t,n){"use strict";function l(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}Object.defineProperty(t,"__esModule",{value:!0}),t.Utils_isEqual=void 0;t.Utils_isEqual=function(e,t){if(l(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(let o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!l(e[n[o]],t[n[o]]))return!1;return!0}},11771:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var l={components:{5:function(){Object.defineProperty(t,"__esModule",{value:!0});let e=function(e){return e&&e.__esModule?e:{default:e}}(n("73156")),l=n("98922");return()=>{let[t,n,o]=(0,l.useSimpleReducer)({value:""});return console.log("useSimpleReducer===>",t,n,o),e.default.createElement("div",null,e.default.createElement("input",{value:t.value,onInput:e=>{let t=e.target.value;n({value:t})}}))}}(),37:function(){Object.defineProperty(t,"__esModule",{value:!0});let e=function(e){return e&&e.__esModule?e:{default:e}}(n("73156")),l=n("98922"),o=(0,l.createSimpleContext)(),r=(0,l.createSimpleProvider)(o),a=(0,l.createSimpleHooksContext)(o),u=(0,l.createSimpleHooksSelector)(a),s=()=>{let[t]=a(),n=u(e=>({...e.store}));return console.log("value===案例一==>",n,t),e.default.createElement("div",null,e.default.createElement("input",{value:n.value,placeholder:"请输入value",onInput:e=>{let n=e.target.value;t.update({value:n})}}))},c=()=>{let[t]=a(),n=u(e=>e?.store?.value2);return console.log("value2====案例一==>",n,t),e.default.createElement("div",null,e.default.createElement("input",{value:n,placeholder:"请输入value2",onInput:e=>{let n=e.target.value;t.update({value2:n})}}))};return()=>e.default.createElement(r,{initalValue:{value:"",value2:""}},e.default.createElement(s,null),e.default.createElement(c,null))}(),100:function(){Object.defineProperty(t,"__esModule",{value:!0});let e=function(e){return e&&e.__esModule?e:{default:e}}(n("73156")),l=n("98922"),o=()=>{let[t]=(0,l.useSimpleContext)(),n=(0,l.useSimpleSelector)(e=>({...e.store}));return console.log("value===案例二==>",n,t),e.default.createElement("div",null,e.default.createElement("input",{value:n.value,placeholder:"请输入value",onInput:e=>{let n=e.target.value;t.update({value:n})}}))},r=()=>{let[t]=(0,l.useSimpleContext)(),n=(0,l.useSimpleSelector)(e=>e?.store?.value2);return console.log("value2====案例二=>",n,t),e.default.createElement("div",null,e.default.createElement("input",{value:n,placeholder:"请输入value2",onInput:e=>{let n=e.target.value;t.update({value2:n})}}))};return()=>e.default.createElement(l.SimpleProvider,{initalValue:{value:"",value2:""}},e.default.createElement(o,null),e.default.createElement(r,null))}()},data:{5:{name:5,meta:{},code:'"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});const _react=_interop_require_default(require("react"));const _simplehooks=require("@carefrees/simple-hooks");function _interop_require_default(obj){return obj&&obj.__esModule?obj:{default:obj}}const Demo=()=>{const[store,dispatch,instance]=(0,_simplehooks.useSimpleReducer)({value:""});console.log("useSimpleReducer===>",store,dispatch,instance);return _react.default.createElement("div",null,_react.default.createElement("input",{value:store.value,onInput:event=>{const value=event.target.value;dispatch({value})}}))};const BaseCode_Export__default__value=Demo;\nreturn BaseCode_Export__default__value;\n',language:"tsx",value:'\nimport React from "react";\nimport { useSimpleReducer } from "@carefrees/simple-hooks";\n\nconst Demo = ()=>{\n\n  const [store,dispatch,instance] =  useSimpleReducer({ value:"" })\n  \n  console.log("useSimpleReducer===>",store,dispatch,instance)\n\n  return (<div>\n    <input \n      value={store.value} \n      onInput={(event)=>{\n        const value = event.target.value;\n        dispatch({ value })\n      }} \n    />\n  </div>)\n}\n\nexport default Demo;\n'},37:{name:37,meta:{},code:'"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});const _react=_interop_require_default(require("react"));const _simplehooks=require("@carefrees/simple-hooks");function _interop_require_default(obj){return obj&&obj.__esModule?obj:{default:obj}}const Context=(0,_simplehooks.createSimpleContext)();const Provider=(0,_simplehooks.createSimpleProvider)(Context);const useContext=(0,_simplehooks.createSimpleHooksContext)(Context);const useSelector=(0,_simplehooks.createSimpleHooksSelector)(useContext);const Demo=()=>{const[instance]=useContext();const store=useSelector(instance=>({...instance.store}));console.log("value===案例一==>",store,instance);return _react.default.createElement("div",null,_react.default.createElement("input",{value:store.value,placeholder:"请输入value",onInput:event=>{const value=event.target.value;instance.update({value})}}))};const Demo2=()=>{const[instance]=useContext();const value2=useSelector(instances=>instances?.store?.value2);console.log("value2====案例一==>",value2,instance);return _react.default.createElement("div",null,_react.default.createElement("input",{value:value2,placeholder:"请输入value2",onInput:event=>{const value2=event.target.value;instance.update({value2})}}))};const Warp=()=>{return _react.default.createElement(Provider,{initalValue:{value:"",value2:""}},_react.default.createElement(Demo,null),_react.default.createElement(Demo2,null))};const BaseCode_Export__default__value=Warp;\nreturn BaseCode_Export__default__value;\n',language:"tsx",value:'\nimport React from "react";\nimport { createSimpleContext, createSimpleProvider, createSimpleHooksContext , createSimpleHooksSelector } from "@carefrees/simple-hooks";\n\nconst Context  = createSimpleContext()\n\nconst Provider = createSimpleProvider(Context)\n\nconst useContext = createSimpleHooksContext(Context)\n\nconst useSelector = createSimpleHooksSelector(useContext)\n\nconst Demo = ()=>{\n  const [instance] = useContext()\n  const store = useSelector((instance)=>({...instance.store}))\n\n  console.log("value===案例一==>",store,instance)\n\n  return (<div>\n    <input \n      value={store.value} \n      placeholder="请输入value"\n      onInput={(event)=>{\n        const value = event.target.value;\n        instance.update({ value })\n      }} \n    />\n  </div>)\n}\n\nconst Demo2 = ()=>{\n  const [instance] = useContext()\n  const value2 = useSelector((instances)=>instances?.store?.value2)\n  console.log("value2====案例一==>",value2,instance)\n\n  return (<div>\n    <input \n      value={value2} \n      placeholder="请输入value2"\n      onInput={(event)=>{\n        const value2 = event.target.value;\n        instance.update({ value2 })\n      }} \n    />\n  </div>)\n}\n\nconst Warp = ()=>{\n  return (<Provider initalValue={{ value:"" ,value2:"" }} >\n    <Demo />\n    <Demo2/>\n  </Provider>)\n}\n\nexport default Warp;\n'},100:{name:100,meta:{},code:'"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});const _react=_interop_require_default(require("react"));const _simplehooks=require("@carefrees/simple-hooks");function _interop_require_default(obj){return obj&&obj.__esModule?obj:{default:obj}}const Demo=()=>{const[instance]=(0,_simplehooks.useSimpleContext)();const store=(0,_simplehooks.useSimpleSelector)(instance=>({...instance.store}));console.log("value===案例二==>",store,instance);return _react.default.createElement("div",null,_react.default.createElement("input",{value:store.value,placeholder:"请输入value",onInput:event=>{const value=event.target.value;instance.update({value})}}))};const Demo2=()=>{const[instance]=(0,_simplehooks.useSimpleContext)();const value2=(0,_simplehooks.useSimpleSelector)(instances=>instances?.store?.value2);console.log("value2====案例二=>",value2,instance);return _react.default.createElement("div",null,_react.default.createElement("input",{value:value2,placeholder:"请输入value2",onInput:event=>{const value2=event.target.value;instance.update({value2})}}))};const Warp=()=>{return _react.default.createElement(_simplehooks.SimpleProvider,{initalValue:{value:"",value2:""}},_react.default.createElement(Demo,null),_react.default.createElement(Demo2,null))};const BaseCode_Export__default__value=Warp;\nreturn BaseCode_Export__default__value;\n',language:"tsx",value:'\nimport React from "react";\nimport { SimpleProvider , useSimpleContext, useSimpleSelector } from "@carefrees/simple-hooks";\n\nconst Demo = ()=>{\n  const [instance] = useSimpleContext()\n  const store = useSimpleSelector((instance)=>({...instance.store}))\n\n  console.log("value===案例二==>",store,instance)\n\n  return (<div>\n    <input \n      value={store.value} \n      placeholder="请输入value"\n      onInput={(event)=>{\n        const value = event.target.value;\n        instance.update({ value })\n      }} \n    />\n  </div>)\n}\n\nconst Demo2 = ()=>{\n  const [instance] = useSimpleContext()\n  const value2 = useSimpleSelector((instances)=>instances?.store?.value2)\n  console.log("value2====案例二=>",value2,instance)\n\n  return (<div>\n    <input \n      value={value2} \n      placeholder="请输入value2"\n      onInput={(event)=>{\n        const value2 = event.target.value;\n        instance.update({ value2 })\n      }} \n    />\n  </div>)\n}\n\nconst Warp = ()=>{\n  return (<SimpleProvider initalValue={{ value:"" ,value2:"" }} >\n    <Demo />\n    <Demo2/>\n  </SimpleProvider>)\n}\n\nexport default Warp;\n'}},source:'# `simple-hooks`\n\n## useSimpleReducer\n\n```tsx mdx:preview\n\nimport React from "react";\nimport { useSimpleReducer } from "@carefrees/simple-hooks";\n\nconst Demo = ()=>{\n\n  const [store,dispatch,instance] =  useSimpleReducer({ value:"" })\n  \n  console.log("useSimpleReducer===>",store,dispatch,instance)\n\n  return (<div>\n    <input \n      value={store.value} \n      onInput={(event)=>{\n        const value = event.target.value;\n        dispatch({ value })\n      }} \n    />\n  </div>)\n}\n\nexport default Demo;\n\n```\n\n## Provider\n\n\uD83D\uDCE2：手动创建的状态管理和默认导出的状态管理不通用\n\n**案例一(创建状态管理)**\n\n```tsx mdx:preview\n\nimport React from "react";\nimport { createSimpleContext, createSimpleProvider, createSimpleHooksContext , createSimpleHooksSelector } from "@carefrees/simple-hooks";\n\nconst Context  = createSimpleContext()\n\nconst Provider = createSimpleProvider(Context)\n\nconst useContext = createSimpleHooksContext(Context)\n\nconst useSelector = createSimpleHooksSelector(useContext)\n\nconst Demo = ()=>{\n  const [instance] = useContext()\n  const store = useSelector((instance)=>({...instance.store}))\n\n  console.log("value===案例一==>",store,instance)\n\n  return (<div>\n    <input \n      value={store.value} \n      placeholder="请输入value"\n      onInput={(event)=>{\n        const value = event.target.value;\n        instance.update({ value })\n      }} \n    />\n  </div>)\n}\n\nconst Demo2 = ()=>{\n  const [instance] = useContext()\n  const value2 = useSelector((instances)=>instances?.store?.value2)\n  console.log("value2====案例一==>",value2,instance)\n\n  return (<div>\n    <input \n      value={value2} \n      placeholder="请输入value2"\n      onInput={(event)=>{\n        const value2 = event.target.value;\n        instance.update({ value2 })\n      }} \n    />\n  </div>)\n}\n\nconst Warp = ()=>{\n  return (<Provider initalValue={{ value:"" ,value2:"" }} >\n    <Demo />\n    <Demo2/>\n  </Provider>)\n}\n\nexport default Warp;\n\n```\n\n<br/>\n\n**案例二(使用默认导出状态管理)**\n\n```tsx mdx:preview\n\nimport React from "react";\nimport { SimpleProvider , useSimpleContext, useSimpleSelector } from "@carefrees/simple-hooks";\n\nconst Demo = ()=>{\n  const [instance] = useSimpleContext()\n  const store = useSimpleSelector((instance)=>({...instance.store}))\n\n  console.log("value===案例二==>",store,instance)\n\n  return (<div>\n    <input \n      value={store.value} \n      placeholder="请输入value"\n      onInput={(event)=>{\n        const value = event.target.value;\n        instance.update({ value })\n      }} \n    />\n  </div>)\n}\n\nconst Demo2 = ()=>{\n  const [instance] = useSimpleContext()\n  const value2 = useSimpleSelector((instances)=>instances?.store?.value2)\n  console.log("value2====案例二=>",value2,instance)\n\n  return (<div>\n    <input \n      value={value2} \n      placeholder="请输入value2"\n      onInput={(event)=>{\n        const value2 = event.target.value;\n        instance.update({ value2 })\n      }} \n    />\n  </div>)\n}\n\nconst Warp = ()=>{\n  return (<SimpleProvider initalValue={{ value:"" ,value2:"" }} >\n    <Demo />\n    <Demo2/>\n  </SimpleProvider>)\n}\n\nexport default Warp;\n\n```',headings:[],headingsList:[]}}}]);