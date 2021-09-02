import chalk from "chalk";
import {GetModuleInformation} from "./Module";

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
        const module = GetModuleInformation();
        const moduleName = module.name === undefined
            ? "Unknown Module"
            : module.name;
        return Logger.GetCurrentTime() + moduleName;
    }

    private static GetCurrentTime(): string {
        return `[${timeStamp(new Date().toLocaleTimeString())}] `;
    }

    static Log(str: string): void {
        console.log(Logger.Prefix() + log(str));
    }

    static Err(str: string): void {
        console.log(Logger.Prefix() + error(str));
    }

    static Warn(str: string): void {
        console.log(Logger.Prefix() + warning(str));
    }

    static Ok(str: string): void {
        console.log(Logger.Prefix() + ok(str));
    }

    static Highlight(str: string): string {
        return highlight(str);
    }
}

export default Logger;