import { Colors } from "../colors";
import { ThemesEnum } from "../themesEnum";
import { ITheme } from "../../models/ITheme";

export const Dark: ITheme = {
	Colors: {
		name: ThemesEnum.dark,
		background: Colors.darkCobalt,
		icon: Colors.white,
		primaryText: Colors.white,
		secondaryText: Colors.lightGrey,
		buttonBackground: Colors.white,
		buttonText: Colors.purple,
		cardBackground: Colors.lightCobalt,
		input: Colors.lightCobalt,
		border: Colors.blue,
		statusBar: Colors.cobalt,
		link: Colors.white,
		error: Colors.red,
	},
};
