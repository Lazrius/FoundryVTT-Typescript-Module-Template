import chalk from "chalk";
import {ModuleName} from "../index";

const error = chalk.bold.red;
const warning = chalk.yellow;
const log = chalk.cyan;
const highlight = chalk.blueBright;
const ok = chalk.green;
const timeStamp = chalk.gray;

class Logger {
	// static class
	private constructor() {}
	private static Prefix(): string {
		return Logger.GetCurrentTime() + ModuleName + " ";
	}

	private static GetCurrentTime(): string {
		return `[${timeStamp(new Date().toLocaleTimeString())}] `;
	}

	static Log(str: string, colour: chalk.ChalkFunction = log): void {
		console.log(Logger.Prefix() + colour(str));
	}

	static Err(str: string): void {
		Logger.Log(str, error);
	}

	static Warn(str: string): void {
		Logger.Log(str, warning);
	}

	static Ok(str: string): void {
		Logger.Log(str, ok);
	}

	static Highlight(str: string): string {
		return highlight(str);
	}
}

export default Logger;