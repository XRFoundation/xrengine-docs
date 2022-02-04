"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[92293],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=o(n),u=a,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14652:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return p},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],c={id:"particles_interfaces.ParticleMesh",title:"Interface: ParticleMesh",sidebar_label:"ParticleMesh",custom_edit_url:null},s=void 0,o={unversionedId:"generated/engine/interfaces/particles_interfaces.ParticleMesh",id:"generated/engine/interfaces/particles_interfaces.ParticleMesh",title:"Interface: ParticleMesh",description:"particles/interfaces.ParticleMesh",source:"@site/docs/generated/engine/interfaces/particles_interfaces.ParticleMesh.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/particles_interfaces.ParticleMesh",permalink:"/xrengine-docs/docs/generated/engine/interfaces/particles_interfaces.ParticleMesh",editUrl:null,tags:[],version:"current",frontMatter:{id:"particles_interfaces.ParticleMesh",title:"Interface: ParticleMesh",sidebar_label:"ParticleMesh",custom_edit_url:null},sidebar:"sidebar",previous:{title:"ParticleEmitterInterface",permalink:"/xrengine-docs/docs/generated/engine/interfaces/particles_interfaces.ParticleEmitterInterface"},next:{title:"ParticleMeshMaterial",permalink:"/xrengine-docs/docs/generated/engine/interfaces/particles_interfaces.ParticleMeshMaterial"}},p=[{value:"Properties",id:"properties",children:[{value:"geometry",id:"geometry",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"material",id:"material",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"userData",id:"userdata",children:[{value:"Type declaration",id:"type-declaration",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/generated/engine/modules/particles_interfaces"},"particles/interfaces"),".ParticleMesh"),(0,i.kt)("p",null,"Interface for particle mesh."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"geometry"},"geometry"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"geometry"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/generated/engine/modules/particles_interfaces#particlegeometry"},(0,i.kt)("inlineCode",{parentName:"a"},"ParticleGeometry"))),(0,i.kt)("p",null,"Geometry of particle mesh."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/32a127a/packages/engine/src/particles/interfaces/index.ts#L12"},"packages/engine/src/particles/interfaces/index.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"material"},"material"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"material"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/generated/engine/interfaces/particles_interfaces.ParticleMeshMaterial"},(0,i.kt)("inlineCode",{parentName:"a"},"ParticleMeshMaterial"))),(0,i.kt)("p",null,"Material for particles."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/32a127a/packages/engine/src/particles/interfaces/index.ts#L14"},"packages/engine/src/particles/interfaces/index.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userdata"},"userData"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userData"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"User data."),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"meshConfig")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Configs for mesh.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nextIndex")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/32a127a/packages/engine/src/particles/interfaces/index.ts#L16"},"packages/engine/src/particles/interfaces/index.ts:16")))}f.isMDXComponent=!0}}]);