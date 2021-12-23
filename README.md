# FoundryVTT - Typescript + Gulp + Less Module/System Template

This is a relatively barebones module template for FoundryVTT. It is built using Gulp + Typescript and serves as a starter point for all module development. The [LESS](https://lesscss.org/) CSS pre-processor is used for stylesheets. The main purpose of this methodolgy is allowing easy usage of third party libraries, utility functions, etc.

## Notes
- The entry point is index.ts inside of the Source folder.
- The output files will go inside of a "dist" folder after a build. There will be one JavaScript file called "bundle.js", and a list of css files, as well as any other assets you include.
- This template has an automatic build and publish pipeline to streamline the process of developing and updating modules.
- The Logger class inside of Utils exists to log with neat colours and proper timestamps with all log messages. Use this over console.log.

## Foundry Path
For the build pipeline to work properly you must define an environment variable called `FOUDNRY_PATH` that points to the save data directory. Example: 
Windows Powershell:
`[Environment]::SetEnvironmentVariable("FOUNDRY_PATH", ${Env:localappdata}+"\FoundryVTT", "User")`

Linux:
Add `FOUNDRY_PATH="~/PATH/TO/FOUNDRY"; export FOUNDRY_PATH` to ~/.profile

## Running
There are a few in-built commands as part of package.json. If you just want to get started with the template, you can jump right in with the following commands:
```bash
git clone git@github.com:Lazrius/FoundryVTT-Typescript-Module-Template.git

: Replace MyCoolModule with whatever you want to call it.
mv FoundryVTT-Typescript-Module-Template MyCoolModule
cd MyCoolModule

: You\'ll need to change the remote to be away from the template remote.
git remote set-url origin git@github.com:YourName/YourRepo.git

: Install our dependcies
npm install
: Run the build!
npm run build
```

Ideally, you should use the GitHub template system over the above method, but the instructions are there should you need them.

### Commands:
The following commands are built into the project.
- npm run build
- npm run build:watch
- npm run clean
- npm run package "1.0.0" (replace the version number here with whatever version you are publishing)

Build will convert all of your TS files into a single bundle.js, and all of your less style sheets into css versions (remember to have them included in your module.json)
build:watch will rebuild whenever the files change
Clean will remove the dist folder and any remaining build artefacts.

Package will perform all the prior steps, but will then change all references to the internal version with the new version specified. After doing such, it will generate a new zip file inside of a "package" folder, and automatically commit the file for you.
This commit can then be pushed, and properly updated for people using the module to easily update their own copies.

## Renaming the project.
Due to the build pipeline, it's not as simple as just changing a few names and being done with it. In order to properly name your module, you'll need to update the name/path inside of: 
- package.json 
- foundryconfig.json
- Source/Style/lazrius-foundry-template.less (rename the file to the new project name)
- Source/module.json (update the following fields: url, manifest, download, styles)
- Source/Globals.ts - Change ModuleName to match what is written in module.json

## Contributing / Ideas
I am happy for anyone to create issues or pull requests for extra things inside of this template. Please do inform me of any errors that you find.

## Main Credits
- [League of Foundry Developers](https://github.com/League-of-Foundry-Developers/foundry-vtt-types) for their work on Foundry VTT Types.
- [studio315b](https://gitlab.com/studio315b/foundryvtt-tools) for his/her work on the Foundry Toolkit, which I used as basis for this project.
- [Foundry Gaming](https://foundryvtt.com) for their amazing work on the VTT we all know and love.
