import Logger from "./Utils/Logger";

Hooks.once("setup", () => {
   Logger.Log("Dice-Stats setup.")
});

Hooks.once("ready", () => {
   Logger.Ok("Dice-Stats Ready!");
});