"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[24679],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=o(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],l={id:"physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator",title:"Class: VectorSpringSimulator",sidebar_label:"VectorSpringSimulator",custom_edit_url:null},p=void 0,o={unversionedId:"generated/engine/classes/physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator",id:"generated/engine/classes/physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator",isDocsHomePage:!1,title:"Class: VectorSpringSimulator",description:"physics/classes/springs/VectorSpringSimulator.VectorSpringSimulator",source:"@site/docs/generated/engine/classes/physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator.md",sourceDirName:"generated/engine/classes",slug:"/generated/engine/classes/physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator",permalink:"/xrengine-docs/docs/generated/engine/classes/physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator",editUrl:null,tags:[],version:"current",frontMatter:{id:"physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator",title:"Class: VectorSpringSimulator",sidebar_label:"VectorSpringSimulator",custom_edit_url:null},sidebar:"sidebar",previous:{title:"SpringSimulator",permalink:"/xrengine-docs/docs/generated/engine/classes/physics_classes_springs_SpringSimulator.SpringSimulator"},next:{title:"default",permalink:"/xrengine-docs/docs/generated/engine/classes/renderer_THREE_WebGL.default"}},d=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Overrides",id:"overrides",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[{value:"Overrides",id:"overrides-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"damping",id:"damping",children:[{value:"Inherited from",id:"inherited-from",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"frameTime",id:"frametime",children:[{value:"Inherited from",id:"inherited-from-1",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"mass",id:"mass",children:[{value:"Inherited from",id:"inherited-from-2",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"offset",id:"offset",children:[{value:"Inherited from",id:"inherited-from-3",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"position",id:"position",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"target",id:"target",children:[{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"velocity",id:"velocity",children:[{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"generateFrames",id:"generateframes",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Inherited from",id:"inherited-from-4",children:[],level:4},{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3},{value:"getFrame",id:"getframe",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Overrides",id:"overrides-2",children:[],level:4},{value:"Defined in",id:"defined-in-10",children:[],level:4}],level:3},{value:"init",id:"init",children:[{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-11",children:[],level:4}],level:3},{value:"lastFrame",id:"lastframe",children:[{value:"Returns",id:"returns-3",children:[],level:4},{value:"Inherited from",id:"inherited-from-5",children:[],level:4},{value:"Defined in",id:"defined-in-12",children:[],level:4}],level:3},{value:"setFPS",id:"setfps",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Inherited from",id:"inherited-from-6",children:[],level:4},{value:"Defined in",id:"defined-in-13",children:[],level:4}],level:3},{value:"simulate",id:"simulate",children:[{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-5",children:[],level:4},{value:"Overrides",id:"overrides-3",children:[],level:4},{value:"Defined in",id:"defined-in-14",children:[],level:4}],level:3}],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/physics_classes_springs_VectorSpringSimulator"},"physics/classes/springs/VectorSpringSimulator"),".VectorSpringSimulator"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},(0,i.kt)("inlineCode",{parentName:"a"},"SimulatorBase"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"VectorSpringSimulator"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new VectorSpringSimulator"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"fps"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mass"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"damping"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fps")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mass")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"damping")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L22"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:22")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cache"},"cache"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cache"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"SimulationFrameVector"),"[]"),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#cache"},"cache")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L20"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"damping"},"damping"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"damping"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#damping"},"damping")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L3"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:3")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"frametime"},"frameTime"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"frameTime"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#frametime"},"frameTime")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L4"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mass"},"mass"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mass"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#mass"},"mass")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L2"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:2")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"offset"},"offset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"offset"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#offset"},"offset")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L5"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"position"},"position"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"position"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L17"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"target"},"target"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"target"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L19"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"velocity"},"velocity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"velocity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L18"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:18")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"generateframes"},"generateFrames"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"generateFrames"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"timeStep"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Generates frames between last simulation call and the current one"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timeStep")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#generateframes"},"generateFrames")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L27"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getframe"},"getFrame"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getFrame"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"isLastFrame"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"SimulationFrameVector")),(0,i.kt)("p",null,"Gets another simulation frame"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isLastFrame")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SimulationFrameVector")),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#getframe"},"getFrame")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L57"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"init"},"init"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"init"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L29"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lastframe"},"lastFrame"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"lastFrame"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#lastframe"},"lastFrame")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L19"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setfps"},"setFPS"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setFPS"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#setfps"},"setFPS")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L15"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"simulate"},"simulate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"simulate"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"timeStep"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Advances the simulation by given time step"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timeStep")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"physics_classes_springs_SimulatorBase.SimulatorBase#simulate"},"simulate")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/20afc18/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L45"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:45")))}m.isMDXComponent=!0}}]);