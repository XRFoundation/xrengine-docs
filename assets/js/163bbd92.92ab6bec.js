"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[22112],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},519:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(87462),i=n(63366),l=(n(67294),n(3905)),a=["components"],o={id:"types_Client.Client",title:"Interface: Client",sidebar_label:"Client",custom_edit_url:null},s=void 0,p={unversionedId:"generated/server-core/interfaces/types_Client.Client",id:"generated/server-core/interfaces/types_Client.Client",isDocsHomePage:!1,title:"Interface: Client",description:"types/Client.Client",source:"@site/docs/generated/server-core/interfaces/types_Client.Client.md",sourceDirName:"generated/server-core/interfaces",slug:"/generated/server-core/interfaces/types_Client.Client",permalink:"/xrengine-docs/docs/generated/server-core/interfaces/types_Client.Client",editUrl:null,tags:[],version:"current",frontMatter:{id:"types_Client.Client",title:"Interface: Client",sidebar_label:"Client",custom_edit_url:null},sidebar:"sidebar",previous:{title:"StorageProviderInterface",permalink:"/xrengine-docs/docs/generated/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface"},next:{title:"default",permalink:"/xrengine-docs/docs/generated/server-core/interfaces/types_PageObject.default"}},c=[{value:"Properties",id:"properties",children:[{value:"consumerLayers",id:"consumerlayers",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"joinTs",id:"joints",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"lastSeenTs",id:"lastseents",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"media",id:"media",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"socket",id:"socket",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"stats",id:"stats",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/types_Client"},"types/Client"),".Client"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"consumerlayers"},"consumerLayers"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"consumerLayers"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/585ff70/packages/server-core/src/types/Client.ts#L7"},"types/Client.ts:7")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"joints"},"joinTs"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"joinTs"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/585ff70/packages/server-core/src/types/Client.ts#L5"},"types/Client.ts:5")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lastseents"},"lastSeenTs"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"lastSeenTs"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/585ff70/packages/server-core/src/types/Client.ts#L4"},"types/Client.ts:4")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"media"},"media"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"media"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/585ff70/packages/server-core/src/types/Client.ts#L6"},"types/Client.ts:6")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"socket"},"socket"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"socket"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Socket"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultEventsMap"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultEventsMap"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultEventsMap"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/585ff70/packages/server-core/src/types/Client.ts#L3"},"types/Client.ts:3")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"stats"},"stats"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"stats"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/585ff70/packages/server-core/src/types/Client.ts#L8"},"types/Client.ts:8")))}u.isMDXComponent=!0}}]);