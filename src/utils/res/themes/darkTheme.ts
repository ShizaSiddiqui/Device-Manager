import { Colors } from "../color";
import { appThemeValue } from "../appThemeValue";
import { appTheme } from "../../interface/appThemeInterface";

export const Dark: appTheme = {
	Colors: {
		name: appThemeValue.dark,
		background: Colors.darkCobalt,
		icon: Colors.white,
    placeholder: Colors.placeholder,
		primaryText: Colors.lightGrey,
		secondaryText: Colors.lightGrey,
		buttonBackground: Colors.white,
		buttonText: Colors.teal,
		cardBackground: Colors.lightCobalt,
		input: Colors.lightCobalt,
		border: Colors.blue,
		statusBar: Colors.cobalt,
		link: Colors.white,
		error: Colors.red,
	},
};
