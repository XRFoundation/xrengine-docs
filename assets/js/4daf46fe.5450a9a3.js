(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[19651],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(o,".").concat(d)]||m[d]||k[d]||s;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45946:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return k}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),i=["components"],p={id:"worker_messagequeue.mainproxy",title:"Class: MainProxy",sidebar_label:"MainProxy",custom_edit_url:null},o={unversionedId:"docs-engine/classes/worker_messagequeue.mainproxy",id:"docs-engine/classes/worker_messagequeue.mainproxy",isDocsHomePage:!1,title:"Class: MainProxy",description:"worker/MessageQueue.MainProxy",source:"@site/docs/docs-engine/classes/worker_messagequeue.mainproxy.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/worker_messagequeue.mainproxy",permalink:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.mainproxy",editUrl:null,version:"current",sidebar_label:"MainProxy",frontMatter:{id:"worker_messagequeue.mainproxy",title:"Class: MainProxy",sidebar_label:"MainProxy",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: EventDispatcherProxy",permalink:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.eventdispatcherproxy"},next:{title:"Class: MessageQueue",permalink:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"}},u=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_listeners",id:"_listeners",children:[]},{value:"canvas",id:"canvas",children:[]},{value:"devicePixelRatio",id:"devicepixelratio",children:[]},{value:"eventListener",id:"eventlistener",children:[]},{value:"eventTarget",id:"eventtarget",children:[]},{value:"height",id:"height",children:[]},{value:"interval",id:"interval",children:[]},{value:"messagePort",id:"messageport",children:[]},{value:"messageTypeFunctions",id:"messagetypefunctions",children:[]},{value:"object3dProxies",id:"object3dproxies",children:[]},{value:"queue",id:"queue",children:[]},{value:"remoteDocumentObjects",id:"remotedocumentobjects",children:[]},{value:"width",id:"width",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"clientHeight",id:"clientheight",children:[]},{value:"clientWidth",id:"clientwidth",children:[]},{value:"innerHeight",id:"innerheight",children:[]},{value:"innerWidth",id:"innerwidth",children:[]},{value:"ownerDocument",id:"ownerdocument",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addEventListener",id:"addeventlistener",children:[]},{value:"dispatchEvent",id:"dispatchevent",children:[]},{value:"focus",id:"focus",children:[]},{value:"hasEventListener",id:"haseventlistener",children:[]},{value:"receiveQueue",id:"receivequeue",children:[]},{value:"removeEventListener",id:"removeeventlistener",children:[]},{value:"sendEvent",id:"sendevent",children:[]},{value:"sendQueue",id:"sendqueue",children:[]},{value:"transfer",id:"transfer",children:[]}]}],l={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/worker_messagequeue"},"worker/MessageQueue"),".MainProxy"),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},(0,s.kt)("em",{parentName:"a"},"MessageQueue"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},"MainProxy")))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"+"," ",(0,s.kt)("strong",{parentName:"p"},"new MainProxy"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": { ",(0,s.kt)("inlineCode",{parentName:"p"},"eventTarget?"),": EventTarget ; ",(0,s.kt)("inlineCode",{parentName:"p"},"messagePort"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"  }): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.mainproxy"},(0,s.kt)("em",{parentName:"a"},"MainProxy"))),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"object"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"__namedParameters.eventTarget?")),(0,s.kt)("td",{parentName:"tr",align:"left"},"EventTarget")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"__namedParameters.messagePort")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.mainproxy"},(0,s.kt)("em",{parentName:"a"},"MainProxy"))),(0,s.kt)("p",null,"Overrides: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L635"},"packages/engine/src/worker/MessageQueue.ts:635")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"_listeners"},"_","listeners"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"_","listeners"),": ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue#_listeners"},"_listeners")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L122"},"packages/engine/src/worker/MessageQueue.ts:122")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"canvas"},"canvas"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"canvas"),": OffscreenCanvas"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L632"},"packages/engine/src/worker/MessageQueue.ts:632")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"devicepixelratio"},"devicePixelRatio"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"devicePixelRatio"),": ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L635"},"packages/engine/src/worker/MessageQueue.ts:635")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"eventlistener"},"eventListener"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"eventListener"),": ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue#eventlistener"},"eventListener")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L120"},"packages/engine/src/worker/MessageQueue.ts:120")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"eventtarget"},"eventTarget"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"eventTarget"),": EventTarget"),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue#eventtarget"},"eventTarget")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L199"},"packages/engine/src/worker/MessageQueue.ts:199")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"height"},"height"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"height"),": ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L634"},"packages/engine/src/worker/MessageQueue.ts:634")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"interval"},"interval"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"interval"),": ",(0,s.kt)("em",{parentName:"p"},"Timeout")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue#interval"},"interval")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L197"},"packages/engine/src/worker/MessageQueue.ts:197")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"messageport"},"messagePort"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"messagePort"),": ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue#messageport"},"messagePort")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L195"},"packages/engine/src/worker/MessageQueue.ts:195")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"messagetypefunctions"},"messageTypeFunctions"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"messageTypeFunctions"),": ",(0,s.kt)("em",{parentName:"p"},"Map"),"<string ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/enums/worker_messagequeue.messagetype"},(0,s.kt)("em",{parentName:"a"},"MessageType")),", any",">"),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue#messagetypefunctions"},"messageTypeFunctions")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L121"},"packages/engine/src/worker/MessageQueue.ts:121")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"object3dproxies"},"object3dProxies"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"object3dProxies"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.object3dproxy"},(0,s.kt)("em",{parentName:"a"},"Object3DProxy")),"[]= []"),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue#object3dproxies"},"object3dProxies")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L200"},"packages/engine/src/worker/MessageQueue.ts:200")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"queue"},"queue"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"queue"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/worker_messagequeue.message"},(0,s.kt)("em",{parentName:"a"},"Message")),"[]"),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue#queue"},"queue")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L196"},"packages/engine/src/worker/MessageQueue.ts:196")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"remotedocumentobjects"},"remoteDocumentObjects"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"remoteDocumentObjects"),": ",(0,s.kt)("em",{parentName:"p"},"Map"),"<string, ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.documentelementproxy"},(0,s.kt)("em",{parentName:"a"},"DocumentElementProxy")),">"),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue#remotedocumentobjects"},"remoteDocumentObjects")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L198"},"packages/engine/src/worker/MessageQueue.ts:198")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"width"},"width"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"width"),": ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L633"},"packages/engine/src/worker/MessageQueue.ts:633")),(0,s.kt)("h2",{id:"accessors"},"Accessors"),(0,s.kt)("h3",{id:"clientheight"},"clientHeight"),(0,s.kt)("p",null,"\u2022 get ",(0,s.kt)("strong",{parentName:"p"},"clientHeight"),"(): ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L665"},"packages/engine/src/worker/MessageQueue.ts:665")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"clientwidth"},"clientWidth"),(0,s.kt)("p",null,"\u2022 get ",(0,s.kt)("strong",{parentName:"p"},"clientWidth"),"(): ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L662"},"packages/engine/src/worker/MessageQueue.ts:662")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"innerheight"},"innerHeight"),(0,s.kt)("p",null,"\u2022 get ",(0,s.kt)("strong",{parentName:"p"},"innerHeight"),"(): ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L671"},"packages/engine/src/worker/MessageQueue.ts:671")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"innerwidth"},"innerWidth"),(0,s.kt)("p",null,"\u2022 get ",(0,s.kt)("strong",{parentName:"p"},"innerWidth"),"(): ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L668"},"packages/engine/src/worker/MessageQueue.ts:668")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"ownerdocument"},"ownerDocument"),(0,s.kt)("p",null,"\u2022 get ",(0,s.kt)("strong",{parentName:"p"},"ownerDocument"),"(): ",(0,s.kt)("em",{parentName:"p"},"this")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"this")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L659"},"packages/engine/src/worker/MessageQueue.ts:659")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"addeventlistener"},"addEventListener"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"addEventListener"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,s.kt)("em",{parentName:"p"},"string"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"listener"),": (",(0,s.kt)("inlineCode",{parentName:"p"},"event"),": Event) => ",(0,s.kt)("em",{parentName:"p"},"void"),"): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"type")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"string"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"listener")),(0,s.kt)("td",{parentName:"tr",align:"left"},"(",(0,s.kt)("inlineCode",{parentName:"td"},"event"),": Event) => ",(0,s.kt)("em",{parentName:"td"},"void"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L285"},"packages/engine/src/worker/MessageQueue.ts:285")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"dispatchevent"},"dispatchEvent"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"dispatchEvent"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"ev"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"fromSelf?"),": ",(0,s.kt)("em",{parentName:"p"},"boolean"),"): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ev")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"fromSelf?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"boolean"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L307"},"packages/engine/src/worker/MessageQueue.ts:307")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"focus"},"focus"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"focus"),"(): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L658"},"packages/engine/src/worker/MessageQueue.ts:658")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"haseventlistener"},"hasEventListener"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"hasEventListener"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,s.kt)("em",{parentName:"p"},"string"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"listener"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("em",{parentName:"p"},"boolean")),(0,s.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"type")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"string"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"listener")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L165"},"packages/engine/src/worker/MessageQueue.ts:165")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"receivequeue"},"receiveQueue"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"receiveQueue"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"queue"),": ",(0,s.kt)("em",{parentName:"p"},"object"),"[]): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"queue")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"object"),"[]")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L267"},"packages/engine/src/worker/MessageQueue.ts:267")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"removeeventlistener"},"removeEventListener"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"removeEventListener"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,s.kt)("em",{parentName:"p"},"string"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"listener"),": (",(0,s.kt)("inlineCode",{parentName:"p"},"event"),": Event) => ",(0,s.kt)("em",{parentName:"p"},"void"),"): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"type")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"string"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"listener")),(0,s.kt)("td",{parentName:"tr",align:"left"},"(",(0,s.kt)("inlineCode",{parentName:"td"},"event"),": Event) => ",(0,s.kt)("em",{parentName:"td"},"void"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L296"},"packages/engine/src/worker/MessageQueue.ts:296")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sendevent"},"sendEvent"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"sendEvent"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,s.kt)("em",{parentName:"p"},"string"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"detail"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"transferables?"),": Transferable[]): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"type")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"string"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"detail")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"transferables?")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Transferable[]")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L228"},"packages/engine/src/worker/MessageQueue.ts:228")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sendqueue"},"sendQueue"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"sendQueue"),"(): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Overrides: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L674"},"packages/engine/src/worker/MessageQueue.ts:674")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"transfer"},"transfer"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"transfer"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"transferables"),": Transferable[]): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"transferables")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Transferable[]")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_messagequeue.messagequeue"},"MessageQueue")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d71a00e46/packages/engine/src/worker/MessageQueue.ts#L238"},"packages/engine/src/worker/MessageQueue.ts:238")))}k.isMDXComponent=!0}}]);