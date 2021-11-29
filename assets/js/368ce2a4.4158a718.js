"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[64473],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return s}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),u=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(t),s=r,g=m["".concat(d,".").concat(s)]||m[s]||l[s]||i;return t?o.createElement(g,a(a({ref:n},c),{},{components:t})):o.createElement(g,a({ref:n},c))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63520:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],p={id:"audio_components_AudioTagComponent",title:"Module: audio/components/AudioTagComponent",sidebar_label:"audio/components/AudioTagComponent",sidebar_position:0,custom_edit_url:null},d=void 0,u={unversionedId:"generated/engine/modules/audio_components_AudioTagComponent",id:"generated/engine/modules/audio_components_AudioTagComponent",isDocsHomePage:!1,title:"Module: audio/components/AudioTagComponent",description:"Variables",source:"@site/docs/generated/engine/modules/audio_components_AudioTagComponent.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/audio_components_AudioTagComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/audio_components_AudioTagComponent",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"audio_components_AudioTagComponent",title:"Module: audio/components/AudioTagComponent",sidebar_label:"audio/components/AudioTagComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"audio/components/AudioComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/audio_components_AudioComponent"},next:{title:"audio/components/BackgroundMusic",permalink:"/xrengine-docs/docs/generated/engine/modules/audio_components_BackgroundMusic"}},c=[{value:"Variables",id:"variables",children:[{value:"AudioTagComponent",id:"audiotagcomponent",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],l={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"audiotagcomponent"},"AudioTagComponent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"AudioTagComponent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,i.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,i.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,i.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,i.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/797d657/packages/engine/src/audio/components/AudioTagComponent.ts#L3"},"packages/engine/src/audio/components/AudioTagComponent.ts:3")))}m.isMDXComponent=!0}}]);