import assert from "assert"

export default {
	ModuleName: "lazrius-foundry-template",
	IsModule: true, // If you are developing a system rather than a module, change this to false
}

// Pop some fairly universal types that we might use

export type Pair<T> = [string, T];
export const Assert = (value: unknown): void => assert(value);