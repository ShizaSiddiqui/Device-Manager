import {
	all,
	call,
	put,
	select,
	takeEvery,
	takeLatest,
} from "redux-saga/effects";
import { Action } from "redux";
import { Alert } from "react-native";
import { Device } from "../../../utils/models/device";
import { RootState } from "../../../utils/models/RootState";
import quoteApi from "../../../service/quoteApi";
import { TYPES } from "./types";
import {
	deleteDeviceError,
	deleteDeviceSuccess,
	updateDeviceSuccess,
	registerDeviceSuccess,
	registerMultipleSuccess,
} from "./action";
import * as RootNavigation from "../../../utils/RootNavigation";

interface CreateOrEditAction extends Action {
	type: string;
	payload: Device;
}

interface MultipleAction extends Action {
	type: string;
	payload: Device[];
}

interface DeleteAction extends Action {
	type: string;
	payload: string;
}

export const confirmationAlert = () =>
	new Promise((resolve, reject) => {
		Alert.alert(
			"Atention!",
			"This device has an owner, are you sure you want to delete?",
			[
				{
					text: "Yes",
					onPress: () => resolve("confirmed"),
				},
				{ text: "No", onPress: () => reject("canceled") },
			]
		);
	});

export function* updateDevice({ payload }: CreateOrEditAction): any {
	yield put(updateDeviceSuccess(payload));
	RootNavigation.goBack();
}

export function* registerMultiple({ payload }: MultipleAction): any {
	yield put(registerMultipleSuccess(payload));
}

export function* registerDevice({ payload }: CreateOrEditAction): any {
	yield put(registerDeviceSuccess(payload));
	RootNavigation.goBack();
}

export const quoteDialog = (quote: string) =>
	new Promise(resolve => {
		Alert.alert("Quote of the day!", quote, [
			{
				text: "Great!",
				onPress: () => resolve("confirmed"),
			},
		]);
	});

export function* showQuote(): any {
	const response = yield call(quoteApi.get, "/today");
	if (response.data) {
		yield call(quoteDialog, response.data[0].q);
	}
}

export function* deleteDevice(hasOwner: boolean, id: string) {
	if (hasOwner) {
		try {
			yield call(confirmationAlert);
			RootNavigation.goBack();
			yield showQuote();
			yield put(deleteDeviceSuccess(id));
		} catch (err) {
			yield put(deleteDeviceError());
		}
	} else {
		RootNavigation.goBack();
		yield showQuote();
		yield put(deleteDeviceSuccess(id));
	}
}

export function* deviceHasOwner({ payload }: DeleteAction): any {
	const getDevice: Device = yield select(({ devices }: RootState) =>
		devices.devices.find(d => d.id === payload)
	);
	if (getDevice.currentOwner) {
		yield deleteDevice(true, payload);
	} else {
		yield deleteDevice(false, payload);
	}
}

export const sagas = all([
	takeLatest(TYPES.DELETE_DEVICE, deviceHasOwner),
	takeLatest(TYPES.REGISTER_DEVICE, registerDevice),
	takeLatest(TYPES.UPDATE_DEVICE, updateDevice),
	takeEvery(TYPES.REGISTER_MULTIPLE, registerMultiple),
]);
