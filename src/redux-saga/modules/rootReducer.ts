import { combineReducers } from "redux";

import devices from "./devices/reducer";
import themeReducer from "./theme/reducer";

export default combineReducers({
	devices,
	theme: themeReducer,
});
