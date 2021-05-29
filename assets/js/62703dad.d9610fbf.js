(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[77661],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),f=m(a),u=n,c=f["".concat(i,".").concat(u)]||f[u]||d[u]||s;return a?r.createElement(c,p(p({ref:t},o),{},{components:a})):r.createElement(c,p({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,p=new Array(s);p[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var m=2;m<s;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},99780:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return m},default:function(){return d}});var r=a(22122),n=a(19756),s=(a(67294),a(3905)),p=["components"],l={id:"assets_superbuffer_model.model",title:"Class: Model<T>",sidebar_label:"Model",custom_edit_url:null},i={unversionedId:"docs-engine/classes/assets_superbuffer_model.model",id:"docs-engine/classes/assets_superbuffer_model.model",isDocsHomePage:!1,title:"Class: Model<T\\>",description:"assets/superbuffer/model.Model",source:"@site/docs/docs-engine/classes/assets_superbuffer_model.model.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/assets_superbuffer_model.model",permalink:"/xrengine-docs/docs/docs-engine/classes/assets_superbuffer_model.model",editUrl:null,version:"current",sidebar_label:"Model",frontMatter:{id:"assets_superbuffer_model.model",title:"Class: Model<T>",sidebar_label:"Model",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: BufferManager",permalink:"/xrengine-docs/docs/docs-engine/classes/assets_superbuffer_buffer.buffermanager"},next:{title:"Class: Schema<T\\>",permalink:"/xrengine-docs/docs/docs-engine/classes/assets_superbuffer_schema.schema"}},m=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_buffer",id:"_buffer",children:[]},{value:"schema",id:"schema",children:[]},{value:"BUFFER_ARRAY",id:"buffer_array",children:[]},{value:"BUFFER_OBJECT",id:"buffer_object",children:[]}]},{value:"Methods",id:"methods",children:[{value:"deserialize",id:"deserialize",children:[]},{value:"fromBuffer",id:"frombuffer",children:[]},{value:"serialize",id:"serialize",children:[]},{value:"toBuffer",id:"tobuffer",children:[]},{value:"fromSchemaDefinition",id:"fromschemadefinition",children:[]},{value:"getIdFromBuffer",id:"getidfrombuffer",children:[]}]}],o={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,p);return(0,s.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_model"},"assets/superbuffer/model"),".Model"),(0,s.kt)("p",null,"The Model class provides an API for serializing and deserializing ArrayBuffers into objects\nspecified by their Schema definitions."),(0,s.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"T")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"Record"),"<string, unknown",">"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"Record"),"<string, unknown",">")))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"+"," ",(0,s.kt)("strong",{parentName:"p"},"new Model"),"<T",">","(",(0,s.kt)("inlineCode",{parentName:"p"},"schema"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_superbuffer_schema.schema"},(0,s.kt)("em",{parentName:"a"},"Schema")),"<T",">",", ",(0,s.kt)("inlineCode",{parentName:"p"},"bufferSize?"),": ",(0,s.kt)("em",{parentName:"p"},"number"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_superbuffer_model.model"},(0,s.kt)("em",{parentName:"a"},"Model")),"<T",">"),(0,s.kt)("p",null,"Create a new Model instance."),(0,s.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"T")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"Record"),"<string, unknown",">"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"Record"),"<string, unknown",">")))),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"schema")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/assets_superbuffer_schema.schema"},(0,s.kt)("em",{parentName:"a"},"Schema")),"<T",">"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Schema instance that this model is defined by.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"bufferSize?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The maximum size of serializable data. Default: 1 megabyte.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_superbuffer_model.model"},(0,s.kt)("em",{parentName:"a"},"Model")),"<T",">"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L27"},"packages/engine/src/assets/superbuffer/model.ts:27")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"_buffer"},"_","buffer"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"_","buffer"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_superbuffer_buffer.buffermanager"},(0,s.kt)("em",{parentName:"a"},"BufferManager"))),(0,s.kt)("p",null,"Internal BufferManager reference."),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L27"},"packages/engine/src/assets/superbuffer/model.ts:27")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"schema"},"schema"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"schema"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_superbuffer_schema.schema"},(0,s.kt)("em",{parentName:"a"},"Schema")),"<T",">"),(0,s.kt)("p",null,"Schema definition reference."),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L23"},"packages/engine/src/assets/superbuffer/model.ts:23")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"buffer_array"},"BUFFER","_","ARRAY"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"BUFFER","_","ARRAY"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),"= 0"),(0,s.kt)("p",null,"Unique identifier denoting the buffer's structure is an array of flattened hashmaps."),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L15"},"packages/engine/src/assets/superbuffer/model.ts:15")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"buffer_object"},"BUFFER","_","OBJECT"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"BUFFER","_","OBJECT"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"1"),"= 1"),(0,s.kt)("p",null,"Unique identifier denoting the buffer's structure is a flattened hashmap."),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L19"},"packages/engine/src/assets/superbuffer/model.ts:19")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"deserialize"},"deserialize"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected"),(0,s.kt)("strong",{parentName:"p"},"deserialize"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"struct"),": ",(0,s.kt)("em",{parentName:"p"},"Record"),"<string, any",">","): ",(0,s.kt)("em",{parentName:"p"},"Record"),"<string, any",">"),(0,s.kt)("p",null,"Deserialize data from the ArrayBuffer that adheres to the provided object structure."),(0,s.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"struct")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"Record"),"<string, any",">"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Object structure in the schema definition.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"Record"),"<string, any",">"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L163"},"packages/engine/src/assets/superbuffer/model.ts:163")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"frombuffer"},"fromBuffer"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"fromBuffer"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"buffer"),": ArrayBuffer): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemaobject"},(0,s.kt)("em",{parentName:"a"},"SchemaObject")),"<T",">"," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemaobject"},(0,s.kt)("em",{parentName:"a"},"SchemaObject")),"<T",">","[]"),(0,s.kt)("p",null,"Deserialize an ArrayBuffer to reconstruct the original object or array of objects defined by\nthe schema of this Model."),(0,s.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"buffer")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ArrayBuffer"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The ArrayBuffer to be deserialized.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemaobject"},(0,s.kt)("em",{parentName:"a"},"SchemaObject")),"<T",">"," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemaobject"},(0,s.kt)("em",{parentName:"a"},"SchemaObject")),"<T",">","[]"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L86"},"packages/engine/src/assets/superbuffer/model.ts:86")),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"fromBuffer"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"buffer"),": ArrayBuffer, ",(0,s.kt)("inlineCode",{parentName:"p"},"expect"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"1"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemaobject"},(0,s.kt)("em",{parentName:"a"},"SchemaObject")),"<T",">"),(0,s.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"buffer")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ArrayBuffer")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"expect")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"1"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemaobject"},(0,s.kt)("em",{parentName:"a"},"SchemaObject")),"<T",">"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L87"},"packages/engine/src/assets/superbuffer/model.ts:87")),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"fromBuffer"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"buffer"),": ArrayBuffer, ",(0,s.kt)("inlineCode",{parentName:"p"},"expect"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemaobject"},(0,s.kt)("em",{parentName:"a"},"SchemaObject")),"<T",">","[]"),(0,s.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"buffer")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ArrayBuffer")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"expect")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"0"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemaobject"},(0,s.kt)("em",{parentName:"a"},"SchemaObject")),"<T",">","[]"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L88"},"packages/engine/src/assets/superbuffer/model.ts:88")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"serialize"},"serialize"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected"),(0,s.kt)("strong",{parentName:"p"},"serialize"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,s.kt)("em",{parentName:"p"},"Record"),"<string, any",">",", ",(0,s.kt)("inlineCode",{parentName:"p"},"struct"),": ",(0,s.kt)("em",{parentName:"p"},"Record"),"<string, any",">","): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Serialize data that adheres to the provided object structure."),(0,s.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"data")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"Record"),"<string, any",">"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Data to be serialized.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"struct")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"Record"),"<string, any",">"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Object structure in the schema definition.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L122"},"packages/engine/src/assets/superbuffer/model.ts:122")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"tobuffer"},"toBuffer"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"toBuffer"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"objectOrArray"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemaobject"},(0,s.kt)("em",{parentName:"a"},"SchemaObject")),"<T",">"," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemaobject"},(0,s.kt)("em",{parentName:"a"},"SchemaObject")),"<T",">","[]): ArrayBuffer"),(0,s.kt)("p",null,"Serialize an object or an array of objects defined by this Model's schema into an ArrayBuffer."),(0,s.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"objectOrArray")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemaobject"},(0,s.kt)("em",{parentName:"a"},"SchemaObject")),"<T",">"," ","|"," ",(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemaobject"},(0,s.kt)("em",{parentName:"a"},"SchemaObject")),"<T",">","[]"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The object or array of objects to be serialized.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ArrayBuffer"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L63"},"packages/engine/src/assets/superbuffer/model.ts:63")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"fromschemadefinition"},"fromSchemaDefinition"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static"),(0,s.kt)("strong",{parentName:"p"},"fromSchemaDefinition"),"<T",">","(",(0,s.kt)("inlineCode",{parentName:"p"},"struct"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemadefinition"},(0,s.kt)("em",{parentName:"a"},"SchemaDefinition")),"<T",">",", ",(0,s.kt)("inlineCode",{parentName:"p"},"id?"),": ",(0,s.kt)("em",{parentName:"p"},"number"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_superbuffer_model.model"},(0,s.kt)("em",{parentName:"a"},"Model")),"<T",">"),(0,s.kt)("p",null,"Create a Model directly from the provided schema name and definition."),(0,s.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"T")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"Record"),"<string, unknown",">")))),(0,s.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"struct")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/assets_superbuffer_types#schemadefinition"},(0,s.kt)("em",{parentName:"a"},"SchemaDefinition")),"<T",">"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Structure of the schema.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"id?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_superbuffer_model.model"},(0,s.kt)("em",{parentName:"a"},"Model")),"<T",">"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L44"},"packages/engine/src/assets/superbuffer/model.ts:44")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getidfrombuffer"},"getIdFromBuffer"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static"),(0,s.kt)("strong",{parentName:"p"},"getIdFromBuffer"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"buffer"),": ArrayBuffer): ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Extract the root Model id from the ArrayBuffer."),(0,s.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"buffer")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ArrayBuffer"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The ArrayBuffer from which to extract the id.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/assets/superbuffer/model.ts#L55"},"packages/engine/src/assets/superbuffer/model.ts:55")))}d.isMDXComponent=!0}}]);