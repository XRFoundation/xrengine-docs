"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[22998],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=d(t),m=i,u=k["".concat(p,".").concat(m)]||k[m]||s[m]||a;return t?r.createElement(u,o(o({ref:n},c),{},{components:t})):r.createElement(u,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=k;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},31177:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={id:"networking_schema_networkSchema.WorldStateInterface",title:"Interface: WorldStateInterface",sidebar_label:"WorldStateInterface",custom_edit_url:null},p=void 0,d={unversionedId:"generated/engine/interfaces/networking_schema_networkSchema.WorldStateInterface",id:"generated/engine/interfaces/networking_schema_networkSchema.WorldStateInterface",title:"Interface: WorldStateInterface",description:"networking/schema/networkSchema.WorldStateInterface",source:"@site/docs/generated/engine/interfaces/networking_schema_networkSchema.WorldStateInterface.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/networking_schema_networkSchema.WorldStateInterface",permalink:"/xrengine-docs/docs/generated/engine/interfaces/networking_schema_networkSchema.WorldStateInterface",editUrl:null,tags:[],version:"current",frontMatter:{id:"networking_schema_networkSchema.WorldStateInterface",title:"Interface: WorldStateInterface",sidebar_label:"WorldStateInterface",custom_edit_url:null},sidebar:"sidebar",previous:{title:"NetworkTransport",permalink:"/xrengine-docs/docs/generated/engine/interfaces/networking_interfaces_NetworkTransport.NetworkTransport"},next:{title:"Color",permalink:"/xrengine-docs/docs/generated/engine/interfaces/particles_interfaces.Color"}},c=[{value:"Properties",id:"properties",children:[{value:"controllerPose",id:"controllerpose",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"handsPose",id:"handspose",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"pose",id:"pose",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"tick",id:"tick",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"time",id:"time",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2}],s={toc:c};function k(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/networking_schema_networkSchema"},"networking/schema/networkSchema"),".WorldStateInterface"),(0,a.kt)("p",null,"Interface for world state."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"controllerpose"},"controllerPose"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"controllerPose"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"headPosePosition"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"headPoseRotation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"leftGripPosition"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"leftGripRotation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"leftRayPosition"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"leftRayRotation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"networkId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkId")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"UserId")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"rightGripPosition"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"rightGripRotation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"rightRayPosition"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"rightRayRotation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]  }[]"),(0,a.kt)("p",null,"transform of ik avatars."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/networking/schema/networkSchema.ts#L75"},"packages/engine/src/networking/schema/networkSchema.ts:75")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"handspose"},"handsPose"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"handsPose"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"hands"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"joints"),": [{ ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"position"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"rotation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]  }]  }[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"networkId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkId")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"UserId"),"  }[]"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/networking/schema/networkSchema.ts#L89"},"packages/engine/src/networking/schema/networkSchema.ts:89")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pose"},"pose"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"pose"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"angularVelocity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"linearVelocity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"networkId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkId")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"UserId")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"position"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"rotation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]  }[]"),(0,a.kt)("p",null,"transform of world."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/networking/schema/networkSchema.ts#L66"},"packages/engine/src/networking/schema/networkSchema.ts:66")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tick"},"tick"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"tick"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Current world tick."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/networking/schema/networkSchema.ts#L62"},"packages/engine/src/networking/schema/networkSchema.ts:62")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"time"},"time"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"time"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"For interpolation."),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/networking/schema/networkSchema.ts#L64"},"packages/engine/src/networking/schema/networkSchema.ts:64")))}k.isMDXComponent=!0}}]);