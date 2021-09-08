import Globals from "../Globals";
import Color from "color";

class Logger {
	// static class
	private constructor() {}

	private static GetCurrentTime(): string {
		return `[${(new Date().toLocaleTimeString())}] `;
	}

	static Log(str: string, colour: Color = Color("white"), bold = false): void {
		const time = ToConsole(Logger.GetCurrentTime(), Color("gray"), false)
		const moduleName = ToConsole(Globals.ModuleName + " ", Color("cyan"), true);
		const text = ToConsole(str, colour, bold);
		console.log(time.str + moduleName.str + text.str, ...time.params.concat(moduleName.params, text.params));
	}

	static Err(str: string): void {
		Logger.Log(str, Color("orange"));
	}

	static Warn(str: string): void {
		Logger.Log(str, Color("yellow"));
	}

	static Ok(str: string): void {
		Logger.Log(str, Color("green"));
	}
}

interface ConsoleColour {
	str: string,
	params: Array<string>;
}

const ToConsole = (str: string, col: Color, bold: boolean): ConsoleColour => {
	return {
		str: `%c` + str + `%c`,
		params: [
			"color: " + col.hex() + ";" + (bold ? "font-weight: bold;" : ""),
			"color: unset; font-weight: unset;"
		]
	}
};

export default Logger;