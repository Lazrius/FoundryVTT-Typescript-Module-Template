import { ModuleData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/packages.mjs";
import fs from 'fs-extra';
import Logger from "./Logger";

export const GetModuleInformation = (): ModuleData => {
	if(!fs.existsSync("Source/module.json")) {
		throw Error("Module JSON was missing. Unable to continue.");
	}

	const moduleJson = fs.readJsonSync("Source/module.json");
	return moduleJson;
};