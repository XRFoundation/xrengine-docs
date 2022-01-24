"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[38751],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50929:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],s={id:"physics_functions_getControllerCollisions",title:"Module: physics/functions/getControllerCollisions",sidebar_label:"physics/functions/getControllerCollisions",sidebar_position:0,custom_edit_url:null},a=void 0,c={unversionedId:"generated/engine/modules/physics_functions_getControllerCollisions",id:"generated/engine/modules/physics_functions_getControllerCollisions",title:"Module: physics/functions/getControllerCollisions",description:"Functions",source:"@site/docs/generated/engine/modules/physics_functions_getControllerCollisions.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/physics_functions_getControllerCollisions",permalink:"/xrengine-docs/docs/generated/engine/modules/physics_functions_getControllerCollisions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"physics_functions_getControllerCollisions",title:"Module: physics/functions/getControllerCollisions",sidebar_label:"physics/functions/getControllerCollisions",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"physics/functions/getCollisions",permalink:"/xrengine-docs/docs/generated/engine/modules/physics_functions_getCollisions"},next:{title:"physics/functions/parseModelColliders",permalink:"/xrengine-docs/docs/generated/engine/modules/physics_functions_parseModelColliders"}},u=[{value:"Functions",id:"functions",children:[{value:"getControllerCollisions",id:"getcontrollercollisions",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"getcontrollercollisions"},"getControllerCollisions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"getControllerCollisions"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"component"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"ControllerCollisionHit")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"component")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"ecs_functions_ComponentFunctions#componentconstructor"},(0,i.kt)("inlineCode",{parentName:"a"},"ComponentConstructor")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ControllerCollisionHit")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/75cd502/packages/engine/src/physics/functions/getControllerCollisions.ts#L12"},"packages/engine/src/physics/functions/getControllerCollisions.ts:12")))}d.isMDXComponent=!0}}]);