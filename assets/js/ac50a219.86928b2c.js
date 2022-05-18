"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[6608],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(h,a(a({ref:n},u),{},{components:t})):r.createElement(h,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},70262:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={},c=void 0,l={unversionedId:"installation/01.2-running-on-static-IP",id:"installation/01.2-running-on-static-IP",title:"01.2-running-on-static-IP",description:"Follow these steps to run the engine on a static IP instead of localhost. In",source:"@site/docs/0_installation/01.2-running-on-static-IP.md",sourceDirName:"0_installation",slug:"/installation/01.2-running-on-static-IP",permalink:"/xrengine-docs/docs/installation/01.2-running-on-static-IP",editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/0_installation/01.2-running-on-static-IP.md",tags:[],version:"current",frontMatter:{}},u=[{value:"Running on Static IP under WSL2",id:"running-on-static-ip-under-wsl2",children:[],level:3}],p={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Follow these steps to run the engine on a static IP instead of localhost. In\nmost cases you should be able to simply access the engine using the public IP\nassigned to your device, but if you run into any issues or if you are running\nthe stack on WSL2 then you can refer to the following directions."),(0,i.kt)("h3",{id:"running-on-static-ip-under-wsl2"},"Running on Static IP under WSL2"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Replace all localhost values with the static IP you want to run the stack on\nin your .env.local file."),(0,i.kt)("li",{parentName:"ol"},"Open a powershell terminal as admin. And run the wsl2-port-forwarding.ps1\nscript present under /scripts directory.\nNote: Make sure all of the required ports are present in ports array of the\nwsl2-port-forwarding.ps1 script."),(0,i.kt)("li",{parentName:"ol"},"And now just run the engine as you normally would and everything should be\naccessible over the static IP."),(0,i.kt)("li",{parentName:"ol"},"If you get any errors related to localhost:8642, then make sure that none of\nthe assets in your scene have been saved localhost path. If there are then\nreplace localhost with the static IP in the respective asset's path too.")))}f.isMDXComponent=!0}}]);