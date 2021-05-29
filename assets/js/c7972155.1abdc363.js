(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[13316],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),c=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),k=n,f=d["".concat(m,".").concat(k)]||d[k]||o[k]||i;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62120:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return o}});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),l=["components"],p={id:"particles_classes_particleemitter",title:"Module: particles/classes/ParticleEmitter",sidebar_label:"particles/classes/ParticleEmitter",custom_edit_url:null},m={unversionedId:"docs-engine/modules/particles_classes_particleemitter",id:"docs-engine/modules/particles_classes_particleemitter",isDocsHomePage:!1,title:"Module: particles/classes/ParticleEmitter",description:"Functions",source:"@site/docs/docs-engine/modules/particles_classes_particleemitter.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/particles_classes_particleemitter",permalink:"/xrengine-docs/docs/docs-engine/modules/particles_classes_particleemitter",editUrl:null,version:"current",sidebar_label:"particles/classes/ParticleEmitter",frontMatter:{id:"particles_classes_particleemitter",title:"Module: particles/classes/ParticleEmitter",sidebar_label:"particles/classes/ParticleEmitter",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: networking/types/SnapshotDataTypes",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_types_snapshotdatatypes"},next:{title:"Module: particles/classes/ParticleMesh",permalink:"/xrengine-docs/docs/docs-engine/modules/particles_classes_particlemesh"}},c=[{value:"Functions",id:"functions",children:[{value:"createParticleEmitter",id:"createparticleemitter",children:[]},{value:"deleteParticleEmitter",id:"deleteparticleemitter",children:[]},{value:"setEmitterMatrixWorld",id:"setemittermatrixworld",children:[]},{value:"setEmitterTime",id:"setemittertime",children:[]}]}],s={toc:c};function o(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createparticleemitter"},"createParticleEmitter"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createParticleEmitter"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particleemitterinterface"},(0,i.kt)("em",{parentName:"a"},"ParticleEmitterInterface")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"matrixWorld"),": Matrix4, ",(0,i.kt)("inlineCode",{parentName:"p"},"time?"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"): ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particleemitter"},(0,i.kt)("em",{parentName:"a"},"ParticleEmitter"))),(0,i.kt)("p",null,"Create particle emitter."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particleemitterinterface"},(0,i.kt)("em",{parentName:"a"},"ParticleEmitterInterface"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Options for particle emitter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matrixWorld")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Matrix4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Matrix world of particle emitter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Emitter time.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particleemitter"},(0,i.kt)("em",{parentName:"a"},"ParticleEmitter"))),(0,i.kt)("p",null,"Newly created particle emitter."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/particles/classes/ParticleEmitter.ts#L40"},"packages/engine/src/particles/classes/ParticleEmitter.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deleteparticleemitter"},"deleteParticleEmitter"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"deleteParticleEmitter"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"emitter"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particleemitter"},(0,i.kt)("em",{parentName:"a"},"ParticleEmitter")),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Delete particle emitter."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"emitter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particleemitter"},(0,i.kt)("em",{parentName:"a"},"ParticleEmitter"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Emitter to be deleted.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/particles/classes/ParticleEmitter.ts#L142"},"packages/engine/src/particles/classes/ParticleEmitter.ts:142")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setemittermatrixworld"},"setEmitterMatrixWorld"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setEmitterMatrixWorld"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"emitter"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particleemitter"},(0,i.kt)("em",{parentName:"a"},"ParticleEmitter")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"matrixWorld"),": Matrix4, ",(0,i.kt)("inlineCode",{parentName:"p"},"time"),": ",(0,i.kt)("em",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"deltaTime"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Apply matrix world to particle emitter."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"emitter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particleemitter"},(0,i.kt)("em",{parentName:"a"},"ParticleEmitter"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Particle emitter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matrixWorld")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Matrix4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Matrix world to be applied on particle emitter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Time to be applied on particle emitter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"deltaTime")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Time since last frame.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/particles/classes/ParticleEmitter.ts#L348"},"packages/engine/src/particles/classes/ParticleEmitter.ts:348")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setemittertime"},"setEmitterTime"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setEmitterTime"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"emitter"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particleemitter"},(0,i.kt)("em",{parentName:"a"},"ParticleEmitter")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"time"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Set particle emitter time."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"emitter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particleemitter"},(0,i.kt)("em",{parentName:"a"},"ParticleEmitter"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Particle emitter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Time of the particle emitter.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/particles/classes/ParticleEmitter.ts#L337"},"packages/engine/src/particles/classes/ParticleEmitter.ts:337")))}o.isMDXComponent=!0}}]);