"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[73214],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"interaction_systems_MediaControlSystem",title:"Module: interaction/systems/MediaControlSystem",sidebar_label:"interaction/systems/MediaControlSystem",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"generated/engine/modules/interaction_systems_MediaControlSystem",id:"generated/engine/modules/interaction_systems_MediaControlSystem",title:"Module: interaction/systems/MediaControlSystem",description:"Variables",source:"@site/docs/generated/engine/modules/interaction_systems_MediaControlSystem.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/interaction_systems_MediaControlSystem",permalink:"/xrengine-docs/docs/generated/engine/modules/interaction_systems_MediaControlSystem",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"interaction_systems_MediaControlSystem",title:"Module: interaction/systems/MediaControlSystem",sidebar_label:"interaction/systems/MediaControlSystem",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"interaction/systems/InteractiveSystem",permalink:"/xrengine-docs/docs/generated/engine/modules/interaction_systems_InteractiveSystem"},next:{title:"interaction/types/InteractionTypes",permalink:"/xrengine-docs/docs/generated/engine/modules/interaction_types_InteractionTypes"}},c=[{value:"Variables",id:"variables",children:[{value:"MediaFadeTransitions",id:"mediafadetransitions",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"default",id:"default",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"mediafadetransitions"},"MediaFadeTransitions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MediaFadeTransitions"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,a.kt)("a",{parentName:"p",href:"ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")),", { ",(0,a.kt)("inlineCode",{parentName:"p"},"setState"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"state"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"TransitionType"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"update"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"world"),": ",(0,a.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")),", ",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"alpha"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),"  }",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/3fd50fe/packages/engine/src/interaction/systems/MediaControlSystem.ts#L10"},"packages/engine/src/interaction/systems/MediaControlSystem.ts:10")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"default"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"world")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/3fd50fe/packages/engine/src/interaction/systems/MediaControlSystem.ts#L12"},"packages/engine/src/interaction/systems/MediaControlSystem.ts:12")))}m.isMDXComponent=!0}}]);