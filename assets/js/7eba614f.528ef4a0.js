"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[88726],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,x=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(x,a(a({ref:t},l),{},{components:n})):r.createElement(x,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16188:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={id:"util_exceptions_exception.NotFoundException",title:"Class: NotFoundException",sidebar_label:"NotFoundException",custom_edit_url:null},p=void 0,s={unversionedId:"generated/server-core/classes/util_exceptions_exception.NotFoundException",id:"generated/server-core/classes/util_exceptions_exception.NotFoundException",title:"Class: NotFoundException",description:"util/exceptions/exception.NotFoundException",source:"@site/docs/generated/server-core/classes/util_exceptions_exception.NotFoundException.md",sourceDirName:"generated/server-core/classes",slug:"/generated/server-core/classes/util_exceptions_exception.NotFoundException",permalink:"/xrengine-docs/docs/generated/server-core/classes/util_exceptions_exception.NotFoundException",editUrl:null,tags:[],version:"current",frontMatter:{id:"util_exceptions_exception.NotFoundException",title:"Class: NotFoundException",sidebar_label:"NotFoundException",custom_edit_url:null},sidebar:"sidebar",previous:{title:"User",permalink:"/xrengine-docs/docs/generated/server-core/classes/user_user_user_class.User"},next:{title:"UnauthenticatedException",permalink:"/xrengine-docs/docs/generated/server-core/classes/util_exceptions_exception.UnauthenticatedException"}},l=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Overrides",id:"overrides",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"message",id:"message",children:[{value:"Inherited from",id:"inherited-from",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"statusCode",id:"statuscode",children:[{value:"Inherited from",id:"inherited-from-1",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],u={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../modules/util_exceptions_exception"},"util/exceptions/exception"),".NotFoundException"),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpException"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"NotFoundException"))))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"new NotFoundException"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"message"),")"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"message")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h4",{id:"overrides"},"Overrides"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException"},"HttpException"),".",(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException#constructor"},"constructor")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ab78143/packages/server-core/src/util/exceptions/exception.ts#L10"},"packages/server-core/src/util/exceptions/exception.ts:10")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"message"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException"},"HttpException"),".",(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException#message"},"message")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ab78143/packages/server-core/src/util/exceptions/httpException.ts#L3"},"packages/server-core/src/util/exceptions/httpException.ts:3")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"statuscode"},"statusCode"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"statusCode"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException"},"HttpException"),".",(0,o.kt)("a",{parentName:"p",href:"util_exceptions_httpException.HttpException#statuscode"},"statusCode")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ab78143/packages/server-core/src/util/exceptions/httpException.ts#L2"},"packages/server-core/src/util/exceptions/httpException.ts:2")))}d.isMDXComponent=!0}}]);