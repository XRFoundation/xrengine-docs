"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[66208],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=o,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88848:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={id:"scene_components_ScenePreviewCamera",title:"Module: scene/components/ScenePreviewCamera",sidebar_label:"scene/components/ScenePreviewCamera",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"generated/engine/modules/scene_components_ScenePreviewCamera",id:"generated/engine/modules/scene_components_ScenePreviewCamera",isDocsHomePage:!1,title:"Module: scene/components/ScenePreviewCamera",description:"Variables",source:"@site/docs/generated/engine/modules/scene_components_ScenePreviewCamera.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/scene_components_ScenePreviewCamera",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_components_ScenePreviewCamera",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_components_ScenePreviewCamera",title:"Module: scene/components/ScenePreviewCamera",sidebar_label:"scene/components/ScenePreviewCamera",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"scene/components/RenderedComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_components_RenderedComponent"},next:{title:"scene/components/ShadowComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_components_ShadowComponent"}},l=[{value:"Variables",id:"variables",children:[{value:"ScenePreviewCameraTagComponent",id:"scenepreviewcameratagcomponent",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],m={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"scenepreviewcameratagcomponent"},"ScenePreviewCameraTagComponent"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ScenePreviewCameraTagComponent"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,a.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,a.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,a.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,a.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,a.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0eee422/packages/engine/src/scene/components/ScenePreviewCamera.ts#L3"},"packages/engine/src/scene/components/ScenePreviewCamera.ts:3")))}d.isMDXComponent=!0}}]);