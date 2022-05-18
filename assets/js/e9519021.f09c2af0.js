"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[4095],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},32182:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],l={},s=void 0,d={unversionedId:"installation/installation",id:"installation/installation",title:"installation",description:"Getting up and running requires just a few steps, but this can be tricky,",source:"@site/docs/0_installation/01-installation.md",sourceDirName:"0_installation",slug:"/installation/installation",permalink:"/xrengine-docs/docs/installation/installation",editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/0_installation/01-installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{}},u=[{value:"First, clone the repository",id:"first-clone-the-repository",children:[],level:3},{value:"Ensure you are on Node 16 or above",id:"ensure-you-are-on-node-16-or-above",children:[],level:3},{value:"Docker is your friend",id:"docker-is-your-friend",children:[],level:3},{value:"Get local IP address",id:"get-local-ip-address",children:[],level:2},{value:"Start local databases",id:"start-local-databases",children:[],level:2},{value:"Build the image",id:"build-the-image",children:[],level:2},{value:"Run the server to seed the database, wait a couple minutes, then delete it",id:"run-the-server-to-seed-the-database-wait-a-couple-minutes-then-delete-it",children:[],level:2},{value:"Run the images",id:"run-the-images",children:[],level:2},{value:"Delete containers, if you want to run a new build, or just get rid of them",id:"delete-containers-if-you-want-to-run-a-new-build-or-just-get-rid-of-them",children:[{value:"Mediasoup is a powerful beast you must tame",id:"mediasoup-is-a-powerful-beast-you-must-tame",children:[],level:3},{value:"Installing on Windows with WSL2",id:"installing-on-windows-with-wsl2",children:[],level:3},{value:"Troubleshooting Mac",id:"troubleshooting-mac",children:[],level:3}],level:2},{value:"Easy setup",id:"easy-setup",children:[{value:"1.  Install your dependencies",id:"1--install-your-dependencies",children:[],level:3},{value:"2. Make sure you have a mysql database installed and running -- our recommendation is Mariadb.",id:"2-make-sure-you-have-a-mysql-database-installed-and-running----our-recommendation-is-mariadb",children:[],level:3},{value:"3. Open a new tab and start the Agones sidecar in local mode",id:"3-open-a-new-tab-and-start-the-agones-sidecar-in-local-mode",children:[],level:3},{value:"4. Start the server in database seed mode",id:"4-start-the-server-in-database-seed-mode",children:[],level:3},{value:"5. Local file server configuration",id:"5-local-file-server-configuration",children:[],level:3},{value:"6. Open two/three separate tabs and start the API server, gameserver and client",id:"6-open-twothree-separate-tabs-and-start-the-api-server-gameserver-and-client",children:[],level:3},{value:"7. In a browser, navigate to https://127.0.0.1:3000/location/default",id:"7-in-a-browser-navigate-to-https1270013000locationdefault",children:[],level:3},{value:"Admin System",id:"admin-system",children:[],level:3}],level:2}],p={toc:u};function c(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Getting up and running requires just a few steps, but this can be tricky,\ndepending on your platform and current environment. Please follow the directions\nfor your environment."),(0,r.kt)("h1",{id:"all-environments"},"All environments"),(0,r.kt)("h3",{id:"first-clone-the-repository"},"First, clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/XRFoundation/XREngine --depth 1\n")),(0,r.kt)("h3",{id:"ensure-you-are-on-node-16-or-above"},"Ensure you are on Node 16 or above"),(0,r.kt)("p",null,"You ",(0,r.kt)("strong",{parentName:"p"},"must")," have Node 16 or above installed."),(0,r.kt)("p",null,"A version manager can be helpful for this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NodeJS only: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"NVM")),(0,r.kt)("li",{parentName:"ul"},"Polyglot: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/asdf-vm/asdf"},"ASDF"))),(0,r.kt)("p",null,"Before running the engine, please check ",(0,r.kt)("inlineCode",{parentName:"p"},"node --version"),"\nIf you are using a node version below 16, please update or nothing will work.\nYou will know you are having issues if you try to install at root and are\ngetting dependency errors."),(0,r.kt)("h3",{id:"docker-is-your-friend"},"Docker is your friend"),(0,r.kt)("p",null,"You don't need to use Docker, but it will make your life much easier.\nYou can get it ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"here"),".\nIf you don't wish to use Docker, you will need to setup mariadb and redis on\nyour machine. You can find credentials in ",(0,r.kt)("inlineCode",{parentName:"p"},"xrengine/scripts/docker-compose.yml")),(0,r.kt)("h1",{id:"docker"},"Docker"),(0,r.kt)("p",null,"You can quickstart locally using docker, if you don't have node installed or\njust want to test the latest."),(0,r.kt)("h2",{id:"get-local-ip-address"},"Get local IP address"),(0,r.kt)("p",null,"Use a tool like ifconfig to get your local IP address."),(0,r.kt)("h2",{id:"start-local-databases"},"Start local databases"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd scripts\ndocker-compose up\n")),(0,r.kt)("p",null,"When the logging stops, that indicates that the databases have been created and\nare running."),(0,r.kt)("p",null,"Ctrl+c out of that, then from scripts run ",(0,r.kt)("inlineCode",{parentName:"p"},"./start-all-docker.sh"),"\n(This must be run every time you start your machine anew)"),(0,r.kt)("h2",{id:"build-the-image"},"Build the image"),(0,r.kt)("p",null,"Create an empty folder at the root called ",(0,r.kt)("inlineCode",{parentName:"p"},"project-package-jsons")," and the run\nthe following command to build:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'DOCKER_BUILDKIT=1 docker build -t xrengine --build-arg MYSQL_USER=server \\\n  --build-arg MYSQL_PASSWORD=password --build-arg MYSQL_HOST=127.0.0.1 \\\n  --build-arg MYSQL_DATABASE=xrengine --build-arg MYSQL_PORT=3304 \\\n  --build-arg VITE_SERVER_HOST=localhost --build-arg VITE_SERVER_PORT=3030 \\\n  --build-arg VITE_GAMESERVER_HOST=localhost --build-arg VITE_GAMESERVER_PORT=3031 \\\n  --build-arg VITE_LOCAL_BUILD=true --build-arg CACHE_DATE="$(date)" --network="host" .\n')),(0,r.kt)("h2",{id:"run-the-server-to-seed-the-database-wait-a-couple-minutes-then-delete-it"},"Run the server to seed the database, wait a couple minutes, then delete it"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --name server --env-file .env.local.default -e "SERVER_MODE=api" -e "FORCE_DB_REFRESH=true" --network host xrengine\ndocker logs server -f\n-Wait for the line "Server Ready", then Ctrl+c out of the logs-\ndocker container stop server\ndocker container rm server\n')),(0,r.kt)("h2",{id:"run-the-images"},"Run the images"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --name serve-local --env-file .env.local.default -e "SERVER_MODE=serve-local" --network host xrengine\ndocker run -d --name server --env-file .env.local.default -e "SERVER_MODE=api" -e "GAMESERVER_HOST=<local IP address" --network host xrengine\ndocker run -d --name client --env-file .env.local.default -e "SERVER_MODE=client" --network host xrengine\ndocker run -d --name world --env-file .env.local.default -e "SERVER_MODE=realtime" -e "GAMESERVER_HOST=<local IP address>" --network host xrengine\ndocker run -d --name channel --env-file .env.local.default -e "SERVER_MODE=realtime" -e "GAMESERVER_HOST=<local IP address>" -e "GAMESERVER_PORT=3032" --network host xrengine\n')),(0,r.kt)("h2",{id:"delete-containers-if-you-want-to-run-a-new-build-or-just-get-rid-of-them"},"Delete containers, if you want to run a new build, or just get rid of them"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker container stop serve-local\ndocker container rm serve-local\ndocker container stop server\ndocker container rm server\ndocker container stop client\ndocker container rm client\ndocker container stop world\ndocker container rm world\ndocker container stop channel\ndocker container rm channel\n")),(0,r.kt)("h3",{id:"mediasoup-is-a-powerful-beast-you-must-tame"},"Mediasoup is a powerful beast you must tame"),(0,r.kt)("p",null,"The vast majority of people get stuck on the mediasoup installation because it\nrequires C++ source code to be compiled on your machine, which requires node-gyp\nand python and other dependencies."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"It is extremely important that you refer to these instructions before continuing"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mediasoup.org/documentation/v3/mediasoup/installation/"},"https://mediasoup.org/documentation/v3/mediasoup/installation/")),(0,r.kt)("h3",{id:"installing-on-windows-with-wsl2"},"Installing on Windows with WSL2"),(0,r.kt)("p",null,"Note: ",(0,r.kt)("strong",{parentName:"p"},"You must have WSL2 installed for these instructions to work")),(0,r.kt)("p",null,"First, open a wsl prompt. Then type these commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get upgrade\nsudo apt-get install build-essential\nnpm install\nnpm install mediasoup@3 --save\nsudo service docker start\nnpm run dev-docker\nnpm run dev-reinit\n")),(0,r.kt)("p",null,"Please make sure you've followed everything in these instructions:\n",(0,r.kt)("a",{parentName:"p",href:"https://mediasoup.org/documentation/v3/mediasoup/installation/"},"https://mediasoup.org/documentation/v3/mediasoup/installation/")),(0,r.kt)("h1",{id:"installing-on-native-windows"},"Installing on Native Windows"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"install python 3 and add python installation directory path to 'path' env variable.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install node js")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"install Visual studio community edition with build tools. follow next steps.\nIf mediasoup will not installed properly then modify Visual studio setup to\nadd c++ and Node.js support.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"add path to MSbuild.exe (which is present into vs installation folder)\ninto 'path' variable (for example:",(0,r.kt)("inlineCode",{parentName:"p"}," C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Community\\MSBuild\\Current\\Bin"),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"install all dependencies using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If error persists then check for typos in environment variables.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are on Windows, you can use docker-compose to start the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts/docker-compose.yml"),"\nfile, or install mariadb and copy the login/pass and database name from\ndocker-compose or ",(0,r.kt)("inlineCode",{parentName:"p"},".env.local")," -- you will need to create the database with\nthe matching name, but you do not need to populate it"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./start-db.sh")," only needs to be run once. If the docker image has stopped,\nstart it again with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker container start xrengine_db\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Check your WSL Config for any incorrect networking settings.\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#network"},"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#network"))),(0,r.kt)("h1",{id:"installing-on-a-mac"},"Installing on a Mac"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the root and run ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install\nnpm run dev-docker\nnpm run dev-reinit\n")),(0,r.kt)("p",null,"Or if you are on a M1 based Mac"),(0,r.kt)("p",null,"(Recommended)\n1) Duplicate the Terminal app, and configure it to run in Rosetta\n2) Run the above in Rosetta Terminal"),(0,r.kt)("p",null,"(Not recommended) "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn install\n")),(0,r.kt)("p",null,"This is because on Apple chips the node-darwin sometimes doesn't get installed\nproperly and by using yarn it fixes the issue."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Have docker started in the background and then in the terminal type ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,r.kt)("p",null,"This will open the mariaDB and SQL scripts on the docker and will start the servers "),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"To make sure your environment is set and running properly just go to\nhttps://localhost:3000/location/default and you should be able to walk around an empty 3D scene")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Note : Make sure you are on Node >= 16 and have docker running. \n")),(0,r.kt)("h3",{id:"troubleshooting-mac"},"Troubleshooting Mac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you find issues on your terminal that says that access-denied for user\n",(0,r.kt)("inlineCode",{parentName:"li"},"server@localhost")," then you can use this command ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew services stop mysql\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you find issue on your terminal that says\n",(0,r.kt)("inlineCode",{parentName:"li"},'An unexpected error occurred: "expected workspace package'),"\nwhile using yarn then you can use this command in your terminal ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn policies set-version 1.18.0\n")),(0,r.kt)("p",null,"As yarn > 1.18 sometimes doesn't work properly with lerna. "),(0,r.kt)("h2",{id:"easy-setup"},"Easy setup"),(0,r.kt)("p",null,"If you are lucky, this will just work. However, you may encounter some\nissues. Make sure you are running Node 16, and check your dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd path/to/xrengine\nnpm install\nnpm run dev-docker\nnpm run dev-reinit\nnpm run dev\n")),(0,r.kt)("p",null,"This will automatically setup (if necessary) and run redis/mariadb docker\ncontainers, and XRengine client/server/game-server instances."),(0,r.kt)("p",null,"In a browser, navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://127.0.0.1:3000/location/default"},"https://127.0.0.1:3000/location/default")),(0,r.kt)("p",null,"The database seeding process creates a test empty location called 'test'.\nIt can be navigated to by going to '",(0,r.kt)("a",{parentName:"p",href:"https://127.0.0.1:3000/location/default'"},"https://127.0.0.1:3000/location/default'")),(0,r.kt)("p",null,"As of this writing, the cert provided in the xrengine package for local use is\nnot adequately signed. Browsers will throw up warnings about going to insecure\npages. You should be able to tell the browser to ignore it, usually by clicking\non some sort of 'advanced options' button or link and then something along the\nlines of 'go there anyway'."),(0,r.kt)("p",null,"Chrome sometimes does not show a clickable option on the warning. If so, just\ntype ",(0,r.kt)("inlineCode",{parentName:"p"},"badidea")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"thisisunsafe")," when on that page. You don't enter\nthat into the address bar or into a text box, Chrome is just passively listening\nfor those commands."),(0,r.kt)("h1",{id:"advanced-setup"},"Advanced Setup"),(0,r.kt)("p",null,"If you want to setup XREngine docker instances, client, server, and/or\ngame-server manually, follow these directions. The advanced setup is recommended\nfor all users, in order to understand more about everything that going on."),(0,r.kt)("h3",{id:"1--install-your-dependencies"},"1.  Install your dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd path/to/xrengine\nnpm install\nnpm run dev-docker\nnpm run dev-reinit\n")),(0,r.kt)("p",null,"You should not need to use sudo in any case."),(0,r.kt)("p",null,"Error with mediasoup?",(0,r.kt)("a",{parentName:"p",href:"https://mediasoup.org/documentation/v3/mediasoup/installation/"},"https://mediasoup.org/documentation/v3/mediasoup/installation/")),(0,r.kt)("h3",{id:"2-make-sure-you-have-a-mysql-database-installed-and-running----our-recommendation-is-mariadb"},"2. Make sure you have a mysql database installed and running -- our recommendation is Mariadb."),(0,r.kt)("p",null,"We've provided a docker container for easy setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd scripts && sudo bash start-db.sh\n")),(0,r.kt)("p",null,"This creates a Docker container of mariadb named xrengine_db. You must have\ndocker installed on your machine for this script to work.\nIf you do not have Docker installed and do not wish to install it, you'll have\nto manually create a MariaDB server."),(0,r.kt)("p",null,"The default username is 'server', the default password is 'password', the\ndefault database name is 'xrengine', the default hostname is '127.0.0.1', and\nthe default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"3306"),"."),(0,r.kt)("p",null,"Seeing errors connecting to the local DB? ",(0,r.kt)("strong",{parentName:"p"},"Try shutting off your local firewall.")),(0,r.kt)("h3",{id:"3-open-a-new-tab-and-start-the-agones-sidecar-in-local-mode"},"3. Open a new tab and start the Agones sidecar in local mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd scripts\nsudo bash start-agones.sh\n")),(0,r.kt)("p",null,"You can also go to vendor/agones/ and run"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./sdk-server.linux.amd64 --local")),(0,r.kt)("p",null,"If you are using a Windows machine, run"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sdk-server.windows.amd64.exe --local")),(0,r.kt)("p",null,"and for mac, run"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./sdk-server.darwin.amd64 --local")),(0,r.kt)("h3",{id:"4-start-the-server-in-database-seed-mode"},"4. Start the server in database seed mode"),(0,r.kt)("p",null,"Several tables in the database need to be seeded with default values.\nRun ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev-reinit")," or if on windows ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev-reinit-windows"),"\nAfter several seconds, there should be no more logging.\nSome of the final lines should read like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Server Ready\nExecuting (default): SET FOREIGN_KEY_CHECKS = 1\nServer EXIT\n")),(0,r.kt)("p",null,"At this point, the database has been seeded."),(0,r.kt)("h3",{id:"5-local-file-server-configuration"},"5. Local file server configuration"),(0,r.kt)("p",null,"If the .env.local file you have has the line\n",(0,r.kt)("inlineCode",{parentName:"p"},"STORAGE_PROVIDER=local"),"\nthen the scene editor will save components, models, scenes, etc. locally\n(as opposed to storing them on S3). You will need to start a local server\nto serve these files, and make sure that .env.local has the line\n",(0,r.kt)("inlineCode",{parentName:"p"},'LOCAL_STORAGE_PROVIDER="localhost:8642"'),".\nIn a new tab, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/server")," and run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run serve-local-files"),".\nThis will start up ",(0,r.kt)("inlineCode",{parentName:"p"},"http-server")," to serve files from ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/server/upload"),"\non ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8642"),".\nYou may have to accept the invalid self-signed certificate for it in the browser;\nsee 'Allow local file http-server connection with invalid certificate' below."),(0,r.kt)("h3",{id:"6-open-twothree-separate-tabs-and-start-the-api-server-gameserver-and-client"},"6. Open two/three separate tabs and start the API server, gameserver and client"),(0,r.kt)("p",null,"In /packages/server, run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," which will launch the api server, game server and file server.\nIf you are not using gameservers, you can instead run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev-api-server")," in the api server.\nIn the final tab, go to /packages/client and run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),".\nIf you are on windows you need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev-windows")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),"."),(0,r.kt)("h3",{id:"7-in-a-browser-navigate-to-https1270013000locationdefault"},"7. In a browser, navigate to ",(0,r.kt)("a",{parentName:"h3",href:"https://127.0.0.1:3000/location/default"},"https://127.0.0.1:3000/location/default")),(0,r.kt)("p",null,"The database seeding process creates a default empty location called 'default'.\nIt can be navigated to by going to '",(0,r.kt)("a",{parentName:"p",href:"https://127.0.0.1:3000/location/default'"},"https://127.0.0.1:3000/location/default'"),".\nAs of this writing, the cert provided in the XREngine package for local use is\nnot adequately signed. You can create signed certificates and replace the\ndefault ones, but most developers just ignore the warnings. Browsers will throw\nup warnings about going to insecure pages. You should be able to tell the browser\nto ignore it, usually by clicking on some sort of 'advanced options' button or\nlink and then something along the lines of 'go there anyway'."),(0,r.kt)("h3",{id:"admin-system"},"Admin System"),(0,r.kt)("p",null,"You can administrate many features from the admin panel at https://localhost:3000/admin"),(0,r.kt)("p",null,"How to make a user an admin:"),(0,r.kt)("p",null,"Create a user at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:3000/")),(0,r.kt)("p",null,"To locate your User ID:\nIn Chrome Dev Tools console, write ",(0,r.kt)("inlineCode",{parentName:"p"},"copy(userId)"),". This will copy your User ID\n(As shown in attached screenshot). Paste it in and run the following command in\na 'nix shell (e.g. Bash, ZSH):"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm run make-user-admin -- --id={COPIED_USER_ID}")),(0,r.kt)("p",null,"Example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"npm run make-user-admin -- --id=c06b0210-453e-11ec-afc3-c57a57eeb1ac")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43248658/142813912-35f450e1-f012-4bdf-adfa-f0fa2816160f.png",alt:"image"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"TODO: Improve with email/phone ID support")),(0,r.kt)("p",null,"Alternate Method: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Look up in User table and change userRole to 'admin' "),(0,r.kt)("li",{parentName:"ol"},"Dev DB credentials can be found here: packages/ops/docker-compose-local.yml#L42"),(0,r.kt)("li",{parentName:"ol"},"Suggested: beekeeperstudio.io")),(0,r.kt)("p",null,"Test user Admin privileges by going to ",(0,r.kt)("inlineCode",{parentName:"p"},"/admin")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./01.1-install-troubleshooting.md"},"Next =>>")))}c.isMDXComponent=!0}}]);