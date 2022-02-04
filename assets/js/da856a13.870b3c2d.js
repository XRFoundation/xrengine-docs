"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[60395],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95954:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],o={id:"particles_functions_particleHelpers",title:"Module: particles/functions/particleHelpers",sidebar_label:"particles/functions/particleHelpers",sidebar_position:0,custom_edit_url:null},c=void 0,s={unversionedId:"generated/engine/modules/particles_functions_particleHelpers",id:"generated/engine/modules/particles_functions_particleHelpers",title:"Module: particles/functions/particleHelpers",description:"Variables",source:"@site/docs/generated/engine/modules/particles_functions_particleHelpers.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/particles_functions_particleHelpers",permalink:"/xrengine-docs/docs/generated/engine/modules/particles_functions_particleHelpers",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"particles_functions_particleHelpers",title:"Module: particles/functions/particleHelpers",sidebar_label:"particles/functions/particleHelpers",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"particles/functions/ParticleEmitterMesh",permalink:"/xrengine-docs/docs/generated/engine/modules/particles_functions_ParticleEmitterMesh"},next:{title:"particles/interfaces",permalink:"/xrengine-docs/docs/generated/engine/modules/particles_interfaces"}},p=[{value:"Variables",id:"variables",children:[{value:"DEG2RAD",id:"deg2rad",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"fragmentShader",id:"fragmentshader",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"vertexShader",id:"vertexshader",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"deg2rad"},"DEG2RAD"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"DEG2RAD"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0174533")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/32a127a/packages/engine/src/particles/functions/particleHelpers.ts#L1"},"packages/engine/src/particles/functions/particleHelpers.ts:1")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fragmentshader"},"fragmentShader"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"fragmentShader"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\n  #include <common>\\n  #include <fog_pars_fragment>\\n  uniform sampler2D map;\\n  varying vec2 vUV;\\n  varying vec4 vColor;\\n  void main() {\\n    gl_FragColor = texture2D(map,  vUV) * vColor;\\n    #include <fog_fragment>\\n  }\\n"')),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/32a127a/packages/engine/src/particles/functions/particleHelpers.ts#L27"},"packages/engine/src/particles/functions/particleHelpers.ts:27")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"vertexshader"},"vertexShader"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"vertexShader"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\n  #include <common>\\n  attribute vec4 particlePosition;\\n  attribute vec4 particleColor;\\n  attribute float particleAngle;\\n  varying vec4 vColor;\\n  varying vec2 vUV;\\n  uniform mat4 emitterMatrix;\\n  #include <fog_pars_vertex>\\n  void main() {\\n    vUV = uv;\\n    vColor = particleColor;\\n    float particleScale = particlePosition.w;\\n    vec4 mvPosition = viewMatrix * emitterMatrix * vec4(particlePosition.xyz, 1.0);\\n    \\n    vec3 rotatedPosition = position;\\n    rotatedPosition.x = cos( particleAngle ) * position.x - sin( particleAngle ) * position.y;\\n    rotatedPosition.y = sin( particleAngle ) * position.x + cos( particleAngle ) * position.y;\\n    mvPosition.xyz += rotatedPosition * particleScale;\\n    gl_Position = projectionMatrix * mvPosition;\\n    #include <fog_vertex>\\n  }\\n"')),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/32a127a/packages/engine/src/particles/functions/particleHelpers.ts#L3"},"packages/engine/src/particles/functions/particleHelpers.ts:3")))}d.isMDXComponent=!0}}]);