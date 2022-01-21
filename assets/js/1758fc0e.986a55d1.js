"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[45964],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},63337:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o=["components"],l={id:"scene_functions_loaders_AudioSettingFunctions",title:"Module: scene/functions/loaders/AudioSettingFunctions",sidebar_label:"scene/functions/loaders/AudioSettingFunctions",sidebar_position:0,custom_edit_url:null},s=void 0,d={unversionedId:"generated/engine/modules/scene_functions_loaders_AudioSettingFunctions",id:"generated/engine/modules/scene_functions_loaders_AudioSettingFunctions",title:"Module: scene/functions/loaders/AudioSettingFunctions",description:"Variables",source:"@site/docs/generated/engine/modules/scene_functions_loaders_AudioSettingFunctions.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/scene_functions_loaders_AudioSettingFunctions",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_functions_loaders_AudioSettingFunctions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_loaders_AudioSettingFunctions",title:"Module: scene/functions/loaders/AudioSettingFunctions",sidebar_label:"scene/functions/loaders/AudioSettingFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"scene/functions/loaders/AudioFunctions",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_functions_loaders_AudioFunctions"},next:{title:"scene/functions/loaders/BoxColliderFunctions",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_functions_loaders_BoxColliderFunctions"}},u=[{value:"Variables",id:"variables",children:[{value:"SCENE_COMPONENT_AUDIO_SETTINGS",id:"scene_component_audio_settings",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"deserializeAudioSetting",id:"deserializeaudiosetting",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"serializeAudioSetting",id:"serializeaudiosetting",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],c={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"scene_component_audio_settings"},"SCENE","_","COMPONENT","_","AUDIO","_","SETTINGS"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","AUDIO","_","SETTINGS"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"audio-settings"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c45ddc1/packages/engine/src/scene/functions/loaders/AudioSettingFunctions.ts#L12"},"packages/engine/src/scene/functions/loaders/AudioSettingFunctions.ts:12")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"deserializeaudiosetting"},"deserializeAudioSetting"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"deserializeAudioSetting"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"componentData"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"componentData")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ComponentJson"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c45ddc1/packages/engine/src/scene/functions/loaders/AudioSettingFunctions.ts#L14"},"packages/engine/src/scene/functions/loaders/AudioSettingFunctions.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"serializeaudiosetting"},"serializeAudioSetting"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"serializeAudioSetting"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c45ddc1/packages/engine/src/scene/functions/loaders/AudioSettingFunctions.ts#L22"},"packages/engine/src/scene/functions/loaders/AudioSettingFunctions.ts:22")))}p.isMDXComponent=!0}}]);