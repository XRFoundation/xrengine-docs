(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[25576],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(n),u=r,d=g["".concat(s,".").concat(u)]||g[u]||m[u]||l;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},24355:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o=["components"],i={id:"game_templates_golf_behaviors_giveball",title:"Module: game/templates/Golf/behaviors/giveBall",sidebar_label:"game/templates/Golf/behaviors/giveBall",custom_edit_url:null},s={unversionedId:"docs-engine/modules/game_templates_golf_behaviors_giveball",id:"docs-engine/modules/game_templates_golf_behaviors_giveball",isDocsHomePage:!1,title:"Module: game/templates/Golf/behaviors/giveBall",description:"Functions",source:"@site/docs/docs-engine/modules/game_templates_golf_behaviors_giveball.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/game_templates_golf_behaviors_giveball",permalink:"/xrengine-docs/docs/docs-engine/modules/game_templates_golf_behaviors_giveball",editUrl:null,version:"current",sidebar_label:"game/templates/Golf/behaviors/giveBall",frontMatter:{id:"game_templates_golf_behaviors_giveball",title:"Module: game/templates/Golf/behaviors/giveBall",sidebar_label:"game/templates/Golf/behaviors/giveBall",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: game/templates/Golf/behaviors/displayScore",permalink:"/xrengine-docs/docs/docs-engine/modules/game_templates_golf_behaviors_displayscore"},next:{title:"Module: game/templates/Golf/behaviors/giveGoalState",permalink:"/xrengine-docs/docs/docs-engine/modules/game_templates_golf_behaviors_givegoalstate"}},c=[{value:"Functions",id:"functions",children:[{value:"giveBall",id:"giveball",children:[]}]}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"giveball"},"giveBall"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const"),(0,l.kt)("strong",{parentName:"p"},"giveBall"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"playerEntity"),": ",(0,l.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")),"): ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"author"))," Josh Field <github.com/HexaField>\nInitialises a player's golf ball in their game state storage"),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"playerEntity")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/game/templates/Golf/behaviors/giveBall.ts#L12"},"packages/engine/src/game/templates/Golf/behaviors/giveBall.ts:12")))}m.isMDXComponent=!0}}]);