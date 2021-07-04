(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[4378],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),a=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=a(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=a(t),f=o,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(b,l(l({ref:n},c),{},{components:t})):r.createElement(b,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var a=2;a<i;a++)l[a]=t[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},353:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return a},toc:function(){return c},default:function(){return d}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),l=["components"],u={id:"kubernetes",title:"Kubernetes"},s=void 0,a={unversionedId:"modules/ops/kubernetes",id:"modules/ops/kubernetes",isDocsHomePage:!1,title:"Kubernetes",description:"Run in Kubernetes locally",source:"@site/docs/0_modules/ops/kubernetes.md",sourceDirName:"0_modules/ops",slug:"/modules/ops/kubernetes",permalink:"/xrengine-docs/docs/modules/ops/kubernetes",editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/0_modules/ops/kubernetes.md",version:"current",frontMatter:{id:"kubernetes",title:"Kubernetes"}},c=[{value:"Run in Kubernetes locally",id:"run-in-kubernetes-locally",children:[]}],p={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"run-in-kubernetes-locally"},"Run in Kubernetes locally"),(0,i.kt)("p",null,"First, you'll need minikube installed and running, as well as kubectl. Next, you'll want to point your shell to minikube's docker-env\nso that you don't need to push the Docker image to an external repository. Run the following:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"eval $(minikube docker-env)")),(0,i.kt)("p",null,"For now, this process will use a separate Dockerfile called 'Dockerfile-dev'. You'll have to build the image using\nit by running the following command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker build -t xrengine/xrengine:v0.0.0 -f Dockerfile-dev .")),(0,i.kt)("p",null,"Once that image is built, make sure that kubectl is pointed to minikube.\nRun ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," and there should be a '*' next to minikube; alternatively, run\n",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl config current-context"),", and it should show minikube.\nIf it's not, run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl config set-context minikube")," to change to it."),(0,i.kt)("p",null,"You'll need to deploy two Kustomize scripts to Minikube.\nThe first one is the nginx-ingress setup.\nRun ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -k kubernetes/nginx/base"),"."),(0,i.kt)("p",null,"You'll need to have a file called 'xrengine-dev-secrets.env' in kubernetes/xrengine/base.\nThis is in the gitignore to demonstrate that these sorts of files should never be committed.\nThe production one is expected to be called 'xrengine-secrets.env' and is also in the gitignore.\nAs these are very sensitive files, they should be transmitted to you securely."),(0,i.kt)("p",null,"Finally run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -k kubernetes/xrengine/base")," to deploy the MariaDB server and xrengine.\nThe server is set up in dev mode to be behind the domain 'api.dev.xrengine.dev' and is secured by a self-signed certificate.\nIf you wanted to call one of the endpoints with curl, you could run the following and get a 401 error:\n",(0,i.kt)("inlineCode",{parentName:"p"},"curl https://192.168.99.109/user -H HOST:api.dev.xrengine.dev --insecure")),(0,i.kt)("p",null,"NOTE: As of this writing, the MariaDB server sometimes finishes initializing after xrengine has already tried to\nconnect to it. To reboot xrengine, run the following:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kubectl rollout restart -n xrengine deployments/xrengine")))}d.isMDXComponent=!0}}]);