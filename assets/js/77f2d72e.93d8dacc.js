"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[87366],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95012:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],p={id:"input_types_WebXR.XRPose",title:"Interface: XRPose",sidebar_label:"XRPose",custom_edit_url:null},s=void 0,l={unversionedId:"generated/engine/interfaces/input_types_WebXR.XRPose",id:"generated/engine/interfaces/input_types_WebXR.XRPose",title:"Interface: XRPose",description:"input/types/WebXR.XRPose",source:"@site/docs/generated/engine/interfaces/input_types_WebXR.XRPose.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/input_types_WebXR.XRPose",permalink:"/xrengine-docs/docs/generated/engine/interfaces/input_types_WebXR.XRPose",editUrl:null,tags:[],version:"current",frontMatter:{id:"input_types_WebXR.XRPose",title:"Interface: XRPose",sidebar_label:"XRPose",custom_edit_url:null},sidebar:"sidebar",previous:{title:"XRPlane",permalink:"/xrengine-docs/docs/generated/engine/interfaces/input_types_WebXR.XRPlane"},next:{title:"XRReferenceSpace",permalink:"/xrengine-docs/docs/generated/engine/interfaces/input_types_WebXR.XRReferenceSpace"}},c=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"emulatedPosition",id:"emulatedposition",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"transform",id:"transform",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/input_types_WebXR"},"input/types/WebXR"),".XRPose"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"XRPose"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"input_types_WebXR.XRViewerPose"},(0,a.kt)("inlineCode",{parentName:"a"},"XRViewerPose"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"emulatedposition"},"emulatedPosition"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"emulatedPosition"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/39de711/packages/engine/src/input/types/WebXR.ts#L105"},"packages/engine/src/input/types/WebXR.ts:105")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transform"},"transform"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transform"),": ",(0,a.kt)("a",{parentName:"p",href:"../classes/input_types_WebXR.XRRigidTransform"},(0,a.kt)("inlineCode",{parentName:"a"},"XRRigidTransform"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/39de711/packages/engine/src/input/types/WebXR.ts#L104"},"packages/engine/src/input/types/WebXR.ts:104")))}d.isMDXComponent=!0}}]);