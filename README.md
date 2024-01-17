# Spartabots Website (SpartaSite)
This repo holds all the code for our <a href="https://spartasite.gam3rr.me" target="_blank" title="Spartasite">
  <p1>SpartaBots website</p1>
</a>

## Hosting
This is currently being hosted by: <a href="https://github.com/Gam3rrXD" target="_blank" title="Gam3rr"><img src="https://github.com/Gam3rrXD.png?size=20" height="20" width="20" alt="Gam3rrXD" /></a>
## Instructions for Rehosting
- Use a LINUX/UNIX based server to host, it is currently being hosted on ```Ubuntu 20.04.6 LTS```, server must be on 24/7
- Clone the repository
    - ```git clone https://github.com/SkylineSpartabots/SpartaSite```
- Change directory into the "client" folder
  - ```cd SpartaSite/client```
- Install all the NPM packages
  - ```npm i```
- Obtain the env file
    - The env file was removed for privacy reasons, the current holder(s) of the new file are <a href="https://github.com/Gam3rrXD" target="_blank" title="Gam3rr"> <img src="https://github.com/Gam3rrXD.png?size=20" height="20" width="20" alt="Gam3rrXD" /></a> or <a href="https://github.com/VincentShao32" target="_blank" title="VincentShao32"> <img src="https://github.com/VincentShao32.png?size=20" height="20" width="20" alt="Gam3rrXD" /> </a>
    - Once you have the env file name it ```.env``` and move it to the "server" folder ```mv .env SpartaSite/server/.env```
- Run the build
  - For a development build, use the following commands:
    - ```npm start``` | This will start the server but hold up terminal so you cannot run other commands
    - ```nohup npm start``` | This will run the server in the background
  - For a production build, run these commands instead:
    - To prep and compile everything, use ```npm run build```
    - If you do not have serve installed globally, use ```npm install -g serve```
    - ```serve -s build --config ../serve.json``` | This will start the server and hold up terminal so you cannot run other commands
    - ```nohup serve -s build --config ../serve.json &``` | This will run the server in the background
- Setup the URL
    - If you are rehosting the cloudflare configuration must be changed, or else your site will only work on the servers IP, to change cloudflare configuration ask the current holder
    - Current Holder: <a href="https://github.com/Gam3rrXD" target="_blank" title="Gam3rr"> <img src="https://github.com/Gam3rrXD.png?size=20" height="20" width="20" alt="Gam3rrXD" />

## Contributors

<a href="https://github.com/VincentShao32" target="_blank" title="VincentShao32"><img src="https://github.com/VincentShao32.png?size=40" height="40" width="40" alt="VincentShao32"/></a>
<a href="https://github.com/Gam3rrXD" target="_blank" title="Gam3rr"><img src="https://github.com/Gam3rrXD.png?size=40" height="40" width="40" alt="Gam3rrXD"/></a>
<a href="https://github.com/messier81porcupine" target="_blank" title="messier81porcupine"><img src="https://github.com/messier81porcupine.png?size=40" height="40" width="40" alt="messier81porcupine"/></a>
<a href="https://github.com/Dhruv-0-Arora" target="_blank" title="Dhruv-0-Arora"><img src="https://github.com/Dhruv-0-Arora.png?size=40" height="40" width="40" alt="Dhruv-0-Arora"/></a>
<a href="https://github.com/yandaboa" target="_blank" title="yandaboa"><img src="https://github.com/yandaboa.png?size=40" height="40" width="40" alt="yandaboa"/></a>
<a href="https://github.com/TheCubeHamster" target="_blank" title="TheCubeHamster"><img src="https://github.com/TheCubeHamster.png?size=40" height="40" width="40" alt="TheCubeHamster"/></a>
<a href="https://github.com/LS-x21" target="_blank" title="LS-x21"><img src="https://github.com/LS-x21.png?size=40" height="40" width="40" alt="LS-x21"/></a>
<a href="https://github.com/solar138" target="_blank" title="solar138"><img src="https://github.com/solar138.png?size=40" height="40" width="40" alt="solar138"/></a>
<a href="https://github.com/Sawbez" target="_blank" title="Sawbez"><img src="https://github.com/Sawbez.png?size=40" height="40" width="40" alt="Sawbez"/></a>
