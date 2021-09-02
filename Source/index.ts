import Logger from "./Utils/Logger";

Hooks.once("init", () => {
   Logger.Log("Template module is initialised.")
});

Hooks.once("setup", () => {
   Logger.Log("Template module is being setup.")
});

Hooks.once("ready", () => {
   Logger.Ok("Template module is now ready.");
});