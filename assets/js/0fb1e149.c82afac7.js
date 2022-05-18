"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[6174],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64718:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={},c=void 0,l={unversionedId:"projects_editor_scenes/editor-scenes-locations",id:"projects_editor_scenes/editor-scenes-locations",title:"editor-scenes-locations",description:"Scene Editor",source:"@site/docs/2_projects_editor_scenes/02_editor-scenes-locations.md",sourceDirName:"2_projects_editor_scenes",slug:"/projects_editor_scenes/editor-scenes-locations",permalink:"/xrengine-docs/docs/projects_editor_scenes/editor-scenes-locations",editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/2_projects_editor_scenes/02_editor-scenes-locations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{}},p=[{value:"Scene Editor",id:"scene-editor",children:[],level:2},{value:"Locations &amp; Instances",id:"locations--instances",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"scene-editor"},"Scene Editor"),(0,i.kt)("p",null,"Navigating to ",(0,i.kt)("inlineCode",{parentName:"p"},"/editor")," will show you the projects page, where you can open existing projects or create a new one. "),(0,i.kt)("p",null,"Opening a project will route you to ",(0,i.kt)("inlineCode",{parentName:"p"},"/editor/<projectName>")," where the project editor will load. From here, you can open a scene, which will route you again to ",(0,i.kt)("inlineCode",{parentName:"p"},"/editor/<projectName>/<sceneName>")),(0,i.kt)("p",null,"The scene consists of a list of 'nodes' which act as templates / prefabs. These are what you would normally expect in a scene editor, such as models, colliders and audio, but we also support a wide range of integrations, such as shopify, wordpress and even portals to let you traverse between worlds."),(0,i.kt)("p",null,"To save a scene with Ctrl+S or in the top left hamburger menu."),(0,i.kt)("h2",{id:"locations--instances"},"Locations & Instances"),(0,i.kt)("p",null,"Locations can be thought of as instantiations of scene. This is how you connect your scene to a shared session."),(0,i.kt)("p",null,"Locations can be loaded via the ",(0,i.kt)("inlineCode",{parentName:"p"},"/location/<locationName>")," route, where ",(0,i.kt)("inlineCode",{parentName:"p"},"locationName")," is the name of the location. By default, the locations ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"apartment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sky-station")," are added. This will tell the server to figure out which of the current instances of the location is best suited for you to join. This allows us to scale events and locations to potentially millions of concurrent users without having to support them all on a single instance. Instances can be customised with the 'matchmaker' functionality to create private rooms for you to hang out with your friends that disappear once everyone leaves, or game where more complicated logic can be handled for things like tournaments with multiple rounds. "),(0,i.kt)("p",null,"Adding a new location is done from ",(0,i.kt)("inlineCode",{parentName:"p"},"/admin/locations")," route."))}d.isMDXComponent=!0}}]);