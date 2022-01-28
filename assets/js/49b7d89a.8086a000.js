"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[78184],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},o=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),f=s(t),u=a,k=f["".concat(p,".").concat(u)]||f[u]||c[u]||i;return t?r.createElement(k,d(d({ref:n},o),{},{components:t})):r.createElement(k,d({ref:n},o))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,d=new Array(i);d[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,d[1]=l;for(var s=2;s<i;s++)d[s]=t[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77018:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return o},default:function(){return f}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),d=["components"],l={id:"renderer_WebGLRendererSystem.EffectComposerWithSchema",title:"Interface: EffectComposerWithSchema",sidebar_label:"EffectComposerWithSchema",custom_edit_url:null},p=void 0,s={unversionedId:"generated/engine/interfaces/renderer_WebGLRendererSystem.EffectComposerWithSchema",id:"generated/engine/interfaces/renderer_WebGLRendererSystem.EffectComposerWithSchema",title:"Interface: EffectComposerWithSchema",description:"renderer/WebGLRendererSystem.EffectComposerWithSchema",source:"@site/docs/generated/engine/interfaces/renderer_WebGLRendererSystem.EffectComposerWithSchema.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/renderer_WebGLRendererSystem.EffectComposerWithSchema",permalink:"/xrengine-docs/docs/generated/engine/interfaces/renderer_WebGLRendererSystem.EffectComposerWithSchema",editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_WebGLRendererSystem.EffectComposerWithSchema",title:"Interface: EffectComposerWithSchema",sidebar_label:"EffectComposerWithSchema",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Vec3Fragment",permalink:"/xrengine-docs/docs/generated/engine/interfaces/physics_types_PhysicsTypes.Vec3Fragment"},next:{title:"PostProcessingSchema",permalink:"/xrengine-docs/docs/generated/engine/interfaces/renderer_interfaces_PostProcessingSchema.PostProcessingSchema"}},o=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"BloomEffect",id:"bloomeffect",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"BrightnessContrastEffect",id:"brightnesscontrasteffect",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"ColorDepthEffect",id:"colordeptheffect",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"DepthOfFieldEffect",id:"depthoffieldeffect",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"FXAAEffect",id:"fxaaeffect",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"HueSaturationEffect",id:"huesaturationeffect",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"LinearTosRGBEffect",id:"lineartosrgbeffect",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"OutlineEffect",id:"outlineeffect",children:[{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"SSAOEffect",id:"ssaoeffect",children:[{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3},{value:"ToneMappingEffect",id:"tonemappingeffect",children:[{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3},{value:"autoRenderToScreen",id:"autorendertoscreen",children:[{value:"Defined in",id:"defined-in-10",children:[],level:4}],level:3},{value:"copyPass",id:"copypass",children:[{value:"Defined in",id:"defined-in-11",children:[],level:4}],level:3},{value:"depthTexture",id:"depthtexture",children:[{value:"Defined in",id:"defined-in-12",children:[],level:4}],level:3},{value:"inputBuffer",id:"inputbuffer",children:[{value:"Defined in",id:"defined-in-13",children:[],level:4}],level:3},{value:"multisampling",id:"multisampling",children:[{value:"Defined in",id:"defined-in-14",children:[],level:4}],level:3},{value:"outputBuffer",id:"outputbuffer",children:[{value:"Defined in",id:"defined-in-15",children:[],level:4}],level:3},{value:"passes",id:"passes",children:[{value:"Defined in",id:"defined-in-16",children:[],level:4}],level:3},{value:"renderer",id:"renderer",children:[{value:"Defined in",id:"defined-in-17",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"addPass",id:"addpass",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-18",children:[],level:4}],level:3},{value:"createBuffer",id:"createbuffer",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-19",children:[],level:4}],level:3},{value:"createDepthTexture",id:"createdepthtexture",children:[{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-20",children:[],level:4}],level:3},{value:"deleteDepthTexture",id:"deletedepthtexture",children:[{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-21",children:[],level:4}],level:3},{value:"dispose",id:"dispose",children:[{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-22",children:[],level:4}],level:3},{value:"getRenderer",id:"getrenderer",children:[{value:"Returns",id:"returns-5",children:[],level:4},{value:"Defined in",id:"defined-in-23",children:[],level:4}],level:3},{value:"removeAllPasses",id:"removeallpasses",children:[{value:"Returns",id:"returns-6",children:[],level:4},{value:"Defined in",id:"defined-in-24",children:[],level:4}],level:3},{value:"removePass",id:"removepass",children:[{value:"Returns",id:"returns-7",children:[],level:4},{value:"Defined in",id:"defined-in-25",children:[],level:4}],level:3},{value:"render",id:"render",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-8",children:[],level:4},{value:"Defined in",id:"defined-in-26",children:[],level:4}],level:3},{value:"replaceRenderer",id:"replacerenderer",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-9",children:[],level:4},{value:"Defined in",id:"defined-in-27",children:[],level:4}],level:3},{value:"reset",id:"reset",children:[{value:"Returns",id:"returns-10",children:[],level:4},{value:"Defined in",id:"defined-in-28",children:[],level:4}],level:3},{value:"setSize",id:"setsize",children:[{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-11",children:[],level:4},{value:"Defined in",id:"defined-in-29",children:[],level:4}],level:3}],level:2}],c={toc:o};function f(e){var n=e.components,t=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/renderer_WebGLRendererSystem"},"renderer/WebGLRendererSystem"),".EffectComposerWithSchema"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"unknown")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"EffectComposerWithSchema"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bloomeffect"},"BloomEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"BloomEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BloomEffect")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L58"},"packages/engine/src/renderer/WebGLRendererSystem.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"brightnesscontrasteffect"},"BrightnessContrastEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"BrightnessContrastEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BrightnessContrastEffect")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L60"},"packages/engine/src/renderer/WebGLRendererSystem.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"colordeptheffect"},"ColorDepthEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ColorDepthEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ColorDepthEffect")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L62"},"packages/engine/src/renderer/WebGLRendererSystem.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"depthoffieldeffect"},"DepthOfFieldEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"DepthOfFieldEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"DepthOfFieldEffect")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L57"},"packages/engine/src/renderer/WebGLRendererSystem.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fxaaeffect"},"FXAAEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"FXAAEffect"),": ",(0,i.kt)("a",{parentName:"p",href:"../classes/renderer_effects_FXAAEffect.FXAAEffect"},(0,i.kt)("inlineCode",{parentName:"a"},"FXAAEffect"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L55"},"packages/engine/src/renderer/WebGLRendererSystem.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"huesaturationeffect"},"HueSaturationEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"HueSaturationEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"HueSaturationEffect")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L61"},"packages/engine/src/renderer/WebGLRendererSystem.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lineartosrgbeffect"},"LinearTosRGBEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"LinearTosRGBEffect"),": ",(0,i.kt)("a",{parentName:"p",href:"../classes/renderer_effects_LinearTosRGBEffect.LinearTosRGBEffect"},(0,i.kt)("inlineCode",{parentName:"a"},"LinearTosRGBEffect"))),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L63"},"packages/engine/src/renderer/WebGLRendererSystem.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"outlineeffect"},"OutlineEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"OutlineEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"OutlineEffect")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L54"},"packages/engine/src/renderer/WebGLRendererSystem.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ssaoeffect"},"SSAOEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SSAOEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"SSAOEffect")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L56"},"packages/engine/src/renderer/WebGLRendererSystem.ts:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tonemappingeffect"},"ToneMappingEffect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ToneMappingEffect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ToneMappingEffect")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L59"},"packages/engine/src/renderer/WebGLRendererSystem.ts:59")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"autorendertoscreen"},"autoRenderToScreen"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"autoRenderToScreen"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L38"},"packages/engine/src/renderer/WebGLRendererSystem.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"copypass"},"copyPass"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"copyPass"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L35"},"packages/engine/src/renderer/WebGLRendererSystem.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"depthtexture"},"depthTexture"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"depthTexture"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L36"},"packages/engine/src/renderer/WebGLRendererSystem.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inputbuffer"},"inputBuffer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"inputBuffer"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderTarget")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L33"},"packages/engine/src/renderer/WebGLRendererSystem.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"multisampling"},"multisampling"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"multisampling"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L39"},"packages/engine/src/renderer/WebGLRendererSystem.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"outputbuffer"},"outputBuffer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"outputBuffer"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderTarget")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L34"},"packages/engine/src/renderer/WebGLRendererSystem.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"passes"},"passes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"passes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L37"},"packages/engine/src/renderer/WebGLRendererSystem.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"renderer"},"renderer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"renderer"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderer")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L32"},"packages/engine/src/renderer/WebGLRendererSystem.ts:32")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"addpass"},"addPass"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addPass"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"renderPass"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"renderPass")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L45"},"packages/engine/src/renderer/WebGLRendererSystem.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createbuffer"},"createBuffer"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createBuffer"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"depthBuffer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stencilBuffer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"multisampling"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"depthBuffer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stencilBuffer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"multisampling")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L44"},"packages/engine/src/renderer/WebGLRendererSystem.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createdepthtexture"},"createDepthTexture"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createDepthTexture"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L42"},"packages/engine/src/renderer/WebGLRendererSystem.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deletedepthtexture"},"deleteDepthTexture"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"deleteDepthTexture"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L43"},"packages/engine/src/renderer/WebGLRendererSystem.ts:43")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dispose"},"dispose"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L51"},"packages/engine/src/renderer/WebGLRendererSystem.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getrenderer"},"getRenderer"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getRenderer"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L40"},"packages/engine/src/renderer/WebGLRendererSystem.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removeallpasses"},"removeAllPasses"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"removeAllPasses"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L47"},"packages/engine/src/renderer/WebGLRendererSystem.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removepass"},"removePass"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"removePass"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L46"},"packages/engine/src/renderer/WebGLRendererSystem.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"render"},"render"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"render"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"delta"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-26"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L48"},"packages/engine/src/renderer/WebGLRendererSystem.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"replacerenderer"},"replaceRenderer"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"replaceRenderer"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"updateDOM"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"renderer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"updateDOM")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-27"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L41"},"packages/engine/src/renderer/WebGLRendererSystem.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reset"},"reset"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-28"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L50"},"packages/engine/src/renderer/WebGLRendererSystem.ts:50")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setsize"},"setSize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setSize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"arg2"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"width")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"arg2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-29"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/140d3a6/packages/engine/src/renderer/WebGLRendererSystem.ts#L49"},"packages/engine/src/renderer/WebGLRendererSystem.ts:49")))}f.isMDXComponent=!0}}]);