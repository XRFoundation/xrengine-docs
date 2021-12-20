"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[52576],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(t),u=r,k=s["".concat(l,".").concat(u)]||s[u]||c[u]||i;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},34567:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return s}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],p={id:"ikrig_components_CameraIKComponent",title:"Module: ikrig/components/CameraIKComponent",sidebar_label:"ikrig/components/CameraIKComponent",sidebar_position:0,custom_edit_url:null},l=void 0,m={unversionedId:"generated/engine/modules/ikrig_components_CameraIKComponent",id:"generated/engine/modules/ikrig_components_CameraIKComponent",isDocsHomePage:!1,title:"Module: ikrig/components/CameraIKComponent",description:"Type aliases",source:"@site/docs/generated/engine/modules/ikrig_components_CameraIKComponent.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/ikrig_components_CameraIKComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/ikrig_components_CameraIKComponent",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ikrig_components_CameraIKComponent",title:"Module: ikrig/components/CameraIKComponent",sidebar_label:"ikrig/components/CameraIKComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"ikrig/classes/Pose",permalink:"/xrengine-docs/docs/generated/engine/modules/ikrig_classes_Pose"},next:{title:"ikrig/components/IKObj",permalink:"/xrengine-docs/docs/generated/engine/modules/ikrig_components_IKObj"}},d=[{value:"Type aliases",id:"type-aliases",children:[{value:"CameraIKComponentType",id:"cameraikcomponenttype",children:[{value:"Type declaration",id:"type-declaration",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Variables",id:"variables",children:[{value:"CameraIKComponent",id:"cameraikcomponent",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],c={toc:d};function s(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"cameraikcomponenttype"},"CameraIKComponentType"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"CameraIKComponentType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Rotate the target bone with given camera"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boneIndex")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"camera")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Camera")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Object3D")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"rotationClamp")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Clamp the angle between bone forward vector and camera forward in radians Use 0 to disable")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/db24efc/packages/engine/src/ikrig/components/CameraIKComponent.ts#L7"},"packages/engine/src/ikrig/components/CameraIKComponent.ts:7")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"cameraikcomponent"},"CameraIKComponent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"CameraIKComponent"),": ",(0,i.kt)("a",{parentName:"p",href:"ikrig_components_CameraIKComponent#cameraikcomponenttype"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraIKComponentType"))," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,i.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,i.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,i.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,i.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/db24efc/packages/engine/src/ikrig/components/CameraIKComponent.ts#L17"},"packages/engine/src/ikrig/components/CameraIKComponent.ts:17")))}s.isMDXComponent=!0}}]);