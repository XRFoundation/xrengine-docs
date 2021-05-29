(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[98489],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var i=2;i<s;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65875:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return i},default:function(){return u}});var n=r(22122),o=r(19756),s=(r(67294),r(3905)),a=["components"],c={id:"hooks_set_response_status_code",title:"Module: hooks/set-response-status-code",sidebar_label:"hooks/set-response-status-code",custom_edit_url:null},p={unversionedId:"docs-server-core/modules/hooks_set_response_status_code",id:"docs-server-core/modules/hooks_set_response_status_code",isDocsHomePage:!1,title:"Module: hooks/set-response-status-code",description:"Properties",source:"@site/docs/docs-server-core/modules/hooks_set_response_status_code.md",sourceDirName:"docs-server-core/modules",slug:"/docs-server-core/modules/hooks_set_response_status_code",permalink:"/xrengine-docs/docs/docs-server-core/modules/hooks_set_response_status_code",editUrl:null,version:"current",sidebar_label:"hooks/set-response-status-code",frontMatter:{id:"hooks_set_response_status_code",title:"Module: hooks/set-response-status-code",sidebar_label:"hooks/set-response-status-code",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: hooks/set-resource-id-from-project",permalink:"/xrengine-docs/docs/docs-server-core/modules/hooks_set_resource_id_from_project"},next:{title:"Module: hooks/set-user-id",permalink:"/xrengine-docs/docs/docs-server-core/modules/hooks_set_user_id"}},i=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],l={toc:i};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"default"},"default"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"default"),": (",(0,s.kt)("inlineCode",{parentName:"p"},"statusCode"),": ",(0,s.kt)("em",{parentName:"p"},"number"),") => (",(0,s.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,s.kt)("em",{parentName:"p"},"HookContext"),"<Application<any, any",">",", any",">",") => ",(0,s.kt)("em",{parentName:"p"},"HookContext"),"<Application<any, any",">",", any",">"),(0,s.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,s.kt)("p",null,"\u25b8 (",(0,s.kt)("inlineCode",{parentName:"p"},"statusCode?"),": ",(0,s.kt)("em",{parentName:"p"},"number"),"): ",(0,s.kt)("em",{parentName:"p"},"function")),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"statusCode")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"200")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," (",(0,s.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,s.kt)("em",{parentName:"p"},"HookContext"),"<Application<any, any",">",", any",">",") => ",(0,s.kt)("em",{parentName:"p"},"HookContext"),"<Application<any, any",">",", any",">"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/server-core/src/hooks/set-response-status-code.ts#L1"},"packages/server-core/src/hooks/set-response-status-code.ts:1")))}u.isMDXComponent=!0}}]);