import { Colors } from "../color";
import { appThemeValue } from "../appThemeValue";
import { appTheme } from "../../interface/appThemeInterface";

export const Light: appTheme = {
	Colors: {
		name: appThemeValue.light,
		background: Colors.grey,
		icon: Colors.deepTeal,
    placeholder: Colors.placeholder,
		primaryText: Colors.deepTeal,
		secondaryText: Colors.teal,
		buttonBackground: Colors.deepTeal,
		buttonText: Colors.white,
		cardBackground: Colors.white,
		input: Colors.white,
		border: Colors.teal,
		statusBar: Colors.white,
		link: Colors.lightCobalt,
		error: Colors.red,
	},
};
