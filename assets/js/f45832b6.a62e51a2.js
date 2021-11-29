"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[42062],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41687:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"common_functions_GeometryFunctions",title:"Module: common/functions/GeometryFunctions",sidebar_label:"common/functions/GeometryFunctions",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"generated/engine/modules/common_functions_GeometryFunctions",id:"generated/engine/modules/common_functions_GeometryFunctions",isDocsHomePage:!1,title:"Module: common/functions/GeometryFunctions",description:"Functions",source:"@site/docs/generated/engine/modules/common_functions_GeometryFunctions.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/common_functions_GeometryFunctions",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_GeometryFunctions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_GeometryFunctions",title:"Module: common/functions/GeometryFunctions",sidebar_label:"common/functions/GeometryFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"common/functions/FunctionHelpers",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_FunctionHelpers"},next:{title:"common/functions/MathLerpFunctions",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_MathLerpFunctions"}},u=[{value:"Functions",id:"functions",children:[{value:"getRelativeSizesOfGeometries",id:"getrelativesizesofgeometries",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"getrelativesizesofgeometries"},"getRelativeSizesOfGeometries"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getRelativeSizesOfGeometries"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dimension"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BufferGeometry")),(0,i.kt)("td",{parentName:"tr",align:"left"},"if the result is applied to this geometry's scale it would be the same size as ",(0,i.kt)("inlineCode",{parentName:"td"},"source"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"source")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BufferGeometry")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dimension")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"x"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"y"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"z"')),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/797d657/packages/engine/src/common/functions/GeometryFunctions.ts#L5"},"packages/engine/src/common/functions/GeometryFunctions.ts:5")))}d.isMDXComponent=!0}}]);