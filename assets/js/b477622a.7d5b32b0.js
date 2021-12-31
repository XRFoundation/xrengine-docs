"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[34444],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return g}});var t=n(67294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=t.createContext({}),c=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(d.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=l,p=u["".concat(d,".").concat(g)]||u[g]||f[g]||o;return n?t.createElement(p,a(a({ref:r},s),{},{components:n})):t.createElement(p,a({ref:r},s))}));function g(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87787:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var t=n(87462),l=n(63366),o=(n(67294),n(3905)),a=["components"],i={id:"renderer_effects_blending_glsl_overlay_shader_frag",title:"Module: renderer/effects/blending/glsl/overlay/shader.frag",sidebar_label:"renderer/effects/blending/glsl/overlay/shader.frag",custom_edit_url:null},d=void 0,c={unversionedId:"generated/engine/modules/renderer_effects_blending_glsl_overlay_shader_frag",id:"generated/engine/modules/renderer_effects_blending_glsl_overlay_shader_frag",title:"Module: renderer/effects/blending/glsl/overlay/shader.frag",description:"Properties",source:"@site/docs/generated/engine/modules/renderer_effects_blending_glsl_overlay_shader_frag.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/renderer_effects_blending_glsl_overlay_shader_frag",permalink:"/xrengine-docs/docs/generated/engine/modules/renderer_effects_blending_glsl_overlay_shader_frag",editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_effects_blending_glsl_overlay_shader_frag",title:"Module: renderer/effects/blending/glsl/overlay/shader.frag",sidebar_label:"renderer/effects/blending/glsl/overlay/shader.frag",custom_edit_url:null},sidebar:"sidebar",previous:{title:"renderer/effects/blending/glsl/normal/shader.frag",permalink:"/xrengine-docs/docs/generated/engine/modules/renderer_effects_blending_glsl_normal_shader_frag"},next:{title:"renderer/effects/blending/glsl/reflect/shader.frag",permalink:"/xrengine-docs/docs/generated/engine/modules/renderer_effects_blending_glsl_reflect_shader_frag"}},s=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[],level:3}],level:2}],f={toc:s};function u(e){var r=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"default"},"default"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"float blend(const in float x, const in float y) {\\n\\n\\treturn (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\\n\\n}\\n\\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\n\\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\\n\\n\\treturn z * opacity + x * (1.0 - opacity);\\n\\n}\\n"')))}u.isMDXComponent=!0}}]);