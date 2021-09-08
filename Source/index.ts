import Logger from "./Utils/Logger";
import Settings from "./Utils/Settings";

Hooks.once("init", () => {
   Settings.Get().RegisterSettings();
});

Hooks.once("setup", () => {
   Logger.Log("Template module is being setup.")
});

Hooks.once("ready", () => {
   Logger.Ok("Template module is now ready.");
});