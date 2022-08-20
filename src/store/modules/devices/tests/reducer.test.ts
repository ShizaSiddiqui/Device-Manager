import { Device } from "../../../../utils/models/device";
import deviceReducer from "../reducer";
import { TYPES } from "../types";
import {
	mockDeviceWithoutOwner,
	mockDeviceWithOwner,
	mockUpdateDeviceInput,
} from "./mocks";

interface IState {
	loading: boolean;
	devices: Device[];
}

const state: IState = {
	loading: false,
	devices: [],
};

const populatedState: IState = {
	loading: false,
	devices: [mockDeviceWithoutOwner()],
};

const device = mockDeviceWithOwner();
const deviceWithoutOwner = mockDeviceWithoutOwner();

describe("Device reducer", () => {
	it("Should return initial state", () => {
		expect(deviceReducer(undefined, undefined)).toEqual(state);
	});

	it("Should set loading to true on REGISTER_DEVICE", () => {
		const action = {
			type: TYPES.REGISTER_DEVICE,
			payload: device,
		};
		const reducerValue = deviceReducer(state, action);

		expect(reducerValue.loading).toEqual(true);
	});

	it("Should register a device on REGISTER_DEVICE_SUCCESS", () => {
		const action = {
			type: TYPES.REGISTER_DEVICE_SUCCESS,
			payload: device,
		};
		const reducerValue = deviceReducer(state, action);

		expect(reducerValue.devices[0]).toEqual(device);
	});

	it("Should set loading to true on REGISTER_MULTIPLE", () => {
		const action = {
			type: TYPES.REGISTER_MULTIPLE,
			payload: [device],
		};
		const reducerValue = deviceReducer(state, action);

		expect(reducerValue.loading).toEqual(true);
	});

	it("Should register multiple devices on REGISTER_DEVICE_SUCCESS", () => {
		const action = {
			type: TYPES.REGISTER_MULTIPLE_SUCCESS,
			payload: [device, deviceWithoutOwner],
		};
		const reducerValue = deviceReducer(state, action);

		expect(reducerValue.devices.length).toBe(2);
	});

	it("Should skip device if already exists on REGISTER_DEVICE_SUCCESS", () => {
		const action = {
			type: TYPES.REGISTER_MULTIPLE_SUCCESS,
			payload: [device, device],
		};
		const reducerValue = deviceReducer(state, action);

		expect(reducerValue.devices.length).toBe(1);
	});

	it("Should set loading to true on UPDATE_DEVICE", () => {
		const action = {
			type: TYPES.UPDATE_DEVICE,
			payload: device,
		};
		const reducerValue = deviceReducer(state, action);

		expect(reducerValue.loading).toEqual(true);
	});

	it("Should update device on UPDATE_DEVICE_SUCCESS", () => {
		const action = {
			type: TYPES.UPDATE_DEVICE_SUCCESS,
			payload: mockUpdateDeviceInput(),
		};
		const reducerValue = deviceReducer(populatedState, action);

		expect(reducerValue.devices[0].model).toEqual("Updated model");
	});

	it("Should set loading to false on DELETE_DEVICE_ERROR", () => {
		const action = {
			type: TYPES.DELETE_DEVICE_ERROR,
			payload: device.id,
		};
		const reducerValue = deviceReducer(state, action);

		expect(reducerValue.loading).toEqual(false);
	});

	it("Should set loading to true on DELETE_DEVICE", () => {
		const action = {
			type: TYPES.DELETE_DEVICE,
			payload: device.id,
		};
		const reducerValue = deviceReducer(state, action);

		expect(reducerValue.loading).toEqual(true);
	});

	it("Should delete device on DELETE_DEVICE_SUCCESS", () => {
		const action = {
			type: TYPES.DELETE_DEVICE_SUCCESS,
			payload: device.id,
		};
		const reducerValue = deviceReducer(state, action);

		expect(reducerValue.devices.length).toEqual(0);
	});
});
