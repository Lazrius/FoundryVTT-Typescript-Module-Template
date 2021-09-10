import Logger from "./Utils/Logger";
import Settings from "./Utils/Settings";

import PreloadTemplates from "./PreloadTemplates";

Hooks.once("init", async () => {
   Settings.Get().RegisterSettings();
   await PreloadTemplates();
});

Hooks.once("setup", () => {
   Logger.Log("Template module is being setup.")
});

Hooks.once("ready", () => {
   Logger.Ok("Template module is now ready.");
});