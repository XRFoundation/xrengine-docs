"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[43071],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),g=a,c=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(c,l(l({ref:t},p),{},{components:n})):r.createElement(c,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96329:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"networking_utils_getUser",title:"Module: networking/utils/getUser",sidebar_label:"networking/utils/getUser",sidebar_position:0,custom_edit_url:null},s=void 0,d={unversionedId:"generated/engine/modules/networking_utils_getUser",id:"generated/engine/modules/networking_utils_getUser",isDocsHomePage:!1,title:"Module: networking/utils/getUser",description:"Functions",source:"@site/docs/generated/engine/modules/networking_utils_getUser.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/networking_utils_getUser",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_utils_getUser",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_utils_getUser",title:"Module: networking/utils/getUser",sidebar_label:"networking/utils/getUser",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"networking/systems/OutgoingNetworkSystem",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_systems_OutgoingNetworkSystem"},next:{title:"networking/utils/isPlayerLocal",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_utils_isPlayerLocal"}},p=[{value:"Functions",id:"functions",children:[{value:"getEid",id:"geteid",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"getPlayerName",id:"getplayername",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"getUserEntityByName",id:"getuserentitybyname",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"geteid"},"getEid"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getEid"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"userId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0eee422/packages/engine/src/networking/utils/getUser.ts#L37"},"packages/engine/src/networking/utils/getUser.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getplayername"},"getPlayerName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getPlayerName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"eid"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eid")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0eee422/packages/engine/src/networking/utils/getUser.ts#L17"},"packages/engine/src/networking/utils/getUser.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getuserentitybyname"},"getUserEntityByName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getUserEntityByName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"localUserId"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"localUserId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0eee422/packages/engine/src/networking/utils/getUser.ts#L7"},"packages/engine/src/networking/utils/getUser.ts:7")))}m.isMDXComponent=!0}}]);