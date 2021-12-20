"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[25020],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},34627:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={id:"scene_functions_createTriggerVolume",title:"Module: scene/functions/createTriggerVolume",sidebar_label:"scene/functions/createTriggerVolume",sidebar_position:0,custom_edit_url:null},c=void 0,u={unversionedId:"generated/engine/modules/scene_functions_createTriggerVolume",id:"generated/engine/modules/scene_functions_createTriggerVolume",isDocsHomePage:!1,title:"Module: scene/functions/createTriggerVolume",description:"Functions",source:"@site/docs/generated/engine/modules/scene_functions_createTriggerVolume.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/scene_functions_createTriggerVolume",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_functions_createTriggerVolume",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_createTriggerVolume",title:"Module: scene/functions/createTriggerVolume",sidebar_label:"scene/functions/createTriggerVolume",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"scene/functions/createSkybox",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_functions_createSkybox"},next:{title:"scene/functions/getGeometry",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_functions_getGeometry"}},s=[{value:"Functions",id:"functions",children:[{value:"createTriggerVolume",id:"createtriggervolume",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],d={toc:s};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"createtriggervolume"},"createTriggerVolume"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"createTriggerVolume"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">",">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/db24efc/packages/engine/src/scene/functions/createTriggerVolume.ts#L10"},"packages/engine/src/scene/functions/createTriggerVolume.ts:10")))}p.isMDXComponent=!0}}]);