"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[53415],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(t),c=o,g=m["".concat(u,".").concat(c)]||m[c]||s[c]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95698:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={id:"debug_DebugNavMeshComponent",title:"Module: debug/DebugNavMeshComponent",sidebar_label:"debug/DebugNavMeshComponent",sidebar_position:0,custom_edit_url:null},u=void 0,l={unversionedId:"generated/engine/modules/debug_DebugNavMeshComponent",id:"generated/engine/modules/debug_DebugNavMeshComponent",isDocsHomePage:!1,title:"Module: debug/DebugNavMeshComponent",description:"Variables",source:"@site/docs/generated/engine/modules/debug_DebugNavMeshComponent.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/debug_DebugNavMeshComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/debug_DebugNavMeshComponent",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"debug_DebugNavMeshComponent",title:"Module: debug/DebugNavMeshComponent",sidebar_label:"debug/DebugNavMeshComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"debug/DebugArrowComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/debug_DebugArrowComponent"},next:{title:"debug/systems/DebugHelpersSystem",permalink:"/xrengine-docs/docs/generated/engine/modules/debug_systems_DebugHelpersSystem"}},d=[{value:"Variables",id:"variables",children:[{value:"DebugNavMeshComponent",id:"debugnavmeshcomponent",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],s={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"debugnavmeshcomponent"},"DebugNavMeshComponent"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"DebugNavMeshComponent"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"object3d"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Group"),"  } & ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,a.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,a.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,a.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,a.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,a.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/49b44a3/packages/engine/src/debug/DebugNavMeshComponent.ts#L4"},"packages/engine/src/debug/DebugNavMeshComponent.ts:4")))}m.isMDXComponent=!0}}]);