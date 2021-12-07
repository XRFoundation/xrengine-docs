"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[54856],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=o.createContext({}),l=function(e){var n=o.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,f=d["".concat(m,".").concat(u)]||d[u]||s[u]||r;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77988:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],p={id:"avatar_components_AnimationComponent",title:"Module: avatar/components/AnimationComponent",sidebar_label:"avatar/components/AnimationComponent",sidebar_position:0,custom_edit_url:null},m=void 0,l={unversionedId:"generated/engine/modules/avatar_components_AnimationComponent",id:"generated/engine/modules/avatar_components_AnimationComponent",isDocsHomePage:!1,title:"Module: avatar/components/AnimationComponent",description:"Variables",source:"@site/docs/generated/engine/modules/avatar_components_AnimationComponent.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/avatar_components_AnimationComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/avatar_components_AnimationComponent",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"avatar_components_AnimationComponent",title:"Module: avatar/components/AnimationComponent",sidebar_label:"avatar/components/AnimationComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"avatar/animations/Util",permalink:"/xrengine-docs/docs/generated/engine/modules/avatar_animations_Util"},next:{title:"avatar/components/AvatarAnimationComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/avatar_components_AvatarAnimationComponent"}},c=[{value:"Variables",id:"variables",children:[{value:"AnimationComponent",id:"animationcomponent",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],s={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"animationcomponent"},"AnimationComponent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"AnimationComponent"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimationComponentType")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,r.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,r.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,r.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,r.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,r.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/e4ac83b/packages/engine/src/avatar/components/AnimationComponent.ts#L10"},"packages/engine/src/avatar/components/AnimationComponent.ts:10")))}d.isMDXComponent=!0}}]);