import { Device } from "../../../utils/models/device";
import { TYPES } from "./types";

export function registerDevice(payload: Device) {
	return {
		type: TYPES.REGISTER_DEVICE,
		payload,
	};
}

export function registerDeviceSuccess(payload: Device) {
	return {
		type: TYPES.REGISTER_DEVICE_SUCCESS,
		payload,
	};
}

export function registerMultiple(payload: Device[]) {
	return {
		type: TYPES.REGISTER_MULTIPLE,
		payload,
	};
}

export function registerMultipleSuccess(payload: Device[]) {
	return {
		type: TYPES.REGISTER_MULTIPLE_SUCCESS,
		payload,
	};
}

export function updateDevice(payload: Device) {
	return {
		type: TYPES.UPDATE_DEVICE,
		payload,
	};
}

export function updateDeviceSuccess(payload: Device) {
	return {
		type: TYPES.UPDATE_DEVICE_SUCCESS,
		payload,
	};
}

export function deleteDevice(id: string) {
	return {
		type: TYPES.DELETE_DEVICE,
		payload: id,
	};
}

export function deleteDeviceError() {
	return {
		type: TYPES.DELETE_DEVICE_ERROR,
	};
}

export function deleteDeviceSuccess(id: string) {
	return {
		type: TYPES.DELETE_DEVICE_SUCCESS,
		payload: id,
	};
}
