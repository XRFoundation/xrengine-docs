(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[21114],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),u=a,k=f["".concat(s,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30044:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],c={id:"networking_interfaces_worldstate.networkobjectcreateinterface",title:"Interface: NetworkObjectCreateInterface",sidebar_label:"NetworkObjectCreateInterface",custom_edit_url:null},s={unversionedId:"docs-engine/interfaces/networking_interfaces_worldstate.networkobjectcreateinterface",id:"docs-engine/interfaces/networking_interfaces_worldstate.networkobjectcreateinterface",isDocsHomePage:!1,title:"Interface: NetworkObjectCreateInterface",description:"networking/interfaces/WorldState.NetworkObjectCreateInterface",source:"@site/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkobjectcreateinterface.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/networking_interfaces_worldstate.networkobjectcreateinterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkobjectcreateinterface",editUrl:null,version:"current",sidebar_label:"NetworkObjectCreateInterface",frontMatter:{id:"networking_interfaces_worldstate.networkobjectcreateinterface",title:"Interface: NetworkObjectCreateInterface",sidebar_label:"NetworkObjectCreateInterface",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: NetworkInputInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkinputinterface"},next:{title:"Interface: NetworkObjectEditInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkobjecteditinterface"}},l=[{value:"Properties",id:"properties",children:[{value:"networkId",id:"networkid",children:[]},{value:"ownerId",id:"ownerid",children:[]},{value:"parameters",id:"parameters",children:[]},{value:"prefabType",id:"prefabtype",children:[]},{value:"uniqueId",id:"uniqueid",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_interfaces_worldstate"},"networking/interfaces/WorldState"),".NetworkObjectCreateInterface"),(0,i.kt)("p",null,"Interface for creation of network object."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"networkid"},"networkId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"networkId"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Id of the network."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/networking/interfaces/WorldState.ts#L91"},"packages/engine/src/networking/interfaces/WorldState.ts:91")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ownerid"},"ownerId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ownerId"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Id of the owner."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/networking/interfaces/WorldState.ts#L93"},"packages/engine/src/networking/interfaces/WorldState.ts:93")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parameters"},"parameters"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"parameters"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Parameters to initialze the prefab with."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/networking/interfaces/WorldState.ts#L99"},"packages/engine/src/networking/interfaces/WorldState.ts:99")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"prefabtype"},"prefabType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"prefabType"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Type of prefab used to create this object."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/networking/interfaces/WorldState.ts#L97"},"packages/engine/src/networking/interfaces/WorldState.ts:97")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"uniqueid"},"uniqueId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"uniqueId"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Entity unique Id from editor scene."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/networking/interfaces/WorldState.ts#L95"},"packages/engine/src/networking/interfaces/WorldState.ts:95")))}d.isMDXComponent=!0}}]);