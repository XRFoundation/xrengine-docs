"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[3719],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,f=c["".concat(d,".").concat(s)]||c[s]||u[s]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75621:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"common_functions_updateKeyVal",title:"Module: common/functions/updateKeyVal",sidebar_label:"common/functions/updateKeyVal",sidebar_position:0,custom_edit_url:null},d=void 0,p={unversionedId:"generated/engine/modules/common_functions_updateKeyVal",id:"generated/engine/modules/common_functions_updateKeyVal",title:"Module: common/functions/updateKeyVal",description:"Functions",source:"@site/docs/generated/engine/modules/common_functions_updateKeyVal.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/common_functions_updateKeyVal",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_updateKeyVal",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_updateKeyVal",title:"Module: common/functions/updateKeyVal",sidebar_label:"common/functions/updateKeyVal",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"common/functions/string",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_string"},next:{title:"common/functions/vectorHelpers",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_vectorHelpers"}},m=[{value:"Functions",id:"functions",children:[{value:"default",id:"default",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"default"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Val"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateArgs"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"updateFn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultValue"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateFunction"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Val"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateArgs"),">"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Key"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Val")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Val"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"UpdateArgs")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"get")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"key"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Key"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Val"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"set")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"key"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Key"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"val"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Val"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Val"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"updateFn")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"UpdateMediatorFunction"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Val"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"UpdateArgs"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"defaultValue")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Val"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UpdateFunction"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Val"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateArgs"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/3fd50fe/packages/engine/src/common/functions/updateKeyVal.ts#L7"},"packages/engine/src/common/functions/updateKeyVal.ts:7")))}c.isMDXComponent=!0}}]);