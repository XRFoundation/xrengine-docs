"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[86495],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83520:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={id:"scene_functions_ReparentFunction",title:"Module: scene/functions/ReparentFunction",sidebar_label:"scene/functions/ReparentFunction",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"generated/engine/modules/scene_functions_ReparentFunction",id:"generated/engine/modules/scene_functions_ReparentFunction",title:"Module: scene/functions/ReparentFunction",description:"Functions",source:"@site/docs/generated/engine/modules/scene_functions_ReparentFunction.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/scene_functions_ReparentFunction",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_functions_ReparentFunction",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_ReparentFunction",title:"Module: scene/functions/ReparentFunction",sidebar_label:"scene/functions/ReparentFunction",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"scene/functions/GLTFExportFunctions",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_functions_GLTFExportFunctions"},next:{title:"scene/functions/SceneLoading",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_functions_SceneLoading"}},u=[{value:"Functions",id:"functions",children:[{value:"reparentObject3D",id:"reparentobject3d",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"reparentobject3d"},"reparentObject3D"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"reparentObject3D"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"node"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"before?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"node")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/ecs_classes_EntityTree.EntityTreeNode"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityTreeNode")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"parent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/ecs_classes_EntityTree.EntityTreeNode"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityTreeNode")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"before?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/ecs_classes_EntityTree.EntityTreeNode"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityTreeNode")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c68812a/packages/engine/src/scene/functions/ReparentFunction.ts#L7"},"packages/engine/src/scene/functions/ReparentFunction.ts:7")))}d.isMDXComponent=!0}}]);