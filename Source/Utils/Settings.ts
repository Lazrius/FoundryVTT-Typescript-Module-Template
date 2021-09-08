import Globals, {Assert, Pair} from "../Globals";
import Logger from "./Logger";

class Settings {
	private constructor() {
		Logger.Ok("Loading configuration settings.")
		this.SettingsList = [
			// Add settings items here
			["coolDM", {
				name: "Is the DM Cool?",
				scope: "world", // or client
				type: Boolean,
				hint: "Really think about it... is the DM cool?",
				config: true, // It should appear in the configuration menu
				default: false, // The DM is NOT cool by default
				onChange: val => Logger.Ok("It has been deemed that the DM is " + (val ? "" : "NOT ") + "cool!"),
			}]
		];
	}

	private static instance: Settings;

	public static Get(): Settings {
		if (Settings.instance)
			return Settings.instance;

		Settings.instance = new Settings();
		return Settings.instance;
	}

	private SettingsInit = false;
	public RegisterSettings(): void {
		if (this.SettingsInit)
			return;

		Assert(game instanceof Game);
		const g = game as Game;
		this.SettingsList.forEach((item) => {
			g.settings.register(Globals.ModuleName, item[0], item[1]);
		});

		this.SettingsInit = true;
	}

	readonly SettingsList: ReadonlyArray<Pair<ClientSettings.PartialSetting>>;
}

export default Settings;