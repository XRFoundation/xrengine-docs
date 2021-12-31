"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[50244],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return f}});var t=n(67294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=s,_=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?t.createElement(_,o(o({ref:r},d),{},{components:n})):t.createElement(_,o({ref:r},d))}));function f(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58318:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var t=n(87462),s=n(63366),a=(n(67294),n(3905)),o=["components"],i={id:"scene_classes_water_shaders_waves_drop_fragment",title:"Module: scene/classes/water/shaders/waves/drop_fragment",sidebar_label:"scene/classes/water/shaders/waves/drop_fragment",sidebar_position:0,custom_edit_url:null},c=void 0,l={unversionedId:"generated/engine/modules/scene_classes_water_shaders_waves_drop_fragment",id:"generated/engine/modules/scene_classes_water_shaders_waves_drop_fragment",title:"Module: scene/classes/water/shaders/waves/drop_fragment",description:"Properties",source:"@site/docs/generated/engine/modules/scene_classes_water_shaders_waves_drop_fragment.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/scene_classes_water_shaders_waves_drop_fragment",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_classes_water_shaders_waves_drop_fragment",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_classes_water_shaders_waves_drop_fragment",title:"Module: scene/classes/water/shaders/waves/drop_fragment",sidebar_label:"scene/classes/water/shaders/waves/drop_fragment",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"scene/classes/water/shaders/surface/vertex",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_classes_water_shaders_surface_vertex"},next:{title:"scene/classes/water/shaders/waves/update_fragment",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_classes_water_shaders_waves_update_fragment"}},d=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[],level:3}],level:2}],u={toc:d};function p(e){var r=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\nprecision highp float;\\nprecision highp int;\\n\\nconst float PI = 3.141592653589793;\\nuniform sampler2D texture;\\nuniform vec2 center;\\nuniform float radius;\\nuniform float strength;\\nvarying vec2 coord;\\n\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  float circle = step(length(vUv - 0.5), 0.5);\\n  if(circle == 0.){\\n    discard;\\n  }\\n\\n  /* Get vertex info */\\n  vec4 info = texture2D(texture, coord);\\n\\n  /* Add the drop to the height */\\n  float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);\\n  drop = 0.5 - cos(drop * PI) * 0.5;\\n  info.r += drop * strength;\\n\\n  gl_FragColor = info;\\n}\\n"')))}p.isMDXComponent=!0}}]);