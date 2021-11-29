"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[786],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(p,".").concat(u)]||c[u]||o[u]||i;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},91865:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],l={id:"physics_classes_springs_SpringSimulator.SpringSimulator",title:"Class: SpringSimulator",sidebar_label:"SpringSimulator",custom_edit_url:null},p=void 0,d={unversionedId:"generated/engine/classes/physics_classes_springs_SpringSimulator.SpringSimulator",id:"generated/engine/classes/physics_classes_springs_SpringSimulator.SpringSimulator",isDocsHomePage:!1,title:"Class: SpringSimulator",description:"physics/classes/springs/SpringSimulator.SpringSimulator",source:"@site/docs/generated/engine/classes/physics_classes_springs_SpringSimulator.SpringSimulator.md",sourceDirName:"generated/engine/classes",slug:"/generated/engine/classes/physics_classes_springs_SpringSimulator.SpringSimulator",permalink:"/xrengine-docs/docs/generated/engine/classes/physics_classes_springs_SpringSimulator.SpringSimulator",editUrl:null,tags:[],version:"current",frontMatter:{id:"physics_classes_springs_SpringSimulator.SpringSimulator",title:"Class: SpringSimulator",sidebar_label:"SpringSimulator",custom_edit_url:null},sidebar:"sidebar",previous:{title:"RelativeSpringSimulator",permalink:"/xrengine-docs/docs/generated/engine/classes/physics_classes_springs_SpringSimulator.RelativeSpringSimulator"},next:{title:"VectorSpringSimulator",permalink:"/xrengine-docs/docs/generated/engine/classes/physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator"}},m=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Overrides",id:"overrides",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[{value:"Overrides",id:"overrides-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"damping",id:"damping",children:[{value:"Inherited from",id:"inherited-from",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"frameTime",id:"frametime",children:[{value:"Inherited from",id:"inherited-from-1",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"mass",id:"mass",children:[{value:"Inherited from",id:"inherited-from-2",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"offset",id:"offset",children:[{value:"Inherited from",id:"inherited-from-3",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"position",id:"position",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"target",id:"target",children:[{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"velocity",id:"velocity",children:[{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"generateFrames",id:"generateframes",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Inherited from",id:"inherited-from-4",children:[],level:4},{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3},{value:"getFrame",id:"getframe",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Overrides",id:"overrides-2",children:[],level:4},{value:"Defined in",id:"defined-in-10",children:[],level:4}],level:3},{value:"lastFrame",id:"lastframe",children:[{value:"Returns",id:"returns-2",children:[],level:4},{value:"Inherited from",id:"inherited-from-5",children:[],level:4},{value:"Defined in",id:"defined-in-11",children:[],level:4}],level:3},{value:"setFPS",id:"setfps",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Inherited from",id:"inherited-from-6",children:[],level:4},{value:"Defined in",id:"defined-in-12",children:[],level:4}],level:3},{value:"simulate",id:"simulate",children:[{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Overrides",id:"overrides-3",children:[],level:4},{value:"Defined in",id:"defined-in-13",children:[],level:4}],level:3}],level:2}],o={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/physics_classes_springs_SpringSimulator"},"physics/classes/springs/SpringSimulator"),".SpringSimulator"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},(0,i.kt)("inlineCode",{parentName:"a"},"SimulatorBase"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"SpringSimulator"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new SpringSimulator"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"fps"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mass"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"damping"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"startPosition?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"startVelocity?"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fps")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mass")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"damping")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"startPosition")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"startVelocity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0"))))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L22"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:22")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cache"},"cache"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cache"),": ",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulationFrame.SimulationFrame"},(0,i.kt)("inlineCode",{parentName:"a"},"SimulationFrame")),"[]"),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#cache"},"cache")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L20"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"damping"},"damping"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"damping"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#damping"},"damping")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L3"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:3")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"frametime"},"frameTime"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"frameTime"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#frametime"},"frameTime")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L4"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mass"},"mass"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mass"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#mass"},"mass")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L2"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:2")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"offset"},"offset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"offset"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#offset"},"offset")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L5"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"position"},"position"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"position"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L17"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"target"},"target"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"target"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L19"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"velocity"},"velocity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"velocity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L18"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:18")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"generateframes"},"generateFrames"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"generateFrames"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"timeStep"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Generates frames between last simulation call and the current one"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timeStep")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#generateframes"},"generateFrames")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L27"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getframe"},"getFrame"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getFrame"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"isLastFrame"),"): ",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulationFrame.SimulationFrame"},(0,i.kt)("inlineCode",{parentName:"a"},"SimulationFrame"))),(0,i.kt)("p",null,"Gets another simulation frame"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isLastFrame")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulationFrame.SimulationFrame"},(0,i.kt)("inlineCode",{parentName:"a"},"SimulationFrame"))),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#getframe"},"getFrame")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L56"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lastframe"},"lastFrame"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"lastFrame"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#lastframe"},"lastFrame")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L19"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setfps"},"setFPS"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setFPS"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#setfps"},"setFPS")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L15"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"simulate"},"simulate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"simulate"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"timeStep"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Advances the simulation by given time step"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timeStep")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#simulate"},"simulate")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/08c4107/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L44"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:44")))}c.isMDXComponent=!0}}]);