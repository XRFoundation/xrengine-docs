(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[83217],{30876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37086:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(7560),r=n(98283),i=(n(2784),n(30876)),o={id:"installation",title:"Installation"},l={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"xrengine",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/xrengine-docs/docs/installation",editUrl:"https://github.com/XRFoundation/XREngine/edit/jsdoc/packages/docs/docs/installation.md",version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/xrengine-docs/docs/"},next:{title:"Getting Started",permalink:"/xrengine-docs/docs/"}},s=[{value:"Getting Started",id:"getting-started",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/xrengine/xrengine/raw/dev/xrengine%20black.png",alt:"xrengine"})),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Getting up and running requires only a few steps."),(0,i.kt)("p",null,"IF ON WINDOWS, go to Native Windows Preinstall below"),(0,i.kt)("p",null,"For on OSX / Linux / WSL2 for Windows:"),(0,i.kt)("p",null,"First, make sure you have ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"NodeJS")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," installed (and if you are using it, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"docker"),")."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install your dependencies"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cd path/to/xrengine\nyarn install\n")),(0,i.kt)("p",{parentName:"li"},"Error with mediasoup? Optional: ",(0,i.kt)("a",{parentName:"p",href:"https://mediasoup.org/documentation/v3/mediasoup/installation/"},"https://mediasoup.org/documentation/v3/mediasoup/installation/")),(0,i.kt)("p",{parentName:"li"},"If on WSL2:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install build-essential\nnpm install -g node-gypPYTHON=python3 yarn install\nnpm config set python /usr/bin/python\nPYTHON=python3 yarn install\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure you have a mysql database installed and running -- our recommendation is Mariadb. We've provided a docker container for easy setup:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cd scripts && sudo bash start-db.sh\n")),(0,i.kt)("p",{parentName:"li"}," This creates a Docker container of mariadb named xrengine_db. You must have docker installed on your machine for this script to work.\nIf you do not have Docker installed and do not wish to install it, you'll have to manually create a MariaDB server."),(0,i.kt)("p",{parentName:"li"},"The default username is 'server', the default password is 'password', the default database name is 'xrengine', the default hostname is '127.0.0.1', and the default port is '3306'."),(0,i.kt)("p",{parentName:"li"},"Seeing errors connecting to the local DB? Shut off your local firewall.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a new tab and start the Agones sidecar in local mode"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cd scripts\nsudo bash start-agones.sh\n")),(0,i.kt)("p",{parentName:"li"},"You can also go to vendor/agones/ and run"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"./sdk-server.linux.amd64 --local")),(0,i.kt)("p",{parentName:"li"},"If you are using a Windows machine, run"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"sdk-server.windows.amd64.exe --local")),(0,i.kt)("p",{parentName:"li"},"and for mac, run"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"./sdk-server.darwin.amd64 --local"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Obtain .env.local file with configuration variable.\nMany parts of XREngine are configured using environment variables.\nFor simplicity, it's recommended that you create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," in the top level of xrengine,\nand have all of your ENV_VAR definitions here in the form ",(0,i.kt)("inlineCode",{parentName:"p"},"<VAR_NAME>=<VALUE>"),".\nIf you are actively working on this project, contact one of the developers for a copy of the file\nthat has all of the development settings and keys in it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start the server in database seed mode"),(0,i.kt)("p",{parentName:"li"},"Several tables in the database need to be seeded with default values.\nRun ",(0,i.kt)("inlineCode",{parentName:"p"},"cd packages/server"),", then run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn dev-reinit-db"),".\nAfter several seconds, there should be no more logging.\nSome of the final lines should read like this:\n",(0,i.kt)("inlineCode",{parentName:"p"},"Executing (default): SELECT 'id', 'name', 'sceneId', 'locationSettingsId', 'slugifiedName', 'maxUsersPerInstance', 'createdAt', 'updatedAt' FROM 'location' AS 'location' WHERE ('location'.'id' = '98cbcc30-fd2d-11ea-bc7c-cd4cac9a8d61') AND 'location'.'id' IN ('98cbcc30-fd2d-11ea-bc7c-cd4cac9a8d61'); Seeded")),(0,i.kt)("p",{parentName:"li"}," At this point, the database has been seeded. You can shut down the server with CTRL+C.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open two separate tabs and start the server (non-seeding) and the client\nIn /packages/server, run ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo yarn dev"),".\nIn the other tab, go to /packages/client and run ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo yarn dev"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In a browser, navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://127.0.0.1:3000/location/home"},"https://127.0.0.1:3000/location/home"),"\nThe database seeding process creates a test empty location called 'test'.\nIt can be navigated to by going to '",(0,i.kt)("a",{parentName:"p",href:"https://127.0.0.1:3000/location/home'"},"https://127.0.0.1:3000/location/home'"),".\nSee the sections below about invalid certificates if you are encountering errors\nconnecting to the client, API, or gameserver."),(0,i.kt)("h3",{parentName:"li",id:"native-windows-preinstall"},"Native Windows Preinstall"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Add Env Variable")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"PUPPETEER_SKIP_DOWNLOAD='true'\n")),(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"install python 2 and add python installation directory path to 'path' env variable.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install node js")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"install Visual studio community edition with build tools. follow next steps. If mediasoup will not installed properly then modify Visual studio setup to add c++ and Node.js support.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"add environmental variable"))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"GYP_MSVS_VERSION=<vs-year>\nfor example, GYP_MSVS_VERSION=2019\n")),(0,i.kt)("ol",{parentName:"li",start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"add path to MSbuild.exe (which is present into vs installation folder) into 'path' variable\nfor example:",(0,i.kt)("inlineCode",{parentName:"p"}," C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Community\\MSBuild\\Current\\Bin"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"remove mediasoup and mediasoup-client from every package.json. This will enable us to add all the dependencies except mediasoup, this way we can save time while dealing with mediasoup.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"rename 'postinstall' to 'postinstall-1' so that it will not run after installing dependencies.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"install all dependences using yarn.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"add back all removed mediasoup and mediasoup-client dependencies.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rerun yarn command to install dependencies to install newly added mediasoup and mediasoup-client dependencies.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If error persists then check for typos in evironment variables.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you are on Windows, you can use docker-compose to start the scripts/docker-compose.yml file, or install mariadb and copy the login/pass and database name from docker-compose or .env.local -- you will need to create the database with the matching name, but you do not need to populate it"))),(0,i.kt)("p",{parentName:"li"},"./start-db.sh only needs to be run once. If the docker image has stopped, start it again with:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"    docker container start xrengine_db\n")),(0,i.kt)("h3",{parentName:"li",id:"osx-db-native-initialization-commands"},"OSX DB Native Initialization Commands"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"brew install mysql\n\nmysql_secure_installation\nserver\npassword\n\nmysql -uroot -ppassword\nmysql -userver -ppassword\n\ncreate database xrengine;\ncreate user 'server'@'127.0.0.1' identified by 'password';\ngrant all on xrengine.* to 'server'@'127.0.0.1';\n\nshow databases;\n\nmysql.server start\nmysql.server stop\n")),(0,i.kt)("h3",{parentName:"li",id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h4",{parentName:"li",id:"invalid-certificate-errors-in-local-environment"},"Invalid Certificate errors in local environment"),(0,i.kt)("p",{parentName:"li"},"As of this writing, the cert provided in the xrengine package for local use\nis not adequately signed. Browsers will throw up warnings about going to insecure pages.\nYou should be able to tell the browser to ignore it, usually by clicking on some sort\nof 'advanced options' button or link and then something along the lines of 'go there anyway'."),(0,i.kt)("p",{parentName:"li"},"Chrome sometimes does not show a clickable option on the warning. If so, just\ntype ",(0,i.kt)("inlineCode",{parentName:"p"},"badidea")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"thisisunsafe")," when on that page. You don't enter that into the\naddress bar or into a text box, Chrome is just passively listening for those commands."),(0,i.kt)("h5",{parentName:"li",id:"allow-gameserver-address-connection-via-installing-local-certificate-authority"},"Allow gameserver address connection via installing local Certificate Authority"),(0,i.kt)("p",{parentName:"li"},"For more detailed instructions check: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FiloSottile/mkcert"},"https://github.com/FiloSottile/mkcert")),(0,i.kt)("p",{parentName:"li"},"Short version (common for development process on Ubuntu):"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install libnss3-tools")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"brew install mkcert")," (if you don't have brew, check it's page: ",(0,i.kt)("a",{parentName:"li",href:"https://brew.sh/"},"https://brew.sh/"),")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"mkcert --install")),(0,i.kt)("li",{parentName:"ol"},"navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"./certs")," folder"),(0,i.kt)("li",{parentName:"ol"},"mkcert -key-file key.pem -cert-file cert.pem localhost 127.0.0.1 ::1")),(0,i.kt)("h5",{parentName:"li",id:"allow-gameserver-address-connection-with-invalid-certificate"},"Allow gameserver address connection with invalid certificate"),(0,i.kt)("p",{parentName:"li"},"The gameserver functionality is hosted on an address other than 127.0.0.1 in the local\nenvironment. Accepting an invalid certificate for 127.0.0.1 will not apply to this address.\nOpen the dev console for Chrome/Firefox by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+i")," simultaneously, and\ngo to the Console or Network tabs."),(0,i.kt)("p",{parentName:"li"},"If you see errors about not being able to connect to\nsomething like ",(0,i.kt)("inlineCode",{parentName:"p"},"https://192.168.0.81/socket.io/?location=<foobar>"),", right click on\nthat URL and open it in a new tab. You should again get a warning page about an invalid\ncertificate, and you again need to allow it.  "),(0,i.kt)("h4",{parentName:"li",id:"accessdenied-connecting-to-mariadb"},"AccessDenied connecting to mariadb"),(0,i.kt)("p",{parentName:"li"},"Make sure you don't have another instance of mariadb running on port 3306"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"    lsof -i :3306\n")),(0,i.kt)("p",{parentName:"li"},"On Linux, you can also check if any processes are running on port 3306 with\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo netstat -utlp | grep 3306"),"\nThe last column should look like ",(0,i.kt)("inlineCode",{parentName:"p"},"<ID>/<something"),"\nYou can kill any running process with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo kill <ID>")),(0,i.kt)("h4",{parentName:"li",id:"error-listen-eaddrinuse-3030"},"Error: listen EADDRINUSE :::3030"),(0,i.kt)("p",{parentName:"li"},"check which process is using port 3030 and kill"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"    killall -9 node\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"OR\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"    lsof -i :3030\n    kill -3 <proccessIDfromPreviousCommand>\n")),(0,i.kt)("h4",{parentName:"li",id:"typeerror-cannot-read-property-position-of-undefined-when-accessing-locationhome"},"'TypeError: Cannot read property 'position' of undefined' when accessing /location/home"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"As of this writing, there's a bug with the default seeded test location.\nGo to /editor/projects and open the 'Test' project. Save the project, and\nthe error should go away.\n")),(0,i.kt)("h4",{parentName:"li",id:"weird-issues-with-your-database"},"Weird issues with your database?"),(0,i.kt)("p",{parentName:"li"},"Try"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"yarn run dev-reinit-db // in server package\n")))))}d.isMDXComponent=!0}}]);