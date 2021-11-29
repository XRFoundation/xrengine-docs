"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[93485],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var i=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=i.createContext({}),o=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=o(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),y=o(t),u=s,h=y["".concat(c,".").concat(u)]||y[u]||d[u]||r;return t?i.createElement(h,p(p({ref:n},l),{},{components:t})):i.createElement(h,p({ref:n},l))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=y;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,p[1]=a;for(var o=2;o<r;o++)p[o]=t[o];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},40569:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return l},default:function(){return y}});var i=t(87462),s=t(63366),r=(t(67294),t(3905)),p=["components"],a={id:"physics_types_PhysicsTypes.ShapeOptions",title:"Interface: ShapeOptions",sidebar_label:"ShapeOptions",custom_edit_url:null},c=void 0,o={unversionedId:"generated/engine/interfaces/physics_types_PhysicsTypes.ShapeOptions",id:"generated/engine/interfaces/physics_types_PhysicsTypes.ShapeOptions",isDocsHomePage:!1,title:"Interface: ShapeOptions",description:"physics/types/PhysicsTypes.ShapeOptions",source:"@site/docs/generated/engine/interfaces/physics_types_PhysicsTypes.ShapeOptions.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/physics_types_PhysicsTypes.ShapeOptions",permalink:"/xrengine-docs/docs/generated/engine/interfaces/physics_types_PhysicsTypes.ShapeOptions",editUrl:null,tags:[],version:"current",frontMatter:{id:"physics_types_PhysicsTypes.ShapeOptions",title:"Interface: ShapeOptions",sidebar_label:"ShapeOptions",custom_edit_url:null},sidebar:"sidebar",previous:{title:"SceneQuery",permalink:"/xrengine-docs/docs/generated/engine/interfaces/physics_types_PhysicsTypes.SceneQuery"},next:{title:"Vec3",permalink:"/xrengine-docs/docs/generated/engine/interfaces/physics_types_PhysicsTypes.Vec3"}},l=[{value:"Properties",id:"properties",children:[{value:"collisionLayer",id:"collisionlayer",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"collisionMask",id:"collisionmask",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"contactOffset",id:"contactoffset",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"isTrigger",id:"istrigger",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"restOffset",id:"restoffset",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"userData",id:"userdata",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3}],level:2}],d={toc:l};function y(e){var n=e.components,t=(0,s.Z)(e,p);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/physics_types_PhysicsTypes"},"physics/types/PhysicsTypes"),".ShapeOptions"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"collisionlayer"},"collisionLayer"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"collisionLayer"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/types/PhysicsTypes.ts#L50"},"packages/engine/src/physics/types/PhysicsTypes.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"collisionmask"},"collisionMask"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"collisionMask"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/types/PhysicsTypes.ts#L51"},"packages/engine/src/physics/types/PhysicsTypes.ts:51")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"contactoffset"},"contactOffset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"contactOffset"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/types/PhysicsTypes.ts#L48"},"packages/engine/src/physics/types/PhysicsTypes.ts:48")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"istrigger"},"isTrigger"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"isTrigger"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/types/PhysicsTypes.ts#L49"},"packages/engine/src/physics/types/PhysicsTypes.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"restoffset"},"restOffset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"restOffset"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/types/PhysicsTypes.ts#L47"},"packages/engine/src/physics/types/PhysicsTypes.ts:47")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"userdata"},"userData"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"userData"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/types/PhysicsTypes.ts#L46"},"packages/engine/src/physics/types/PhysicsTypes.ts:46")))}y.isMDXComponent=!0}}]);