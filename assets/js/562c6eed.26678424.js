"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[67938],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=r.createContext({}),d=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,f=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),o=d(n),k=a,c=o["".concat(f,".").concat(k)]||o[k]||u[k]||i;return n?r.createElement(c,l(l({ref:t},p),{},{components:n})):r.createElement(c,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=o;var s={};for(var f in t)hasOwnProperty.call(t,f)&&(s[f]=t[f]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}o.displayName="MDXCreateElement"},47225:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return f},metadata:function(){return d},toc:function(){return p},default:function(){return o}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={id:"assets_superbuffer_buffer.BufferManager",title:"Class: BufferManager",sidebar_label:"BufferManager",custom_edit_url:null},f=void 0,d={unversionedId:"generated/engine/classes/assets_superbuffer_buffer.BufferManager",id:"generated/engine/classes/assets_superbuffer_buffer.BufferManager",title:"Class: BufferManager",description:"assets/superbuffer/buffer.BufferManager",source:"@site/docs/generated/engine/classes/assets_superbuffer_buffer.BufferManager.md",sourceDirName:"generated/engine/classes",slug:"/generated/engine/classes/assets_superbuffer_buffer.BufferManager",permalink:"/xrengine-docs/docs/generated/engine/classes/assets_superbuffer_buffer.BufferManager",editUrl:null,tags:[],version:"current",frontMatter:{id:"assets_superbuffer_buffer.BufferManager",title:"Class: BufferManager",sidebar_label:"BufferManager",custom_edit_url:null},sidebar:"sidebar",previous:{title:"TGALoader",permalink:"/xrengine-docs/docs/generated/engine/classes/assets_loaders_tga_TGALoader.TGALoader"},next:{title:"Model",permalink:"/xrengine-docs/docs/generated/engine/classes/assets_superbuffer_model.Model"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"_buffer",id:"_buffer",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"_dataView",id:"_dataview",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"_offset",id:"_offset",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"_textDecoder",id:"_textdecoder",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"_textEncoder",id:"_textencoder",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"_uint8Array",id:"_uint8array",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"maxByteSize",id:"maxbytesize",children:[{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3}],level:2},{value:"Accessors",id:"accessors",children:[{value:"offset",id:"offset",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"append",id:"append",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3},{value:"finalize",id:"finalize",children:[{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-10",children:[],level:4}],level:3},{value:"read",id:"read",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-11",children:[],level:4},{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-12",children:[],level:4},{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-5",children:[],level:4},{value:"Defined in",id:"defined-in-13",children:[],level:4},{value:"Parameters",id:"parameters-5",children:[],level:4},{value:"Returns",id:"returns-6",children:[],level:4},{value:"Defined in",id:"defined-in-14",children:[],level:4}],level:3},{value:"refresh",id:"refresh",children:[{value:"Parameters",id:"parameters-6",children:[],level:4},{value:"Returns",id:"returns-7",children:[],level:4},{value:"Defined in",id:"defined-in-15",children:[],level:4}],level:3}],level:2}],u={toc:p};function o(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/assets_superbuffer_buffer"},"assets/superbuffer/buffer"),".BufferManager"),(0,i.kt)("p",null,"The BufferManager class provides an API for reading and writing to an ArrayBuffer via\nDataViews while tracking the current byte offset and automatically handling string encoding."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new BufferManager"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"bufferSize?"),")"),(0,i.kt)("p",null,"Create a new BufferManager instance."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bufferSize?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The maximum size of the internal ArrayBuffer.")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L65"},"packages/engine/src/assets/superbuffer/buffer.ts:65")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"_buffer"},"_","buffer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"_","buffer"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")),(0,i.kt)("p",null,"Internal ArrayBuffer reference."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L33"},"packages/engine/src/assets/superbuffer/buffer.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_dataview"},"_","dataView"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"_","dataView"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"DataView")),(0,i.kt)("p",null,"Internal DataView reference."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L37"},"packages/engine/src/assets/superbuffer/buffer.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_offset"},"_","offset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"_","offset"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Current byte position in the DataView."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L41"},"packages/engine/src/assets/superbuffer/buffer.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_textdecoder"},"_","textDecoder"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"_","textDecoder"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"TextDecoder")),(0,i.kt)("p",null,"Internal TextDecoder reference."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L49"},"packages/engine/src/assets/superbuffer/buffer.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_textencoder"},"_","textEncoder"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"_","textEncoder"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"TextEncoder")),(0,i.kt)("p",null,"Internal TextEncoder reference."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L45"},"packages/engine/src/assets/superbuffer/buffer.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_uint8array"},"_","uint8Array"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"_","uint8Array"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,i.kt)("p",null,"Internal Uint8Array representation of the DataView."),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L53"},"packages/engine/src/assets/superbuffer/buffer.ts:53")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxbytesize"},"maxByteSize"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"maxByteSize"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Max buffer size for a serialized object. Default: 1 megabyte."),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L29"},"packages/engine/src/assets/superbuffer/buffer.ts:29")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"offset"},"offset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"offset"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Get the current byte offset of the buffer."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L57"},"packages/engine/src/assets/superbuffer/buffer.ts:57")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"append"},"append"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"append"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"bufferView"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Append data to the internal DataView buffer."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/assets_superbuffer_types#bufferview"},(0,i.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,i.kt)("a",{parentName:"td",href:"../modules/assets_superbuffer_types#serializable"},(0,i.kt)("inlineCode",{parentName:"a"},"Serializable")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"BufferView to define the type appended.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/assets_superbuffer_types#serializable"},(0,i.kt)("inlineCode",{parentName:"a"},"Serializable"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data to be appended to the DataView.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L99"},"packages/engine/src/assets/superbuffer/buffer.ts:99")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"finalize"},"finalize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"finalize"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")),(0,i.kt)("p",null,"Copy the contents of the internal ArrayBuffer (which may contain trailing empty sections)\ninto a new ArrayBuffer with no empty bytes."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L90"},"packages/engine/src/assets/superbuffer/buffer.ts:90")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"read"},"read"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"read"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"bufferView"),"): ",(0,i.kt)("a",{parentName:"p",href:"../modules/assets_superbuffer_types#serializable"},(0,i.kt)("inlineCode",{parentName:"a"},"Serializable"))),(0,i.kt)("p",null,"Read the DataView at the current byte offset according to the BufferView type, and\nincrement the offset if the read was successful."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/assets_superbuffer_types#bufferview"},(0,i.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,i.kt)("a",{parentName:"td",href:"../modules/assets_superbuffer_types#serializable"},(0,i.kt)("inlineCode",{parentName:"a"},"Serializable")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"BufferView to define the type read.")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/assets_superbuffer_types#serializable"},(0,i.kt)("inlineCode",{parentName:"a"},"Serializable"))),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L135"},"packages/engine/src/assets/superbuffer/buffer.ts:135")),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"read"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"bufferView"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/assets_superbuffer_types#bufferview"},(0,i.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),">")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L136"},"packages/engine/src/assets/superbuffer/buffer.ts:136")),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"read"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"bufferView"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/assets_superbuffer_types#bufferview"},(0,i.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"number"),">")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L137"},"packages/engine/src/assets/superbuffer/buffer.ts:137")),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"read"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"bufferView"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"bigint")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bufferView")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/assets_superbuffer_types#bufferview"},(0,i.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"bigint"),">")))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bigint")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L138"},"packages/engine/src/assets/superbuffer/buffer.ts:138")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"refresh"},"refresh"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"refresh"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"newBuffer?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Refresh this Model's internal buffer and DataView before toBuffer is called."),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"newBuffer?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specific ArrayBuffer instance, otherwise a default will be used.")))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7c7982d/packages/engine/src/assets/superbuffer/buffer.ts#L79"},"packages/engine/src/assets/superbuffer/buffer.ts:79")))}o.isMDXComponent=!0}}]);