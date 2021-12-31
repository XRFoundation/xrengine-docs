"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[24291],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99347:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"installation",title:"Installation"},s=void 0,p={unversionedId:"installation",id:"installation",title:"Installation",description:"Getting up and running requires only a few steps.",source:"@site/docs/1_installation.md",sourceDirName:".",slug:"/installation",permalink:"/xrengine-docs/docs/installation",editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/1_installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"installation",title:"Installation"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/xrengine-docs/docs/"},next:{title:"Core Concepts",permalink:"/xrengine-docs/docs/coreconcepts"}},d=[],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Getting up and running requires only a few steps."),(0,o.kt)("p",null,"IF ON WINDOWS, go to Native Windows Preinstall below"),(0,o.kt)("p",null,"For on OSX / Linux / WSL2 for Windows:"),(0,o.kt)("p",null,"First, make sure you have ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"NodeJS")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," installed (and if you are using it, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"docker"),"). Also make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://realpython.com/installing-python/"},"Python 3")," is installed with pip."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install your dependencies"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd path/to/xrengine\nnpm install\n")),(0,o.kt)("p",{parentName:"li"},"Error with mediasoup? Optional: ",(0,o.kt)("a",{parentName:"p",href:"https://mediasoup.org/documentation/v3/mediasoup/installation/"},"https://mediasoup.org/documentation/v3/mediasoup/installation/")),(0,o.kt)("p",{parentName:"li"},"If on WSL2:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install build-essential\nnpm install\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure you have a mysql database installed and running -- our recommendation is Mariadb. We've provided a docker container for easy setup:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd scripts && sudo bash start-db.sh\n")),(0,o.kt)("p",{parentName:"li"}," This creates a Docker container of mariadb named xrengine_db. You must have docker installed on your machine for this script to work.\nIf you do not have Docker installed and do not wish to install it, you'll have to manually create a MariaDB server."),(0,o.kt)("p",{parentName:"li"},"The default username is 'server', the default password is 'password', the default database name is 'xrengine', the default hostname is '127.0.0.1', and the default port is '3306'."),(0,o.kt)("p",{parentName:"li"},"Seeing errors connecting to the local DB? Shut off your local firewall.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a new tab and start the Agones sidecar in local mode"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd scripts\nsudo bash start-agones.sh\n")),(0,o.kt)("p",{parentName:"li"},"You can also go to vendor/agones/ and run"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"./sdk-server.linux.amd64 --local")),(0,o.kt)("p",{parentName:"li"},"If you are using a Windows machine, run"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"sdk-server.windows.amd64.exe --local")),(0,o.kt)("p",{parentName:"li"},"and for mac, run"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"./sdk-server.darwin.amd64 --local"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy .env.local.default to .env.local\nMany parts of XREngine are configured using environment variables.",(0,o.kt)("br",{parentName:"p"}),"\n","When running it locally, these are sourced from a file called ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local"),".\nThe ENV_VAR definitions here in are the form ",(0,o.kt)("inlineCode",{parentName:"p"},"<VAR_NAME>=<VALUE>"),"."),(0,o.kt)("p",{parentName:"li"},"The repo includes a ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local.default")," file. You can copy this to ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local"),", and XREngine will run.\nCertain things that require authorization, however, like logging in via email/phone number/OAuth, will not function\nsince the associated keys are not committed. If you need to test this functionality, either procure your own\naccounts and keys, or ask on the XREngine Discord for copies of these keys (you'd probably already have\ngotten keys from a dev already if you're part of the team and needed them - they are not given out freely).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the server in database seed mode"),(0,o.kt)("p",{parentName:"li"},"Several tables in the database need to be seeded with default values.\nRun ",(0,o.kt)("inlineCode",{parentName:"p"},"cd packages/server"),", then run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev-reinit-db"),".\nAfter several seconds, there should be no more logging.\nSome of the final lines should read like this:\n",(0,o.kt)("inlineCode",{parentName:"p"},"Executing (default): SELECT 'id', 'name', 'sceneId', 'locationSettingsId', 'slugifiedName', 'maxUsersPerInstance', 'createdAt', 'updatedAt' FROM 'location' AS 'location' WHERE ('location'.'id' = '98cbcc30-fd2d-11ea-bc7c-cd4cac9a8d61') AND 'location'.'id' IN ('98cbcc30-fd2d-11ea-bc7c-cd4cac9a8d61'); Seeded")),(0,o.kt)("p",{parentName:"li"}," At this point, the database has been seeded. You can shut down the server with CTRL+C.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open two separate tabs and start the server (non-seeding) and the client\nIn /packages/server, run ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo npm run dev"),".\nIn the other tab, go to /packages/client and run ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo npm run dev"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In a browser, navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://127.0.0.1:3000/location/home"},"https://127.0.0.1:3000/location/home"),"\nThe database seeding process creates a test empty location called 'test'.\nIt can be navigated to by going to '",(0,o.kt)("a",{parentName:"p",href:"https://127.0.0.1:3000/location/home'"},"https://127.0.0.1:3000/location/home'"),".\nSee the sections below about invalid certificates if you are encountering errors\nconnecting to the client, API, or gameserver."),(0,o.kt)("h3",{parentName:"li",id:"native-windows-preinstall"},"Native Windows Preinstall"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"install python 3 and add python installation directory path to 'path' env variable.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install node js")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"install Visual studio community edition with build tools. follow next steps. If mediasoup will not installed properly then modify Visual studio setup to add c++ and Node.js support.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"add path to MSbuild.exe (which is present into vs installation folder) into 'path' variable\nfor example:",(0,o.kt)("inlineCode",{parentName:"p"}," C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Community\\MSBuild\\Current\\Bin"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"install all dependences using npm.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If error persists then check for typos in evironment variables.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you are on Windows, you can use docker-compose to start the scripts/docker-compose.yml file, or install mariadb and copy the login/pass and database name from docker-compose or .env.local -- you will need to create the database with the matching name, but you do not need to populate it"))),(0,o.kt)("p",{parentName:"li"},"./start-db.sh only needs to be run once. If the docker image has stopped, start it again with:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"    docker container start xrengine_db\n")),(0,o.kt)("h3",{parentName:"li",id:"osx-db-native-initialization-commands"},"OSX DB Native Initialization Commands"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"brew install mysql\n\nmysql_secure_installation\nserver\npassword\n\nmysql -uroot -ppassword\nmysql -userver -ppassword\n\ncreate database xrengine;\ncreate user 'server'@'127.0.0.1' identified by 'password';\ngrant all on xrengine.* to 'server'@'127.0.0.1';\n\nshow databases;\n\nmysql.server start\nmysql.server stop\n")))))}m.isMDXComponent=!0}}]);