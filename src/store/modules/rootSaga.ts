import { all } from "redux-saga/effects";

import { sagas } from "./devices/sagas";

export default function* rootSaga(): any {
	return yield all([sagas]);
}
