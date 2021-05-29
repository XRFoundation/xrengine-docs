(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[42797],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=l(n),m=r,u=k["".concat(s,".").concat(m)]||k[m]||c[m]||o;return n?a.createElement(u,i(i({ref:e},d),{},{components:n})):a.createElement(u,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=k;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},60788:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],p={id:"networking_functions_networkinterpolationfunctions",title:"Module: networking/functions/NetworkInterpolationFunctions",sidebar_label:"networking/functions/NetworkInterpolationFunctions",custom_edit_url:null},s={unversionedId:"docs-engine/modules/networking_functions_networkinterpolationfunctions",id:"docs-engine/modules/networking_functions_networkinterpolationfunctions",isDocsHomePage:!1,title:"Module: networking/functions/NetworkInterpolationFunctions",description:"Functions",source:"@site/docs/docs-engine/modules/networking_functions_networkinterpolationfunctions.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/networking_functions_networkinterpolationfunctions",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_functions_networkinterpolationfunctions",editUrl:null,version:"current",sidebar_label:"networking/functions/NetworkInterpolationFunctions",frontMatter:{id:"networking_functions_networkinterpolationfunctions",title:"Module: networking/functions/NetworkInterpolationFunctions",sidebar_label:"networking/functions/NetworkInterpolationFunctions",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: networking/enums/MessageTypes",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_enums_messagetypes"},next:{title:"Module: networking/functions/handleInputOnServer",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_functions_handleinputonserver"}},l=[{value:"Functions",id:"functions",children:[{value:"addSnapshot",id:"addsnapshot",children:[]},{value:"calculateInterpolation",id:"calculateinterpolation",children:[]},{value:"createSnapshot",id:"createsnapshot",children:[]},{value:"interpolate",id:"interpolate",children:[]},{value:"snapshot",id:"snapshot",children:[]}]}],d={toc:l};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"addsnapshot"},"addSnapshot"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"addSnapshot"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"snapshot"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Add snapshot into vault."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"snapshot")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Snapshot to be added into the vault.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/networking/functions/NetworkInterpolationFunctions.ts#L53"},"packages/engine/src/networking/functions/NetworkInterpolationFunctions.ts:53")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"calculateinterpolation"},"calculateInterpolation"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"calculateInterpolation"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"parameters"),": ",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"arrayName?"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"): ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.interpolatedsnapshot"},(0,o.kt)("em",{parentName:"a"},"InterpolatedSnapshot"))," ","|"," ",(0,o.kt)("em",{parentName:"p"},"undefined")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"parameters")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"arrayName")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"''")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.interpolatedsnapshot"},(0,o.kt)("em",{parentName:"a"},"InterpolatedSnapshot"))," ","|"," ",(0,o.kt)("em",{parentName:"p"},"undefined")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/networking/functions/NetworkInterpolationFunctions.ts#L274"},"packages/engine/src/networking/functions/NetworkInterpolationFunctions.ts:274")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"createsnapshot"},"createSnapshot"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"createSnapshot"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"state"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_types_snapshotdatatypes#stateentitygroup"},(0,o.kt)("em",{parentName:"a"},"StateEntityGroup")),"): ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot"))),(0,o.kt)("p",null,"Create a new Snapshot."),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"state")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/networking_types_snapshotdatatypes#stateentitygroup"},(0,o.kt)("em",{parentName:"a"},"StateEntityGroup"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"State of the world or client to be stored in this snapshot.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot"))),(0,o.kt)("p",null,"Newly created snapshot."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/networking/functions/NetworkInterpolationFunctions.ts#L26"},"packages/engine/src/networking/functions/NetworkInterpolationFunctions.ts:26")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"interpolate"},"interpolate"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"interpolate"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"snapshotA"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"snapshotB"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"timeOrPercentage"),": ",(0,o.kt)("em",{parentName:"p"},"number"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"parameters"),": ",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"deep"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"): ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.interpolatedsnapshot"},(0,o.kt)("em",{parentName:"a"},"InterpolatedSnapshot"))),(0,o.kt)("p",null,"Interpolate between two snapshots."),(0,o.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"snapshotA")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"First snapshot to interpolate from.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"snapshotB")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Second snapshot to interpolate to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"timeOrPercentage")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},"How far to interpolate from first snapshot.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"parameters")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"On which param interpolation should be applied.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"deep")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.interpolatedsnapshot"},(0,o.kt)("em",{parentName:"a"},"InterpolatedSnapshot"))),(0,o.kt)("p",null,"Interpolated snapshot."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/networking/functions/NetworkInterpolationFunctions.ts#L106"},"packages/engine/src/networking/functions/NetworkInterpolationFunctions.ts:106")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"snapshot"},"snapshot"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"snapshot"),"(): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/networking/functions/NetworkInterpolationFunctions.ts#L13"},"packages/engine/src/networking/functions/NetworkInterpolationFunctions.ts:13")))}c.isMDXComponent=!0}}]);