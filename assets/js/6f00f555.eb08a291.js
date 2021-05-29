(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[79782],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70932:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),i=["components"],o={id:"state_behaviors_setstate",title:"Module: state/behaviors/setState",sidebar_label:"state/behaviors/setState",custom_edit_url:null},l={unversionedId:"docs-engine/modules/state_behaviors_setstate",id:"docs-engine/modules/state_behaviors_setstate",isDocsHomePage:!1,title:"Module: state/behaviors/setState",description:"Functions",source:"@site/docs/docs-engine/modules/state_behaviors_setstate.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/state_behaviors_setstate",permalink:"/xrengine-docs/docs/docs-engine/modules/state_behaviors_setstate",editUrl:null,version:"current",sidebar_label:"state/behaviors/setState",frontMatter:{id:"state_behaviors_setstate",title:"Module: state/behaviors/setState",sidebar_label:"state/behaviors/setState",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: scene/systems/ServerSpawnSystem",permalink:"/xrengine-docs/docs/docs-engine/modules/scene_systems_serverspawnsystem"},next:{title:"Module: state/components/State",permalink:"/xrengine-docs/docs/docs-engine/modules/state_components_state"}},p=[{value:"Functions",id:"functions",children:[{value:"setState",id:"setstate",children:[]}]}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"setstate"},"setState"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const"),(0,s.kt)("strong",{parentName:"p"},"setState"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,s.kt)("em",{parentName:"a"},"Entity")),", ",(0,s.kt)("inlineCode",{parentName:"p"},"args?"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"delta?"),": ",(0,s.kt)("em",{parentName:"p"},"number"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"entityOut?"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,s.kt)("em",{parentName:"a"},"Entity")),", ",(0,s.kt)("inlineCode",{parentName:"p"},"time?"),": ",(0,s.kt)("em",{parentName:"p"},"number"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"checks?"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"entity")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,s.kt)("em",{parentName:"a"},"Entity")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"args?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"delta?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"entityOut?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,s.kt)("em",{parentName:"a"},"Entity")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"time?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"checks?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/state/behaviors/setState.ts#L11"},"packages/engine/src/state/behaviors/setState.ts:11")))}d.isMDXComponent=!0}}]);