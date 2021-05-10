(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[84755],{30876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(2784);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=s,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35191:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return o},default:function(){return p}});var n=r(7560),s=r(98283),i=(r(2784),r(30876)),a={id:"types_client.client",title:"Interface: Client",sidebar_label:"Client",custom_edit_url:null},c={unversionedId:"docs-server-core/interfaces/types_client.client",id:"docs-server-core/interfaces/types_client.client",isDocsHomePage:!1,title:"Interface: Client",description:"types/Client.Client",source:"@site/docs/docs-server-core/interfaces/types_client.client.md",sourceDirName:"docs-server-core/interfaces",slug:"/docs-server-core/interfaces/types_client.client",permalink:"/xrengine-docs/docs/docs-server-core/interfaces/types_client.client",editUrl:null,version:"current",sidebar_label:"Client",frontMatter:{id:"types_client.client",title:"Interface: Client",sidebar_label:"Client",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: StorageProviderInterface",permalink:"/xrengine-docs/docs/docs-server-core/interfaces/media_storageprovider_storageprovider_interface.storageproviderinterface"}},o=[{value:"Properties",id:"properties",children:[{value:"consumerLayers",id:"consumerlayers",children:[]},{value:"joinTs",id:"joints",children:[]},{value:"lastSeenTs",id:"lastseents",children:[]},{value:"media",id:"media",children:[]},{value:"socket",id:"socket",children:[]},{value:"stats",id:"stats",children:[]}]}],l={toc:o};function p(e){var t=e.components,r=(0,s.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/modules/types_client"},"types/Client"),".Client"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"consumerlayers"},"consumerLayers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"consumerLayers"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/38813eb23/packages/server-core/src/types/Client.ts#L7"},"packages/server-core/src/types/Client.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"joints"},"joinTs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"joinTs"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/38813eb23/packages/server-core/src/types/Client.ts#L5"},"packages/server-core/src/types/Client.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lastseents"},"lastSeenTs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lastSeenTs"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/38813eb23/packages/server-core/src/types/Client.ts#L4"},"packages/server-core/src/types/Client.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"media"},"media"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"media"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/38813eb23/packages/server-core/src/types/Client.ts#L6"},"packages/server-core/src/types/Client.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"socket"},"socket"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"socket"),": ",(0,i.kt)("em",{parentName:"p"},"Socket")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/38813eb23/packages/server-core/src/types/Client.ts#L3"},"packages/server-core/src/types/Client.ts:3")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stats"},"stats"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"stats"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/38813eb23/packages/server-core/src/types/Client.ts#L8"},"packages/server-core/src/types/Client.ts:8")))}p.isMDXComponent=!0}}]);