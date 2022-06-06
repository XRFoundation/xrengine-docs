"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[547],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3783:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="Installation",u={unversionedId:"installation/readme",id:"installation/readme",title:"Installation",description:"Getting up and running requires just a few steps, but this can be tricky,",source:"@site/docs/1_installation/readme.md",sourceDirName:"1_installation",slug:"/installation/",permalink:"/xrengine-docs/docs/installation/",draft:!1,editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/1_installation/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/xrengine-docs/docs/"},next:{title:"Basic Setup",permalink:"/xrengine-docs/docs/installation/basic_setup"}},c={},p=[{value:"Pre-Install Checklist",id:"pre-install-checklist",level:2},{value:"Clone the repository",id:"clone-the-repository",level:3},{value:"Ensure you are on Node 16 or above",id:"ensure-you-are-on-node-16-or-above",level:3},{value:"Docker is your friend",id:"docker-is-your-friend",level:3},{value:"Quick Start",id:"quick-start",level:2},{value:"Setup Elastic Search &amp; Grafana",id:"setup-elastic-search--grafana",level:3},{value:"Admin System and User Setup",id:"admin-system-and-user-setup",level:3},{value:"Advanced Installation and Troubleshooting",id:"advanced-installation-and-troubleshooting",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Getting up and running requires just a few steps, but this can be tricky,\ndepending on your platform and current environment. Please follow the directions\nfor your environment."),(0,r.kt)("h2",{id:"pre-install-checklist"},"Pre-Install Checklist"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Clone the repository"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Install Node.js v16 or later"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Install Python >=3.6 + ",(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/pip/"},"PIP"),", C++, and\nother build tools. See the ",(0,r.kt)("a",{parentName:"li",href:"https://mediasoup.org/documentation/v3/mediasoup/installation/"},"Mediasoup install instructions"),"\nfor full details."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Install Docker (optional but highly recommended)"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","(Optional) If you're NOT using docker, install MariaDB and Redis.")),(0,r.kt)("p",null,"You should now be ready to follow the ",(0,r.kt)("a",{parentName:"p",href:"#quick-start"},"Quick Start")," instructions."),(0,r.kt)("h3",{id:"clone-the-repository"},"Clone the repository"),(0,r.kt)("p",null,"A lot has changed during development, and our monorepo has gotten quite large.\nTo avoid cloning the entire thing, use this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/XRFoundation/XREngine --depth 1\n")),(0,r.kt)("h3",{id:"ensure-you-are-on-node-16-or-above"},"Ensure you are on Node 16 or above"),(0,r.kt)("p",null,"You ",(0,r.kt)("strong",{parentName:"p"},"must")," have Node 16 or above installed."),(0,r.kt)("p",null,"A version manager can be helpful for this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NodeJS only: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"NVM")),(0,r.kt)("li",{parentName:"ul"},"Polyglot: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/asdf-vm/asdf"},"ASDF"))),(0,r.kt)("p",null,"Before running the engine, please check ",(0,r.kt)("inlineCode",{parentName:"p"},"node --version"),"\nIf you are using a node version below 16, please update or nothing will work.\nYou will know you are having issues if you try to install at root and are\ngetting dependency errors."),(0,r.kt)("h3",{id:"docker-is-your-friend"},"Docker is your friend"),(0,r.kt)("p",null,"You don't need to use ",(0,r.kt)("a",{parentName:"p",href:"(https://docs.docker.com/)"},"Docker"),", but it will make\nyour life much easier.\nIf you don't wish to use Docker, you will need to setup mariadb and redis on\nyour machine. You can find credentials in ",(0,r.kt)("inlineCode",{parentName:"p"},"xrengine/scripts/docker-compose.yml")),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"If you are lucky, this will just work. However, you may encounter some\nissues. Make sure you are running Node 16, and check your dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd path/to/xrengine\ncp .env.local.default .env.local\nnpm install\nnpm run dev-docker\nnpm run dev-reinit\nnpm run dev\n")),(0,r.kt)("h3",{id:"setup-elastic-search--grafana"},"Setup Elastic Search & Grafana"),(0,r.kt)("p",null,"Elastic Search and Grafana will be automatically launched with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),"."),(0,r.kt)("p",null,"Elasticsearch & Grafana will be running on localhost port 9200 & 5601 respectively."),(0,r.kt)("p",null,"This will automatically set up and run Redis/MariaDB docker\ncontainers, and XRengine client/server/game-server instances."),(0,r.kt)("p",null,"In a browser, navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://127.0.0.1:3000/location/default"},"https://127.0.0.1:3000/location/default")),(0,r.kt)("p",null,"The database seeding process creates a test empty location called 'test'.\nIt can be navigated to by going to '",(0,r.kt)("a",{parentName:"p",href:"https://127.0.0.1:3000/location/default'"},"https://127.0.0.1:3000/location/default'")),(0,r.kt)("p",null,"As of this writing, the cert provided in the xrengine package for local use is\nnot adequately signed. Browsers will throw up warnings about going to insecure\npages. You should be able to tell the browser to ignore it, usually by clicking\non some sort of 'advanced options' button or link and then something along the\nlines of 'go there anyway'."),(0,r.kt)("p",null,"Chrome sometimes does not show a clickable option on the warning. If so, just\ntype ",(0,r.kt)("inlineCode",{parentName:"p"},"badidea")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"thisisunsafe")," when on that page. You don't enter\nthat into the address bar or into a text box, Chrome is just passively listening\nfor those commands."),(0,r.kt)("h3",{id:"admin-system-and-user-setup"},"Admin System and User Setup"),(0,r.kt)("p",null,"You can administrate many features from the admin panel at https://localhost:3000/admin"),(0,r.kt)("p",null,"How to make a user an admin:"),(0,r.kt)("p",null,"Create a user at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:3000/")),(0,r.kt)("p",null,"To locate your User ID:\nIn Chrome Dev Tools console, write ",(0,r.kt)("inlineCode",{parentName:"p"},"copy(userId)"),". This will copy your User ID\n(As shown in attached screenshot). Paste it in and run the following command in\na 'nix shell (e.g. Bash, ZSH):"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm run make-user-admin -- --id={COPIED_USER_ID}")),(0,r.kt)("p",null,"Example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"npm run make-user-admin -- --id=c06b0210-453e-11ec-afc3-c57a57eeb1ac")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43248658/142813912-35f450e1-f012-4bdf-adfa-f0fa2816160f.png",alt:"image"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"TODO: Improve with email/phone ID support")),(0,r.kt)("p",null,"Alternate Method:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Look up in User table and change userRole to 'admin'"),(0,r.kt)("li",{parentName:"ol"},"Dev DB credentials can be found here: packages/ops/docker-compose-local.yml#L42"),(0,r.kt)("li",{parentName:"ol"},"Suggested: beekeeperstudio.io")),(0,r.kt)("p",null,"Test user Admin privileges by going to ",(0,r.kt)("inlineCode",{parentName:"p"},"/admin")),(0,r.kt)("h2",{id:"advanced-installation-and-troubleshooting"},"Advanced Installation and Troubleshooting"),(0,r.kt)("p",null,"If you run into any trouble with the Quick Start instructions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please make sure you've followed the\n",(0,r.kt)("a",{parentName:"li",href:"https://mediasoup.org/documentation/v3/mediasoup/installation/"},"Mediasoup installation instructions")),(0,r.kt)("li",{parentName:"ul"},"Check your OS-specific instructions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/xrengine-docs/docs/installation/windows"},"Installing on Windows (10+)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/xrengine-docs/docs/installation/mac_os_x"},"Installing on Mac OS X")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/xrengine-docs/docs/installation/install_troubleshooting"},"Installation Troubleshooting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/xrengine-docs/docs/installation/advanced_setup"},"Advanced Setup"))))}m.isMDXComponent=!0}}]);