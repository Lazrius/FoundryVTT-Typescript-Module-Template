import { ModuleData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/packages.mjs";
import fs from 'fs-extra';
import Logger from "./Logger";

export const GetModuleInformation = (): ModuleData => {
	if(!fs.existsSync("../module.json")) {
		Logger.Err("Module JSON was missing. Unable to continue.");
		throw Error();
	}

	const moduleJson = fs.readJsonSync("../module.json");
	return moduleJson;
};