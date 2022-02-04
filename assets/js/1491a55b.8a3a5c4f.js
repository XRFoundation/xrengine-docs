"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[82652],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,g=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3521:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),s=["components"],o={id:"assets_functions_LoadGLTF.LoadGLTFResultInterface",title:"Interface: LoadGLTFResultInterface",sidebar_label:"LoadGLTFResultInterface",custom_edit_url:null},c=void 0,l={unversionedId:"generated/engine/interfaces/assets_functions_LoadGLTF.LoadGLTFResultInterface",id:"generated/engine/interfaces/assets_functions_LoadGLTF.LoadGLTFResultInterface",title:"Interface: LoadGLTFResultInterface",description:"assets/functions/LoadGLTF.LoadGLTFResultInterface",source:"@site/docs/generated/engine/interfaces/assets_functions_LoadGLTF.LoadGLTFResultInterface.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/assets_functions_LoadGLTF.LoadGLTFResultInterface",permalink:"/xrengine-docs/docs/generated/engine/interfaces/assets_functions_LoadGLTF.LoadGLTFResultInterface",editUrl:null,tags:[],version:"current",frontMatter:{id:"assets_functions_LoadGLTF.LoadGLTFResultInterface",title:"Interface: LoadGLTFResultInterface",sidebar_label:"LoadGLTFResultInterface",custom_edit_url:null},sidebar:"sidebar",previous:{title:"XRUIManager",permalink:"/xrengine-docs/docs/generated/engine/classes/xrui_classes_XRUIManager.XRUIManager"},next:{title:"GLTF",permalink:"/xrengine-docs/docs/generated/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTF"}},d=[{value:"Properties",id:"properties",children:[{value:"animations",id:"animations",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"json",id:"json",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"scene",id:"scene",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"stats",id:"stats",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],u={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/generated/engine/modules/assets_functions_LoadGLTF"},"assets/functions/LoadGLTF"),".LoadGLTFResultInterface"),(0,i.kt)("p",null,"Interface for result of the GLTF Asset load."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"animations"},"animations"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"animations"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationClip"),"[]"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/85e9242/packages/engine/src/assets/functions/LoadGLTF.ts#L12"},"packages/engine/src/assets/functions/LoadGLTF.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"json"},"json"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"json"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/85e9242/packages/engine/src/assets/functions/LoadGLTF.ts#L14"},"packages/engine/src/assets/functions/LoadGLTF.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scene"},"scene"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"scene"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Group")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/85e9242/packages/engine/src/assets/functions/LoadGLTF.ts#L13"},"packages/engine/src/assets/functions/LoadGLTF.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stats"},"stats"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"stats"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/85e9242/packages/engine/src/assets/functions/LoadGLTF.ts#L15"},"packages/engine/src/assets/functions/LoadGLTF.ts:15")))}p.isMDXComponent=!0}}]);