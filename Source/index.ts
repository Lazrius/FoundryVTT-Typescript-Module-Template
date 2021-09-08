import Logger from "./Utils/Logger";
// If you are developing a system rather than a module, change this to false
export const IsModule = true;
export const ModuleName = "lazrius-foundry-template"

Hooks.once("init", () => {
   Logger.Log("Template module is initialised.")
});

Hooks.once("setup", () => {
   Logger.Log("Template module is being setup.")
});

Hooks.once("ready", () => {
   Logger.Ok("Template module is now ready.");
});