"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[52873],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),f=i,b=u["".concat(o,".").concat(f)]||u[f]||s[f]||a;return t?r.createElement(b,p(p({ref:n},c),{},{components:t})):r.createElement(b,p({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,p=new Array(a);p[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var d=2;d<a;d++)p[d]=t[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75545:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),p=["components"],l={id:"input_types_WebXR.XRRenderState",title:"Interface: XRRenderState",sidebar_label:"XRRenderState",custom_edit_url:null},o=void 0,d={unversionedId:"generated/engine/interfaces/input_types_WebXR.XRRenderState",id:"generated/engine/interfaces/input_types_WebXR.XRRenderState",isDocsHomePage:!1,title:"Interface: XRRenderState",description:"input/types/WebXR.XRRenderState",source:"@site/docs/generated/engine/interfaces/input_types_WebXR.XRRenderState.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/input_types_WebXR.XRRenderState",permalink:"/xrengine-docs/docs/generated/engine/interfaces/input_types_WebXR.XRRenderState",editUrl:null,tags:[],version:"current",frontMatter:{id:"input_types_WebXR.XRRenderState",title:"Interface: XRRenderState",sidebar_label:"XRRenderState",custom_edit_url:null},sidebar:"sidebar",previous:{title:"XRReferenceSpace",permalink:"/xrengine-docs/docs/generated/engine/interfaces/input_types_WebXR.XRReferenceSpace"},next:{title:"XRSession",permalink:"/xrengine-docs/docs/generated/engine/interfaces/input_types_WebXR.XRSession"}},c=[{value:"Properties",id:"properties",children:[{value:"baseLayer",id:"baselayer",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"depthFar",id:"depthfar",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"depthNear",id:"depthnear",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"inlineVerticalFieldOfView",id:"inlineverticalfieldofview",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],s={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/input_types_WebXR"},"input/types/WebXR"),".XRRenderState"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"baselayer"},"baseLayer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"baseLayer"),": ",(0,a.kt)("a",{parentName:"p",href:"input_types_WebXR.XRWebGLLayer"},(0,a.kt)("inlineCode",{parentName:"a"},"XRWebGLLayer"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/11d5b43/packages/engine/src/input/types/WebXR.ts#L34"},"packages/engine/src/input/types/WebXR.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"depthfar"},"depthFar"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"depthFar"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/11d5b43/packages/engine/src/input/types/WebXR.ts#L32"},"packages/engine/src/input/types/WebXR.ts:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"depthnear"},"depthNear"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"depthNear"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/11d5b43/packages/engine/src/input/types/WebXR.ts#L31"},"packages/engine/src/input/types/WebXR.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inlineverticalfieldofview"},"inlineVerticalFieldOfView"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"inlineVerticalFieldOfView"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/11d5b43/packages/engine/src/input/types/WebXR.ts#L33"},"packages/engine/src/input/types/WebXR.ts:33")))}u.isMDXComponent=!0}}]);