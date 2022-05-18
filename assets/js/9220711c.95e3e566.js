"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[1481],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),d=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(n),g=a,m=c["".concat(l,".").concat(g)]||c[g]||p[g]||s;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29435:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={},l=void 0,d={unversionedId:"testing/intro",id:"testing/intro",title:"intro",description:"SMTP Testing",source:"@site/docs/3_testing/0_intro.md",sourceDirName:"3_testing",slug:"/testing/intro",permalink:"/xrengine-docs/docs/testing/intro",editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/3_testing/0_intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{}},u=[{value:"SMTP Testing",id:"smtp-testing",children:[],level:2},{value:"Unit tests",id:"unit-tests",children:[],level:2},{value:"Integration tests",id:"integration-tests",children:[],level:2},{value:"Unit vs Integration Tests (source)",id:"unit-vs-integration-tests-source",children:[],level:2},{value:"System tests",id:"system-tests",children:[],level:2},{value:"End-to-end tests",id:"end-to-end-tests",children:[],level:2},{value:"System vs End-to-end Tests (source)",id:"system-vs-end-to-end-tests-source",children:[],level:2},{value:"White-box vs Black-box testing",id:"white-box-vs-black-box-testing",children:[],level:2},{value:"The Testing Pyramid",id:"the-testing-pyramid",children:[],level:2}],p={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"smtp-testing"},"SMTP Testing"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://mailtrap.io/inboxes"},"https://mailtrap.io/inboxes")),(0,s.kt)("p",null,"add credentials in ",(0,s.kt)("inlineCode",{parentName:"p"},"packages/server/.env")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dotenv"},"SMTP_HOST=smtp.mailtrap.io\nSMTP_PORT=2525\nSMTP_USER=<mailtrap-user>\nSMTP_PASS=<mailtrap-password>\n")),(0,s.kt)("h1",{id:"automated-testing"},"Automated Testing"),(0,s.kt)("p",null,"Automated testing is a cornerstone to successful software development. Tests are not just to ensure that your application is working as intended, they are also to ensure that ",(0,s.kt)("strong",{parentName:"p"},"existing features aren't broken by any newly introduced features or code"),", aka ",(0,s.kt)("strong",{parentName:"p"},"regression bugs"),". The latter tends to hold more value, as it makes the software sturdy and less prone to these types of bugs during active development of a project. Regression bugs will quickly stall the development of a project at a certain level of complexity, effectively preventing progress."),(0,s.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,s.kt)("p",null,"Unit tests focus on testing small pieces of code, usually just a single function, which only does one specific thing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const add2 = x => x + 2\n\nit('should add 2 to a given number', () => {\n  strictEqual(add2(1), 3)\n})\n")),(0,s.kt)("h2",{id:"integration-tests"},"Integration tests"),(0,s.kt)("p",null,"Integration tests focus on testing bundles of code units. A composition of functions, for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const addTwo = x => x + 2\nconst multThree = x => x * 3\nconst halve = x => x / 2\n\nconst algorithm = x => {\n  x = addTwo(x)\n  x = multThree(x)\n  x = halve(x)\n  return x\n}\n\nit('should apply the entire algorithm correctly', () => {\n  strictEqual(algorithm(4), 9)\n})\n")),(0,s.kt)("h2",{id:"unit-vs-integration-tests-source"},"Unit vs Integration Tests (",(0,s.kt)("a",{parentName:"h2",href:"https://www.geeksforgeeks.org/difference-between-unit-testing-and-integration-testing/"},"source"),")"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Unit Testing"),(0,s.kt)("th",{parentName:"tr",align:null},"Integration Testing"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"In unit testing each module of the software is tested separately."),(0,s.kt)("td",{parentName:"tr",align:null},"In integration testing all modules of the the software are tested combined.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"In unit testing the tester knows the internal design of the software."),(0,s.kt)("td",{parentName:"tr",align:null},"In integration testing the tester doesn't know the internal design of the software.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Unit testing is performed first of all testing processes."),(0,s.kt)("td",{parentName:"tr",align:null},"Integration testing is performed after unit testing, and before system/end-to-end tests.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Unit testing is a white box testing."),(0,s.kt)("td",{parentName:"tr",align:null},"Integration testing is a black box testing.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Unit testing is performed by the developer."),(0,s.kt)("td",{parentName:"tr",align:null},"Integration testing is performed by the tester.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Detection of defects in unit testing is easy."),(0,s.kt)("td",{parentName:"tr",align:null},"Detection of defects in integration testing is difficult.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"It tests parts of the project without waiting for others to be completed."),(0,s.kt)("td",{parentName:"tr",align:null},"It tests only after the completion of all parts.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Unit testing is less costly."),(0,s.kt)("td",{parentName:"tr",align:null},"Integration testing is more costly.")))),(0,s.kt)("h2",{id:"system-tests"},"System tests"),(0,s.kt)("p",null,"System tests can be thought of much like unit tests, but on a grand level. These focus on ensuring that one particular system/module is functioning as expected from the outside. Using e-commerce as an example: one may test that browsing for items is working correctly (one system test), that the cart is working correctly (a second system test), and that checkout is working correctly (a third system test)."),(0,s.kt)("h2",{id:"end-to-end-tests"},"End-to-end tests"),(0,s.kt)("p",null,"End-to-end tests can be thought of much like integration tests, but also on a grand level. These focus on flows between systems. Using the previous e-commerce example, an end-to-end test would ensure that the entire flow of browsing for items, adding them to cart, and checkout all work together in one continuous flow (one whole end-to-end test for this entire flow)."),(0,s.kt)("h2",{id:"system-vs-end-to-end-tests-source"},"System vs End-to-end Tests (",(0,s.kt)("a",{parentName:"h2",href:"https://www.geeksforgeeks.org/difference-between-system-testing-and-end-to-end-testing/"},"source"),")"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"System Testing"),(0,s.kt)("th",{parentName:"tr",align:null},"End-to-end Testing"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"In system testing, whole software or application is tested at a time."),(0,s.kt)("td",{parentName:"tr",align:null},"In end-to-end testing, behavioral flow of the software is tested.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"System testing only tests the specific software system."),(0,s.kt)("td",{parentName:"tr",align:null},"It tests the software system and the connected systems both.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"The functionality of the software is tested."),(0,s.kt)("td",{parentName:"tr",align:null},"Flow from end-to-end is tested.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"It validates the software system as per standards and specifications."),(0,s.kt)("td",{parentName:"tr",align:null},"It validated all the interfaces of the software.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Knowledge of interconnected systems is not required."),(0,s.kt)("td",{parentName:"tr",align:null},"Knowledge about interconnected systems is required.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"It is carried out once integration testing is performed."),(0,s.kt)("td",{parentName:"tr",align:null},"It is performed after the system testing.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"It is performed both manually and automated."),(0,s.kt)("td",{parentName:"tr",align:null},"It is generally performed manually.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"It is the super set of end-to-end testing."),(0,s.kt)("td",{parentName:"tr",align:null},"It is considered as subset of the system testing.")))),(0,s.kt)("h2",{id:"white-box-vs-black-box-testing"},"White-box vs Black-box testing"),(0,s.kt)("p",null,"Put simply, white-box testing is when the tester knows exactly how the internals of the code are working, and knows exactly what to test and what to expect. Unit testing is white-box testing."),(0,s.kt)("p",null,"Black-box testing, on the other hand, is when the tester does not know anything about how the internals of the code are working, and only knows what to input and what the expected output should be. Integration, system, and end-to-end testing are all black-box testing."),(0,s.kt)("h2",{id:"the-testing-pyramid"},"The Testing Pyramid"),(0,s.kt)("p",null,"A typical suggestion is to aim for a 70/20/10 split between these different types of tests. Although more coverage is never a bad thing, the aim should be to bolster the tests with respect to the following pyramid distribution."),(0,s.kt)("p",null,"70% Unit tests"),(0,s.kt)("p",null,"20% Integration tests"),(0,s.kt)("p",null,"10% End-to-end tests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"        /```\\\n       / E2E \\\n      /_______\\\n     /         \\\n    /Integration\\\n   /_____________\\\n  /               \\\n /      Unit       \\\n/___________________\\\n")))}c.isMDXComponent=!0}}]);