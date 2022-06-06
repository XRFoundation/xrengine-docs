"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[120],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),s=n(3366),a=(n(7294),n(3905)),o=["components"],i={},l="Cluster Management",u={unversionedId:"devops_deployment/managing_remote_kubernetes",id:"devops_deployment/managing_remote_kubernetes",title:"Cluster Management",description:"Kubernetes Web UI (Dashboard)",source:"@site/docs/2_devops_deployment/4_managing_remote_kubernetes.md",sourceDirName:"2_devops_deployment",slug:"/devops_deployment/managing_remote_kubernetes",permalink:"/xrengine-docs/docs/devops_deployment/managing_remote_kubernetes",draft:!1,editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/2_devops_deployment/4_managing_remote_kubernetes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database Migrations",permalink:"/xrengine-docs/docs/devops_deployment/feathers_sequelize"},next:{title:"Release Helm Chart",permalink:"/xrengine-docs/docs/devops_deployment/release_helm_chart"}},c={},p=[{value:"Kubernetes Web UI (Dashboard)",id:"kubernetes-web-ui-dashboard",level:2},{value:"Install Lens",id:"install-lens",level:2},{value:"AWS",id:"aws",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cluster-management"},"Cluster Management"),(0,a.kt)("h2",{id:"kubernetes-web-ui-dashboard"},"Kubernetes Web UI (Dashboard)"),(0,a.kt)("p",null,"Dashboard is a web-based Kubernetes user interface. You can use Dashboard to deploy containerized applications to a Kubernetes cluster, troubleshoot your containerized application, and manage the cluster resources."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/")),(0,a.kt)("h2",{id:"install-lens"},"Install Lens"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo snap install kontena-lens --classic")),(0,a.kt)("p",null,"Add the K8 cluster using kubectl\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.k8slens.dev/v4.1.4/clusters/adding-clusters/"},"https://docs.k8slens.dev/v4.1.4/clusters/adding-clusters/")),(0,a.kt)("p",null,"Add kubernetes lens prometheus support if not already installed\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.k8slens.dev/v4.1.4/extensions/usage/"},"https://docs.k8slens.dev/v4.1.4/extensions/usage/")),(0,a.kt)("h4",{id:"aws"},"AWS"),(0,a.kt)("p",null,"AWS credentials with EKS and Cluster permissions required"))}m.isMDXComponent=!0}}]);