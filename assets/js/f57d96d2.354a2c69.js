"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[63703],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87443:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],d={id:"scene_functions_addObject3DComponent",title:"Module: scene/functions/addObject3DComponent",sidebar_label:"scene/functions/addObject3DComponent",sidebar_position:0,custom_edit_url:null},c=void 0,l={unversionedId:"generated/engine/modules/scene_functions_addObject3DComponent",id:"generated/engine/modules/scene_functions_addObject3DComponent",isDocsHomePage:!1,title:"Module: scene/functions/addObject3DComponent",description:"This Module contains function to perform different operations on",source:"@site/docs/generated/engine/modules/scene_functions_addObject3DComponent.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/scene_functions_addObject3DComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_functions_addObject3DComponent",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_addObject3DComponent",title:"Module: scene/functions/addObject3DComponent",sidebar_label:"scene/functions/addObject3DComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"scene/functions/addIsHelperFlag",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_functions_addIsHelperFlag"},next:{title:"scene/functions/applyArgsToObject3d",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_functions_applyArgsToObject3d"}},p=[{value:"Functions",id:"functions",children:[{value:"addObject3DComponent",id:"addobject3dcomponent",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This Module contains function to perform different operations on\n",(0,o.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/core/Object3D"},"Object3D")," from three.js library."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"addobject3dcomponent"},"addObject3DComponent"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"addObject3DComponent"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"object3d"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"objArgs?"),"): ",(0,o.kt)("a",{parentName:"p",href:"ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,o.kt)("p",null,"Add Object3D Component with args into Entity from the Behavior."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"deprecated"))),(0,o.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,o.kt)("inlineCode",{parentName:"td"},"Object3D"),"<",(0,o.kt)("inlineCode",{parentName:"td"},"Event"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object3d")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"objArgs?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"any"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fd1c1d0/packages/engine/src/scene/functions/addObject3DComponent.ts#L17"},"packages/engine/src/scene/functions/addObject3DComponent.ts:17")))}u.isMDXComponent=!0}}]);