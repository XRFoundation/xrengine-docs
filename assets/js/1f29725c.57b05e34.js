"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[74505],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(t),c=i,N=u["".concat(l,".").concat(c)]||u[c]||k[c]||r;return t?a.createElement(N,p(p({ref:n},m),{},{components:t})):a.createElement(N,p({ref:n},m))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,p=new Array(r);p[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var d=2;d<r;d++)p[d]=t[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},15867:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),p=["components"],o={id:"avatar_AvatarBoneMatching",title:"Module: avatar/AvatarBoneMatching",sidebar_label:"avatar/AvatarBoneMatching",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"generated/engine/modules/avatar_AvatarBoneMatching",id:"generated/engine/modules/avatar_AvatarBoneMatching",title:"Module: avatar/AvatarBoneMatching",description:"Functions",source:"@site/docs/generated/engine/modules/avatar_AvatarBoneMatching.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/avatar_AvatarBoneMatching",permalink:"/xrengine-docs/docs/generated/engine/modules/avatar_AvatarBoneMatching",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"avatar_AvatarBoneMatching",title:"Module: avatar/AvatarBoneMatching",sidebar_label:"avatar/AvatarBoneMatching",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"avatar/AnimationSystem",permalink:"/xrengine-docs/docs/generated/engine/modules/avatar_AnimationSystem"},next:{title:"avatar/AvatarControllerSystem",permalink:"/xrengine-docs/docs/generated/engine/modules/avatar_AvatarControllerSystem"}},m=[{value:"Functions",id:"functions",children:[{value:"default",id:"default",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],k={toc:m};function u(e){var n=e.components,t=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"default"},"default"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"default"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"model"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"Head"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"Hips"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftArm"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","arm; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftEye"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Eye","_","L; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftFoot"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","ankle; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftForeArm"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","elbow; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftHand"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","wrist; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftLeg"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","knee; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftShoulder"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","shoulder; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftUpLeg"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","leg; ",(0,r.kt)("inlineCode",{parentName:"p"},"Neck"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightArm"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","arm; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightEye"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Eye","_","R; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightFoot"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","ankle; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightForeArm"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","elbow; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightHand"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","wrist; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightLeg"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","knee; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightShoulder"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","shoulder; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightUpLeg"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","leg; ",(0,r.kt)("inlineCode",{parentName:"p"},"Root"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"Spine"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"Spine1"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"Spine2"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Chest }"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"model")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"Head"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"Hips"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftArm"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","arm; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftEye"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Eye","_","L; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftFoot"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","ankle; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftForeArm"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","elbow; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftHand"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","wrist; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftLeg"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","knee; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftShoulder"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","shoulder; ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftUpLeg"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Left","_","leg; ",(0,r.kt)("inlineCode",{parentName:"p"},"Neck"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightArm"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","arm; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightEye"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Eye","_","R; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightFoot"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","ankle; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightForeArm"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","elbow; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightHand"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","wrist; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightLeg"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","knee; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightShoulder"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","shoulder; ",(0,r.kt)("inlineCode",{parentName:"p"},"RightUpLeg"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Right","_","leg; ",(0,r.kt)("inlineCode",{parentName:"p"},"Root"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"Spine"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"Spine1"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"Spine2"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = Chest }"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/183680d/packages/engine/src/avatar/AvatarBoneMatching.ts#L385"},"packages/engine/src/avatar/AvatarBoneMatching.ts:385")))}u.isMDXComponent=!0}}]);