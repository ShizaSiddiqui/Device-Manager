import produce from "immer";
import { appThemeValue } from "../../../utils/res/appThemeValue";
import { TYPES } from "./types";

interface ActionProps {
	type: string;
	payload?: any;
}

const INITIAL_STATE = {
	theme: appThemeValue.dark,
};

export default function themeReducer(
	state = INITIAL_STATE,
	action: ActionProps | undefined
) {
	switch (action?.type) {
		case TYPES.TOGGLE_THEME: {
			return produce(state, draft => {
				if (draft.theme === appThemeValue.light) {
					draft.theme = appThemeValue.dark;
				} else {
					draft.theme = appThemeValue.light;
				}
			});
		}

		default:
			return state;
	}
}
