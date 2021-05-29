(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[38627],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97086:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),s=["components"],a={id:"hooks_send_invite",title:"Module: hooks/send-invite",sidebar_label:"hooks/send-invite",custom_edit_url:null},c={unversionedId:"docs-server-core/modules/hooks_send_invite",id:"docs-server-core/modules/hooks_send_invite",isDocsHomePage:!1,title:"Module: hooks/send-invite",description:"Properties",source:"@site/docs/docs-server-core/modules/hooks_send_invite.md",sourceDirName:"docs-server-core/modules",slug:"/docs-server-core/modules/hooks_send_invite",permalink:"/xrengine-docs/docs/docs-server-core/modules/hooks_send_invite",editUrl:null,version:"current",sidebar_label:"hooks/send-invite",frontMatter:{id:"hooks_send_invite",title:"Module: hooks/send-invite",sidebar_label:"hooks/send-invite",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: hooks/restrict-user-role",permalink:"/xrengine-docs/docs/docs-server-core/modules/hooks_restrict_user_role"},next:{title:"Module: hooks/set-loggedin-user-in-body",permalink:"/xrengine-docs/docs/docs-server-core/modules/hooks_set_loggedin_user_in_body"}},l=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"default"),": () => (",(0,i.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,i.kt)("em",{parentName:"p"},"HookContext"),"<Application<any, any",">",", any",">",") => ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<HookContext<Application<any, any",">",", any",">",">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("p",null,"\u25b8 (): ",(0,i.kt)("em",{parentName:"p"},"function")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," (",(0,i.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,i.kt)("em",{parentName:"p"},"HookContext"),"<Application<any, any",">",", any",">",") => ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<HookContext<Application<any, any",">",", any",">",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/2d20a3183/packages/server-core/src/hooks/send-invite.ts#L101"},"packages/server-core/src/hooks/send-invite.ts:101")))}p.isMDXComponent=!0}}]);