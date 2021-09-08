import {ModuleData} from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/packages.mjs";
import {IsModule, ModuleName} from "../index";

export const GetModuleInformation = async (): Promise<ModuleData> => {
	const module = await fetch(IsModule ? "modules/" : "systems/" + ModuleName + "/module.json")
	return await module.json();
};