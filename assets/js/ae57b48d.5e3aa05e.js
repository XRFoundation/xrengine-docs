"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[61472],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<s;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14147:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],c={id:"projects_scene_scene_parser",title:"Module: projects/scene/scene-parser",sidebar_label:"projects/scene/scene-parser",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"generated/server-core/modules/projects_scene_scene_parser",id:"generated/server-core/modules/projects_scene_scene_parser",title:"Module: projects/scene/scene-parser",description:"Variables",source:"@site/docs/generated/server-core/modules/projects_scene_scene_parser.md",sourceDirName:"generated/server-core/modules",slug:"/generated/server-core/modules/projects_scene_scene_parser",permalink:"/xrengine-docs/docs/generated/server-core/modules/projects_scene_scene_parser",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"projects_scene_scene_parser",title:"Module: projects/scene/scene-parser",sidebar_label:"projects/scene/scene-parser",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"projects/scene/scene-helper",permalink:"/xrengine-docs/docs/generated/server-core/modules/projects_scene_scene_helper"},next:{title:"projects/services",permalink:"/xrengine-docs/docs/generated/server-core/modules/projects_services"}},p=[{value:"Variables",id:"variables",children:[{value:"corsPath",id:"corspath",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"sceneRelativePathIdentifier",id:"scenerelativepathidentifier",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"cleanSceneDataCacheURLs",id:"cleanscenedatacacheurls",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"parseSceneDataCacheURLs",id:"parsescenedatacacheurls",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"parseScenePortals",id:"parsesceneportals",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"variables"},"Variables"),(0,s.kt)("h3",{id:"corspath"},"corsPath"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"corsPath"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c5a1169/packages/server-core/src/projects/scene/scene-parser.ts#L8"},"packages/server-core/src/projects/scene/scene-parser.ts:8")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"scenerelativepathidentifier"},"sceneRelativePathIdentifier"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"sceneRelativePathIdentifier"),": ",(0,s.kt)("inlineCode",{parentName:"p"},'"__$project$__"')),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c5a1169/packages/server-core/src/projects/scene/scene-parser.ts#L7"},"packages/server-core/src/projects/scene/scene-parser.ts:7")),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"cleanscenedatacacheurls"},"cleanSceneDataCacheURLs"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"cleanSceneDataCacheURLs"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"sceneData"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"cacheDomain"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"SceneJson")),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"sceneData")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"SceneJson"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"cacheDomain")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string"))))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SceneJson")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c5a1169/packages/server-core/src/projects/scene/scene-parser.ts#L29"},"packages/server-core/src/projects/scene/scene-parser.ts:29")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"parsescenedatacacheurls"},"parseSceneDataCacheURLs"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"parseSceneDataCacheURLs"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"sceneData"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"cacheDomain"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"SceneJson")),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"sceneData")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"SceneJson"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"cacheDomain")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string"))))),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SceneJson")),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c5a1169/packages/server-core/src/projects/scene/scene-parser.ts#L13"},"packages/server-core/src/projects/scene/scene-parser.ts:13")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"parsesceneportals"},"parseScenePortals"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"parseScenePortals"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"scene"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"PortalDetail"),"[]"),(0,s.kt)("h4",{id:"parameters-2"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"scene")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"SceneDetailInterface"))))),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"PortalDetail"),"[]"),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c5a1169/packages/server-core/src/projects/scene/scene-parser.ts#L46"},"packages/server-core/src/projects/scene/scene-parser.ts:46")))}u.isMDXComponent=!0}}]);