import produce from "immer";
import { ThemesEnum } from "../../../utils/uikit/themesEnum";
import { TYPES } from "./types";

interface ActionProps {
	type: string;
	payload?: any;
}

const INITIAL_STATE = {
	theme: ThemesEnum.dark,
};

export default function themeReducer(
	state = INITIAL_STATE,
	action: ActionProps | undefined
) {
	switch (action?.type) {
		case TYPES.TOGGLE_THEME: {
			return produce(state, draft => {
				if (draft.theme === ThemesEnum.light) {
					draft.theme = ThemesEnum.dark;
				} else {
					draft.theme = ThemesEnum.light;
				}
			});
		}

		default:
			return state;
	}
}
