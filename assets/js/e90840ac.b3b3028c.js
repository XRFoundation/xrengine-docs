(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[7695],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3515:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),l=["components"],a={id:"deployment",title:"Deployment"},p=void 0,c={unversionedId:"modules/ops/deployment",id:"modules/ops/deployment",isDocsHomePage:!1,title:"Deployment",description:"Deployment",source:"@site/docs/0_modules/ops/deployment.md",sourceDirName:"0_modules/ops",slug:"/modules/ops/deployment",permalink:"/xrengine-docs/docs/modules/ops/deployment",editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/0_modules/ops/deployment.md",version:"current",frontMatter:{id:"deployment",title:"Deployment"}},u=[{value:"Deployment",id:"deployment",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Linting",id:"linting",children:[]},{value:"Docker",id:"docker",children:[]}],s={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/xrengine/xrengine/blob/dev/packages/ops/docs/EKS-setup.md"},"AWS EKS Deployment")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/xrengine/xrengine/blob/dev/packages/ops/docs/managing_remote_kubernets.md"},"Managing Kubernets")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/xrengine/xrengine/blob/dev/packages/ops/docs/release-helm-chart.md"},"Managing Helm Charts")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/xrengine/xrengine/blob/dev/packages/ops/xrengine-cloudformation"},"Cloudformation Scripts")),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test")," and all your tests in the ",(0,i.kt)("inlineCode",{parentName:"p"},"test/")," directory will be run."),(0,i.kt)("h2",{id:"linting"},"Linting"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run lint")),(0,i.kt)("h2",{id:"docker"},"Docker"),(0,i.kt)("p",null,"You can run it using docker, if you don't have node installed or need to test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Build the image\ndocker build --tag xrengine .\n\n# Run the image (deletes itself when you close it)\ndocker run -d --rm --name server -e "MYSQL_URL=mysql://server:password@db:3306/xrengine" -p "3030:3030"  xrengine\n\n# Stop the server\ndocker stop server\n')))}d.isMDXComponent=!0}}]);