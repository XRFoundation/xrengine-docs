"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[88726],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,x=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(x,a(a({ref:t},s),{},{components:n})):r.createElement(x,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16188:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],p={id:"util_exceptions_exception.NotFoundException",title:"Class: NotFoundException",sidebar_label:"NotFoundException",custom_edit_url:null},c=void 0,l={unversionedId:"generated/server-core/classes/util_exceptions_exception.NotFoundException",id:"generated/server-core/classes/util_exceptions_exception.NotFoundException",title:"Class: NotFoundException",description:"util/exceptions/exception.NotFoundException",source:"@site/docs/generated/server-core/classes/util_exceptions_exception.NotFoundException.md",sourceDirName:"generated/server-core/classes",slug:"/generated/server-core/classes/util_exceptions_exception.NotFoundException",permalink:"/xrengine-docs/docs/generated/server-core/classes/util_exceptions_exception.NotFoundException",editUrl:null,tags:[],version:"current",frontMatter:{id:"util_exceptions_exception.NotFoundException",title:"Class: NotFoundException",sidebar_label:"NotFoundException",custom_edit_url:null},sidebar:"sidebar",previous:{title:"User",permalink:"/xrengine-docs/docs/generated/server-core/classes/user_user_user_class.User"},next:{title:"UnauthenticatedException",permalink:"/xrengine-docs/docs/generated/server-core/classes/util_exceptions_exception.UnauthenticatedException"}},s=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Overrides",id:"overrides",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"message",id:"message",children:[{value:"Inherited from",id:"inherited-from",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"statusCode",id:"statuscode",children:[{value:"Inherited from",id:"inherited-from-1",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../modules/util_exceptions_exception"},"util/exceptions/exception"),".NotFoundException"),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpException"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"NotFoundException"))))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"new NotFoundException"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"message"),")"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"message")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h4",{id:"overrides"},"Overrides"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException"},"HttpException"),".",(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException#constructor"},"constructor")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/873d0d4/packages/server-core/src/util/exceptions/exception.ts#L10"},"util/exceptions/exception.ts:10")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"message"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException"},"HttpException"),".",(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException#message"},"message")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/873d0d4/packages/server-core/src/util/exceptions/httpException.ts#L3"},"util/exceptions/httpException.ts:3")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"statuscode"},"statusCode"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"statusCode"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException"},"HttpException"),".",(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException#statuscode"},"statusCode")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/873d0d4/packages/server-core/src/util/exceptions/httpException.ts#L2"},"util/exceptions/httpException.ts:2")))}d.isMDXComponent=!0}}]);