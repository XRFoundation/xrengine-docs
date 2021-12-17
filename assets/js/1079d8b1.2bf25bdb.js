"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[17831],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return t?o.createElement(y,a(a({ref:n},c),{},{components:t})):o.createElement(y,a({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10662:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=t(87462),i=t(63366),r=(t(67294),t(3905)),a=["components"],l={id:"physics_components_CollisionComponent",title:"Module: physics/components/CollisionComponent",sidebar_label:"physics/components/CollisionComponent",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"generated/engine/modules/physics_components_CollisionComponent",id:"generated/engine/modules/physics_components_CollisionComponent",isDocsHomePage:!1,title:"Module: physics/components/CollisionComponent",description:"Type aliases",source:"@site/docs/generated/engine/modules/physics_components_CollisionComponent.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/physics_components_CollisionComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/physics_components_CollisionComponent",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"physics_components_CollisionComponent",title:"Module: physics/components/CollisionComponent",sidebar_label:"physics/components/CollisionComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"physics/components/ColliderComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/physics_components_ColliderComponent"},next:{title:"physics/components/RaycastComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/physics_components_RaycastComponent"}},c=[{value:"Type aliases",id:"type-aliases",children:[{value:"CollisionComponentType",id:"collisioncomponenttype",children:[{value:"Type declaration",id:"type-declaration",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Variables",id:"variables",children:[{value:"CollisionComponent",id:"collisioncomponent",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],m={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,r.kt)("h3",{id:"collisioncomponenttype"},"CollisionComponentType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"CollisionComponentType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"collisions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("a",{parentName:"td",href:"physics_types_PhysicsTypes#colliderhitevent"},(0,r.kt)("inlineCode",{parentName:"a"},"ColliderHitEvent"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"physics_types_PhysicsTypes#controllerhitevent"},(0,r.kt)("inlineCode",{parentName:"a"},"ControllerHitEvent"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"physics_types_PhysicsTypes#controllerobstaclehitevent"},(0,r.kt)("inlineCode",{parentName:"a"},"ControllerObstacleHitEvent")),")[]")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fd1c1d0/packages/engine/src/physics/components/CollisionComponent.ts#L4"},"packages/engine/src/physics/components/CollisionComponent.ts:4")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"collisioncomponent"},"CollisionComponent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"CollisionComponent"),": ",(0,r.kt)("a",{parentName:"p",href:"physics_components_CollisionComponent#collisioncomponenttype"},(0,r.kt)("inlineCode",{parentName:"a"},"CollisionComponentType"))," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,r.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,r.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,r.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,r.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,r.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fd1c1d0/packages/engine/src/physics/components/CollisionComponent.ts#L8"},"packages/engine/src/physics/components/CollisionComponent.ts:8")))}d.isMDXComponent=!0}}]);