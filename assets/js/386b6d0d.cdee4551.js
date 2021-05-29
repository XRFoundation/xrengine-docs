(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[14371],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93240:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),o=["components"],s={id:"ecs_functions_enginefunctions",title:"Module: ecs/functions/EngineFunctions",sidebar_label:"ecs/functions/EngineFunctions",custom_edit_url:null},p={unversionedId:"docs-engine/modules/ecs_functions_enginefunctions",id:"docs-engine/modules/ecs_functions_enginefunctions",isDocsHomePage:!1,title:"Module: ecs/functions/EngineFunctions",description:"Functions",source:"@site/docs/docs-engine/modules/ecs_functions_enginefunctions.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/ecs_functions_enginefunctions",permalink:"/xrengine-docs/docs/docs-engine/modules/ecs_functions_enginefunctions",editUrl:null,version:"current",sidebar_label:"ecs/functions/EngineFunctions",frontMatter:{id:"ecs_functions_enginefunctions",title:"Module: ecs/functions/EngineFunctions",sidebar_label:"ecs/functions/EngineFunctions",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: ecs/functions/ComponentFunctions",permalink:"/xrengine-docs/docs/docs-engine/modules/ecs_functions_componentfunctions"},next:{title:"Module: ecs/functions/EntityFunctions",permalink:"/xrengine-docs/docs/docs-engine/modules/ecs_functions_entityfunctions"}},c=[{value:"Functions",id:"functions",children:[{value:"execute",id:"execute",children:[]},{value:"pause",id:"pause",children:[]},{value:"processLocationPort",id:"processlocationport",children:[]},{value:"reset",id:"reset",children:[]},{value:"resetEngine",id:"resetengine",children:[]},{value:"stats",id:"stats",children:[]}]}],l={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"execute"},"execute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"execute"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"delta"),": ",(0,i.kt)("em",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"time"),": ",(0,i.kt)("em",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"updateType"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/enums/ecs_functions_systemupdatetype.systemupdatetype"},(0,i.kt)("em",{parentName:"a"},"SystemUpdateType")),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,'Execute all systems (a "frame").\nThis is typically called on a loop.\n',(0,i.kt)("strong",{parentName:"p"},"WARNING:")," This is called by {@link initialize.initializeEngine | initializeEngine()}.\\\nYou probably don't want to use this."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"updateType")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/enums/ecs_functions_systemupdatetype.systemupdatetype"},(0,i.kt)("em",{parentName:"a"},"SystemUpdateType")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/ecs/functions/EngineFunctions.ts#L112"},"packages/engine/src/ecs/functions/EngineFunctions.ts:112")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pause"},"pause"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"pause"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Disable execution of systems without stopping timer."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/ecs/functions/EngineFunctions.ts#L181"},"packages/engine/src/ecs/functions/EngineFunctions.ts:181")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"processlocationport"},"processLocationPort"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"processLocationPort"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/ecs/functions/EngineFunctions.ts#L252"},"packages/engine/src/ecs/functions/EngineFunctions.ts:252")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reset"},"reset"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Reset the engine and remove everything from memory."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/ecs/functions/EngineFunctions.ts#L18"},"packages/engine/src/ecs/functions/EngineFunctions.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"resetengine"},"resetEngine"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"resetEngine"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Reset the engine and clear all the timers."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/ecs/functions/EngineFunctions.ts#L237"},"packages/engine/src/ecs/functions/EngineFunctions.ts:237")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stats"},"stats"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"stats"),"(): ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("p",null,"Get stats for all entities, components and systems in the simulation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entities")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"system")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/ecs/functions/EngineFunctions.ts#L191"},"packages/engine/src/ecs/functions/EngineFunctions.ts:191")))}u.isMDXComponent=!0}}]);