"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[43746],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74834:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"map_functions_evictLeastRecentlyUsedItems",title:"Module: map/functions/evictLeastRecentlyUsedItems",sidebar_label:"map/functions/evictLeastRecentlyUsedItems",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"generated/engine/modules/map_functions_evictLeastRecentlyUsedItems",id:"generated/engine/modules/map_functions_evictLeastRecentlyUsedItems",isDocsHomePage:!1,title:"Module: map/functions/evictLeastRecentlyUsedItems",description:"Functions",source:"@site/docs/generated/engine/modules/map_functions_evictLeastRecentlyUsedItems.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/map_functions_evictLeastRecentlyUsedItems",permalink:"/xrengine-docs/docs/generated/engine/modules/map_functions_evictLeastRecentlyUsedItems",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"map_functions_evictLeastRecentlyUsedItems",title:"Module: map/functions/evictLeastRecentlyUsedItems",sidebar_label:"map/functions/evictLeastRecentlyUsedItems",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"map/functions/createWorkerFunction",permalink:"/xrengine-docs/docs/generated/engine/modules/map_functions_createWorkerFunction"},next:{title:"map/functions/fetchUsingCache",permalink:"/xrengine-docs/docs/generated/engine/modules/map_functions_fetchUsingCache"}},d=[{value:"Functions",id:"functions",children:[{value:"default",id:"default",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],s={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"default"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"K"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"V"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"cache"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"maxSize"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keys?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Generator"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},"K"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"V"),"]",">"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"K")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"../interfaces/map_types.ITuple"},(0,i.kt)("inlineCode",{parentName:"a"},"ITuple")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"V")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"V"))))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cache")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/map_types.IParametricMap"},(0,i.kt)("inlineCode",{parentName:"a"},"IParametricMap")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"K"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"V"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"maxSize")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keys")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Iterable"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"K"),">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Generator"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},"K"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"V"),"]",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ee0948f/packages/engine/src/map/functions/evictLeastRecentlyUsedItems.ts#L3"},"packages/engine/src/map/functions/evictLeastRecentlyUsedItems.ts:3")))}m.isMDXComponent=!0}}]);