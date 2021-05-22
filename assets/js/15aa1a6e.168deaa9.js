(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[51081],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return i},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return r?a.createElement(f,o(o({ref:t},i),{},{components:r})):a.createElement(f,o({ref:t},i))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16554:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return i}});var a=r(22122),n=r(19756),s=(r(67294),r(3905)),o={id:"types_sctpparameters",title:"Module: types/SctpParameters",sidebar_label:"types/SctpParameters",custom_edit_url:null},p={unversionedId:"docs-server-core/modules/types_sctpparameters",id:"docs-server-core/modules/types_sctpparameters",isDocsHomePage:!1,title:"Module: types/SctpParameters",description:"Type aliases",source:"@site/docs/docs-server-core/modules/types_sctpparameters.md",sourceDirName:"docs-server-core/modules",slug:"/docs-server-core/modules/types_sctpparameters",permalink:"/xrengine-docs/docs/docs-server-core/modules/types_sctpparameters",editUrl:null,version:"current",sidebar_label:"types/SctpParameters",frontMatter:{id:"types_sctpparameters",title:"Module: types/SctpParameters",sidebar_label:"types/SctpParameters",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: types/PageObject",permalink:"/xrengine-docs/docs/docs-server-core/modules/types_pageobject"},next:{title:"Module: types/WebRtcTransportParams",permalink:"/xrengine-docs/docs/docs-server-core/modules/types_webrtctransportparams"}},l=[{value:"Type aliases",id:"type-aliases",children:[{value:"SctpParameters",id:"sctpparameters",children:[]}]}],c={toc:l};function i(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,s.kt)("h3",{id:"sctpparameters"},"SctpParameters"),(0,s.kt)("p",null,"\u01ac ",(0,s.kt)("strong",{parentName:"p"},"SctpParameters"),": ",(0,s.kt)("em",{parentName:"p"},"object")),(0,s.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"MIS")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Maximum number of incoming SCTP streams.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"OS")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Initially requested number of outgoing SCTP streams.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"maxMessageSize")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Maximum allowed size for SCTP messages.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"port")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Must always equal 5000.")))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/761b06c83/packages/server-core/src/types/SctpParameters.ts#L3"},"packages/server-core/src/types/SctpParameters.ts:3")))}i.isMDXComponent=!0}}]);