(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[83362],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84384:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],m={id:"common_functions_quaternionutils",title:"Module: common/functions/QuaternionUtils",sidebar_label:"common/functions/QuaternionUtils",custom_edit_url:null},l={unversionedId:"docs-engine/modules/common_functions_quaternionutils",id:"docs-engine/modules/common_functions_quaternionutils",isDocsHomePage:!1,title:"Module: common/functions/QuaternionUtils",description:"Table of contents",source:"@site/docs/docs-engine/modules/common_functions_quaternionutils.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/common_functions_quaternionutils",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_quaternionutils",editUrl:null,version:"current",sidebar_label:"common/functions/QuaternionUtils",frontMatter:{id:"common_functions_quaternionutils",title:"Module: common/functions/QuaternionUtils",sidebar_label:"common/functions/QuaternionUtils",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: common/functions/MathRandomFunctions",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_mathrandomfunctions"},next:{title:"Module: common/functions/Timer",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_timer"}},u=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Interfaces",id:"interfaces",children:[]}]},{value:"Functions",id:"functions",children:[{value:"pitchFromQuaternion",id:"pitchfromquaternion",children:[]},{value:"rollFromQuaternion",id:"rollfromquaternion",children:[]},{value:"vector4ArrayToAxisObject",id:"vector4arraytoaxisobject",children:[]},{value:"yawFromQuaternion",id:"yawfromquaternion",children:[]}]}],c={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/xrengine-docs/docs/docs-engine/interfaces/common_functions_quaternionutils.quataxis"},"quatAxis"))),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"pitchfromquaternion"},"pitchFromQuaternion"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"pitchFromQuaternion"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"q"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"[]): ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"q")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"),"[]")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/common/functions/QuaternionUtils.ts#L20"},"packages/engine/src/common/functions/QuaternionUtils.ts:20")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"rollfromquaternion"},"rollFromQuaternion"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"rollFromQuaternion"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"q"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"[]): ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"q")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"),"[]")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/common/functions/QuaternionUtils.ts#L32"},"packages/engine/src/common/functions/QuaternionUtils.ts:32")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"vector4arraytoaxisobject"},"vector4ArrayToAxisObject"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"vector4ArrayToAxisObject"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"q"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"[]): ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_functions_quaternionutils.quataxis"},(0,o.kt)("em",{parentName:"a"},"quatAxis"))),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"q")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"),"[]")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_functions_quaternionutils.quataxis"},(0,o.kt)("em",{parentName:"a"},"quatAxis"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/common/functions/QuaternionUtils.ts#L9"},"packages/engine/src/common/functions/QuaternionUtils.ts:9")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"yawfromquaternion"},"yawFromQuaternion"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"yawFromQuaternion"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"q"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"[]): ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"q")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"),"[]")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/common/functions/QuaternionUtils.ts#L42"},"packages/engine/src/common/functions/QuaternionUtils.ts:42")))}s.isMDXComponent=!0}}]);