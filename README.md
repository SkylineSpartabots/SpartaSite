![Spartasite Banner](https://github.com/SkylineSpartabots/SpartaSite/assets/84348006/cdc4ca16-99e6-4e8e-9f0e-eabd02d230f3)
# 
### **Update 05/15**:

&nbsp;&nbsp;&nbsp;&nbsp;Recently, I have heard that Spartabots members want opportunities within software. The website is a great introduction to how the software department works, specifically deadlines and debugging. So from this point onwards, the flow of how PRs/issues work is going to be different. Spartabots members will be the first people to have access to these issues, the public will not be able to claim these issues until 1 week after it has been created. Within this 1-week period, Spartabots members will be able to "claim" these issues. This means that they will be the only ones that are assigned to work on that specific issue. You may work with multiple people WITHIN Spartabots to fix/implement the issue. All of these issues will be marked {SMOnly}, which means only members can claim these issues. Once this one week is up, they will be available to the public. Spartabots members will always be able to claim these issues even once they are open to the public, and issue requests by Spartabots members will be given priority over the public. We hope you enjoy helping develop one of our biggest and most crucial off-season projects!
    
&nbsp;&nbsp;&nbsp;&nbsp;AI is a tool. It can be used as such in this case. An appropriate use case for AI would be to debug something that you have developed. However, AI **MAY NOT** be directly copied and pasted from! Do not put a problem into an AI tool and copy and paste the response. This will not only harm your reputation within the team but the team itself. If you are caught using AI to entirely create the code you are PRing there will be consequences. If you are stuck or confused, I recommend using stack overflow or similar to learn more about the problem and find steps to progress. The administrators of the repo will approve all PRs and they will be thoroughly looked through so do not add random things that don't improve the project. 

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
    - ```serve -s build --config``` | This will start the server and hold up terminal so you cannot run other commands
    - ```nohup serve -s build &``` | This will run the server in the background
- Setup the URL
    - If you are rehosting this website the CloudFlare configuration must be changed, or else your site will only work on the current servers IP, to change CloudFlare configuration ask the current holder
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
