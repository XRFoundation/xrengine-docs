(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[50646],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return N}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),o=d(a),N=r,u=o["".concat(m,".").concat(N)]||o[N]||k[N]||l;return a?n.createElement(u,p(p({ref:t},s),{},{components:a})):n.createElement(u,p({ref:t},s))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=o;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},70425:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),p=["components"],i={id:"assets_loaders_fbx_nurbsutils",title:"Module: assets/loaders/fbx/NURBSUtils",sidebar_label:"assets/loaders/fbx/NURBSUtils",custom_edit_url:null},m={unversionedId:"docs-engine/modules/assets_loaders_fbx_nurbsutils",id:"docs-engine/modules/assets_loaders_fbx_nurbsutils",isDocsHomePage:!1,title:"Module: assets/loaders/fbx/NURBSUtils",description:"Functions",source:"@site/docs/docs-engine/modules/assets_loaders_fbx_nurbsutils.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/assets_loaders_fbx_nurbsutils",permalink:"/xrengine-docs/docs/docs-engine/modules/assets_loaders_fbx_nurbsutils",editUrl:null,version:"current",sidebar_label:"assets/loaders/fbx/NURBSUtils",frontMatter:{id:"assets_loaders_fbx_nurbsutils",title:"Module: assets/loaders/fbx/NURBSUtils",sidebar_label:"assets/loaders/fbx/NURBSUtils",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: assets/loaders/fbx/NURBSCurve",permalink:"/xrengine-docs/docs/docs-engine/modules/assets_loaders_fbx_nurbscurve"},next:{title:"Module: assets/loaders/gltf/ComponentData",permalink:"/xrengine-docs/docs/docs-engine/modules/assets_loaders_gltf_componentdata"}},d=[{value:"Functions",id:"functions",children:[{value:"calcBSplineDerivatives",id:"calcbsplinederivatives",children:[]},{value:"calcBSplinePoint",id:"calcbsplinepoint",children:[]},{value:"calcBasisFunctionDerivatives",id:"calcbasisfunctionderivatives",children:[]},{value:"calcBasisFunctions",id:"calcbasisfunctions",children:[]},{value:"calcKoverI",id:"calckoveri",children:[]},{value:"calcNURBSDerivatives",id:"calcnurbsderivatives",children:[]},{value:"calcRationalCurveDerivatives",id:"calcrationalcurvederivatives",children:[]},{value:"calcSurfacePoint",id:"calcsurfacepoint",children:[]},{value:"findSpan",id:"findspan",children:[]}]}],s={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"calcbsplinederivatives"},"calcBSplineDerivatives"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"calcBSplineDerivatives"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"p"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"U"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"[], ",(0,l.kt)("inlineCode",{parentName:"p"},"P"),": Vector4[], ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"nd"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"): Vector4[]"),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"p")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"U")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"),"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"P")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Vector4[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"u")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"nd")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," Vector4[]"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/loaders/fbx/NURBSUtils.ts#L268"},"packages/engine/src/assets/loaders/fbx/NURBSUtils.ts:268")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"calcbsplinepoint"},"calcBSplinePoint"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"calcBSplinePoint"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"p"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"U"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"[], ",(0,l.kt)("inlineCode",{parentName:"p"},"P"),": Vector4[], ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"): Vector4"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"p")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"U")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"),"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"P")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Vector4[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"u")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," Vector4"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/loaders/fbx/NURBSUtils.ts#L109"},"packages/engine/src/assets/loaders/fbx/NURBSUtils.ts:109")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"calcbasisfunctionderivatives"},"calcBasisFunctionDerivatives"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"calcBasisFunctionDerivatives"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"span"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"p"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"U"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"[]): ",(0,l.kt)("em",{parentName:"p"},"number"),"[][]"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"span")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"u")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"p")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"n")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"U")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"),"[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"number"),"[][]"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/loaders/fbx/NURBSUtils.ts#L140"},"packages/engine/src/assets/loaders/fbx/NURBSUtils.ts:140")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"calcbasisfunctions"},"calcBasisFunctions"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"calcBasisFunctions"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"span"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"p"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"U"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"[]): ",(0,l.kt)("em",{parentName:"p"},"number"),"[]"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"span")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"u")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"p")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"U")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"),"[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"number"),"[]"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/loaders/fbx/NURBSUtils.ts#L69"},"packages/engine/src/assets/loaders/fbx/NURBSUtils.ts:69")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"calckoveri"},"calcKoverI"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"calcKoverI"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"k"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"i"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"): ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"k")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"i")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/loaders/fbx/NURBSUtils.ts#L316"},"packages/engine/src/assets/loaders/fbx/NURBSUtils.ts:316")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"calcnurbsderivatives"},"calcNURBSDerivatives"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"calcNURBSDerivatives"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"p"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"U"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"[], ",(0,l.kt)("inlineCode",{parentName:"p"},"P"),": Vector4[], ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"nd"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"): Vector3[]"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"p")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"U")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"),"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"P")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Vector4[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"u")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"nd")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," Vector3[]"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/loaders/fbx/NURBSUtils.ts#L392"},"packages/engine/src/assets/loaders/fbx/NURBSUtils.ts:392")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"calcrationalcurvederivatives"},"calcRationalCurveDerivatives"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"calcRationalCurveDerivatives"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"Pders"),": Vector4[]): Vector3[]"),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Pders")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Vector4[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," Vector3[]"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/loaders/fbx/NURBSUtils.ts#L349"},"packages/engine/src/assets/loaders/fbx/NURBSUtils.ts:349")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"calcsurfacepoint"},"calcSurfacePoint"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"calcSurfacePoint"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"p"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"q"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"U"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"[], ",(0,l.kt)("inlineCode",{parentName:"p"},"V"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"[], ",(0,l.kt)("inlineCode",{parentName:"p"},"P"),": Vector4[], ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"v"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"target"),": Vector3): ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"p")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"q")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"U")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"),"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"V")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"),"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"P")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Vector4[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"u")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"v")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"target")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Vector3")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/loaders/fbx/NURBSUtils.ts#L407"},"packages/engine/src/assets/loaders/fbx/NURBSUtils.ts:407")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"findspan"},"findSpan"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"findSpan"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"p"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"U"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"[]): ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NURBS Utils\n")),(0,l.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"p")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"u")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"U")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"),"[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/loaders/fbx/NURBSUtils.ts#L20"},"packages/engine/src/assets/loaders/fbx/NURBSUtils.ts:20")))}k.isMDXComponent=!0}}]);