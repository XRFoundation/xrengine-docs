"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[384],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7679:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],c={},s="Editor & Locations",l={unversionedId:"concepts/editor_scenes_locations",id:"concepts/editor_scenes_locations",title:"Editor & Locations",description:"Scene Editor",source:"@site/docs/3_concepts/2_editor_scenes_locations.md",sourceDirName:"3_concepts",slug:"/concepts/editor_scenes_locations",permalink:"/xrengine-docs/docs/concepts/editor_scenes_locations",draft:!1,editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/3_concepts/2_editor_scenes_locations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Projects",permalink:"/xrengine-docs/docs/concepts/projects_api"},next:{title:"Entity Component System",permalink:"/xrengine-docs/docs/concepts/ecs"}},p={},u=[{value:"Scene Editor",id:"scene-editor",level:2},{value:"Locations &amp; Instances",id:"locations--instances",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"editor--locations"},"Editor & Locations"),(0,i.kt)("h2",{id:"scene-editor"},"Scene Editor"),(0,i.kt)("p",null,"Navigating to ",(0,i.kt)("inlineCode",{parentName:"p"},"/editor")," will show you the projects page, where you can open existing projects or create a new one."),(0,i.kt)("p",null,"Opening a project will route you to ",(0,i.kt)("inlineCode",{parentName:"p"},"/editor/<projectName>")," where the project editor will load. From here, you can open a scene, which will route you again to ",(0,i.kt)("inlineCode",{parentName:"p"},"/editor/<projectName>/<sceneName>")),(0,i.kt)("p",null,"The scene consists of a list of 'nodes' which act as templates / prefabs. These are what you would normally expect in a scene editor, such as models, colliders and audio, but we also support a wide range of integrations, such as shopify, wordpress and even portals to let you traverse between worlds."),(0,i.kt)("p",null,"To save a scene with Ctrl+S or in the top left hamburger menu."),(0,i.kt)("h2",{id:"locations--instances"},"Locations & Instances"),(0,i.kt)("p",null,"Locations can be thought of as instantiations of scene. This is how you connect your scene to a shared session."),(0,i.kt)("p",null,"Locations can be loaded via the ",(0,i.kt)("inlineCode",{parentName:"p"},"/location/<locationName>")," route, where ",(0,i.kt)("inlineCode",{parentName:"p"},"locationName")," is the name of the location. By default, the locations ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"apartment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sky-station")," are added. This will tell the server to figure out which of the current instances of the location is best suited for you to join. This allows us to scale events and locations to potentially millions of concurrent users without having to support them all on a single instance. Instances can be customised with the 'matchmaker' functionality to create private rooms for you to hang out with your friends that disappear once everyone leaves, or game where more complicated logic can be handled for things like tournaments with multiple rounds."),(0,i.kt)("p",null,"Adding a new location is done from ",(0,i.kt)("inlineCode",{parentName:"p"},"/admin/locations")," route."))}f.isMDXComponent=!0}}]);