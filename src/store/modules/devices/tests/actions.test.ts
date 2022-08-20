import { v4 as UUID } from "uuid";
import * as A from "../action";
import { TYPES } from "../types";
import { mockDeviceWithoutOwner, mockDeviceWithOwner } from "./mocks";

const device = mockDeviceWithOwner();
const deviceWithoutOwner = mockDeviceWithoutOwner();

describe("Device actions", () => {
	it("Should test registerDevice action", () => {
		const actionReturnValues = A.registerDevice(device);

		expect(actionReturnValues.type).toEqual(TYPES.REGISTER_DEVICE);
		expect(actionReturnValues.payload).toEqual(device);
	});

	it("Should test registerDeviceSuccess action", () => {
		const actionReturnValues = A.registerDeviceSuccess(device);

		expect(actionReturnValues.type).toEqual(TYPES.REGISTER_DEVICE_SUCCESS);
		expect(actionReturnValues.payload).toEqual(device);
	});

	it("Should test registerMultiple action", () => {
		const actionReturnValues = A.registerMultiple([device, deviceWithoutOwner]);

		expect(actionReturnValues.type).toEqual(TYPES.REGISTER_MULTIPLE);
		expect(actionReturnValues.payload).toEqual([device, deviceWithoutOwner]);
	});

	it("Should test registerMultipleSuccess action", () => {
		const actionReturnValues = A.registerMultipleSuccess([
			device,
			deviceWithoutOwner,
		]);

		expect(actionReturnValues.type).toEqual(TYPES.REGISTER_MULTIPLE_SUCCESS);
		expect(actionReturnValues.payload).toEqual([device, deviceWithoutOwner]);
	});

	it("Should test updateDevice action", () => {
		const actionReturnValues = A.updateDevice(device);
		expect(actionReturnValues.type).toEqual(TYPES.UPDATE_DEVICE);
		expect(actionReturnValues.payload).toEqual(device);
	});

	it("Should test updateDeviceSuccess action", () => {
		const actionReturnValues = A.updateDeviceSuccess(device);
		expect(actionReturnValues.type).toEqual(TYPES.UPDATE_DEVICE_SUCCESS);
		expect(actionReturnValues.payload).toEqual(device);
	});

	it("Should test deleteDevice action", () => {
		const randomUUID = UUID();
		const actionReturnValues = A.deleteDevice(randomUUID);
		expect(actionReturnValues.type).toEqual(TYPES.DELETE_DEVICE);
		expect(actionReturnValues.payload).toEqual(randomUUID);
	});

	it("Should test deleteDeviceSuccess action", () => {
		const randomUUID = UUID();
		const actionReturnValues = A.deleteDeviceSuccess(randomUUID);
		expect(actionReturnValues.type).toEqual(TYPES.DELETE_DEVICE_SUCCESS);
		expect(actionReturnValues.payload).toEqual(randomUUID);
	});
});
