"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[23700],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=d(n),u=a,c=k["".concat(o,".").concat(u)]||k[u]||m[u]||l;return n?r.createElement(c,s(s({ref:t},p),{},{components:n})):r.createElement(c,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<l;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},99860:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return k}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],i={id:"networking_systems_OutgoingNetworkSystem",title:"Module: networking/systems/OutgoingNetworkSystem",sidebar_label:"networking/systems/OutgoingNetworkSystem",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"generated/engine/modules/networking_systems_OutgoingNetworkSystem",id:"generated/engine/modules/networking_systems_OutgoingNetworkSystem",isDocsHomePage:!1,title:"Module: networking/systems/OutgoingNetworkSystem",description:"Functions",source:"@site/docs/generated/engine/modules/networking_systems_OutgoingNetworkSystem.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/networking_systems_OutgoingNetworkSystem",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_systems_OutgoingNetworkSystem",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_systems_OutgoingNetworkSystem",title:"Module: networking/systems/OutgoingNetworkSystem",sidebar_label:"networking/systems/OutgoingNetworkSystem",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"networking/systems/MediaStreamSystem",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_systems_MediaStreamSystem"},next:{title:"networking/templates/DefaultNetworkSchema",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_templates_DefaultNetworkSchema"}},p=[{value:"Functions",id:"functions",children:[{value:"default",id:"default",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"queueAllOutgoingPoses",id:"queuealloutgoingposes",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"queueEntityTransform",id:"queueentitytransform",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"queueUnchangedControllerPoses",id:"queueunchangedcontrollerposes",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"queueUnchangedPosesClient",id:"queueunchangedposesclient",children:[{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"queueUnchangedPosesServer",id:"queueunchangedposesserver",children:[{value:"Parameters",id:"parameters-5",children:[],level:4},{value:"Returns",id:"returns-5",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"queueXRHandPoses",id:"queuexrhandposes",children:[{value:"Parameters",id:"parameters-6",children:[],level:4},{value:"Returns",id:"returns-6",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"resetNetworkState",id:"resetnetworkstate",children:[{value:"Parameters",id:"parameters-7",children:[],level:4},{value:"Returns",id:"returns-7",children:[],level:4},{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3}],level:2}],m={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"default"},"default"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"default"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"ecs_classes_System#system"},(0,l.kt)("inlineCode",{parentName:"a"},"System")),">"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"world")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World")))))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"ecs_classes_System#system"},(0,l.kt)("inlineCode",{parentName:"a"},"System")),">"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0936c22/packages/engine/src/networking/systems/OutgoingNetworkSystem.ts#L298"},"packages/engine/src/networking/systems/OutgoingNetworkSystem.ts:298")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"queuealloutgoingposes"},"queueAllOutgoingPoses"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,l.kt)("strong",{parentName:"p"},"queueAllOutgoingPoses"),"(...",(0,l.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"...input")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0936c22/packages/engine/src/networking/systems/OutgoingNetworkSystem.ts#L267"},"packages/engine/src/networking/systems/OutgoingNetworkSystem.ts:267")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"queueentitytransform"},"queueEntityTransform"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,l.kt)("strong",{parentName:"p"},"queueEntityTransform"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,l.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World"))),(0,l.kt)("p",null,"DATA QUEING *"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"world")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"entity")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"ecs_classes_Entity#entity"},(0,l.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World"))),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0936c22/packages/engine/src/networking/systems/OutgoingNetworkSystem.ts#L88"},"packages/engine/src/networking/systems/OutgoingNetworkSystem.ts:88")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"queueunchangedcontrollerposes"},"queueUnchangedControllerPoses"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,l.kt)("strong",{parentName:"p"},"queueUnchangedControllerPoses"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,l.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World"))),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"world")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World")))))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World"))),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0936c22/packages/engine/src/networking/systems/OutgoingNetworkSystem.ts#L151"},"packages/engine/src/networking/systems/OutgoingNetworkSystem.ts:151")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"queueunchangedposesclient"},"queueUnchangedPosesClient"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,l.kt)("strong",{parentName:"p"},"queueUnchangedPosesClient"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,l.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World"))),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"world")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World")))))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World"))),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0936c22/packages/engine/src/networking/systems/OutgoingNetworkSystem.ts#L143"},"packages/engine/src/networking/systems/OutgoingNetworkSystem.ts:143")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"queueunchangedposesserver"},"queueUnchangedPosesServer"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,l.kt)("strong",{parentName:"p"},"queueUnchangedPosesServer"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,l.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World"))),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"world")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World")))))),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World"))),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0936c22/packages/engine/src/networking/systems/OutgoingNetworkSystem.ts#L134"},"packages/engine/src/networking/systems/OutgoingNetworkSystem.ts:134")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"queuexrhandposes"},"queueXRHandPoses"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,l.kt)("strong",{parentName:"p"},"queueXRHandPoses"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,l.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World"))),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"world")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World")))))),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World"))),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0936c22/packages/engine/src/networking/systems/OutgoingNetworkSystem.ts#L211"},"packages/engine/src/networking/systems/OutgoingNetworkSystem.ts:211")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"resetnetworkstate"},"resetNetworkState"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,l.kt)("strong",{parentName:"p"},"resetNetworkState"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,l.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World"))),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"world")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World")))))),(0,l.kt)("h4",{id:"returns-7"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,l.kt)("inlineCode",{parentName:"a"},"World"))),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0936c22/packages/engine/src/networking/systems/OutgoingNetworkSystem.ts#L254"},"packages/engine/src/networking/systems/OutgoingNetworkSystem.ts:254")))}k.isMDXComponent=!0}}]);