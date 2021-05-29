(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[63710],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(k,i(i({ref:r},p),{},{components:t})):n.createElement(k,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29561:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i=["components"],s={id:"hooks_restrict_user_role",title:"Module: hooks/restrict-user-role",sidebar_label:"hooks/restrict-user-role",custom_edit_url:null},l={unversionedId:"docs-server-core/modules/hooks_restrict_user_role",id:"docs-server-core/modules/hooks_restrict_user_role",isDocsHomePage:!1,title:"Module: hooks/restrict-user-role",description:"Properties",source:"@site/docs/docs-server-core/modules/hooks_restrict_user_role.md",sourceDirName:"docs-server-core/modules",slug:"/docs-server-core/modules/hooks_restrict_user_role",permalink:"/xrengine-docs/docs/docs-server-core/modules/hooks_restrict_user_role",editUrl:null,version:"current",sidebar_label:"hooks/restrict-user-role",frontMatter:{id:"hooks_restrict_user_role",title:"Module: hooks/restrict-user-role",sidebar_label:"hooks/restrict-user-role",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: hooks/replace-thumbnail-link",permalink:"/xrengine-docs/docs/docs-server-core/modules/hooks_replace_thumbnail_link"},next:{title:"Module: hooks/send-invite",permalink:"/xrengine-docs/docs/docs-server-core/modules/hooks_send_invite"}},c=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],p={toc:c};function u(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"default"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"userRole"),": ",(0,a.kt)("em",{parentName:"p"},"string"),") => (",(0,a.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,a.kt)("em",{parentName:"p"},"HookContext"),"<Application<any, any",">",", any",">",") => ",(0,a.kt)("em",{parentName:"p"},"Promise"),"<HookContext<Application<any, any",">",", any",">",">"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"userRole"),": ",(0,a.kt)("em",{parentName:"p"},"string"),"): ",(0,a.kt)("em",{parentName:"p"},"function")),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"userRole")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"string"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," (",(0,a.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,a.kt)("em",{parentName:"p"},"HookContext"),"<Application<any, any",">",", any",">",") => ",(0,a.kt)("em",{parentName:"p"},"Promise"),"<HookContext<Application<any, any",">",", any",">",">"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/2d20a3183/packages/server-core/src/hooks/restrict-user-role.ts#L5"},"packages/server-core/src/hooks/restrict-user-role.ts:5")))}u.isMDXComponent=!0}}]);