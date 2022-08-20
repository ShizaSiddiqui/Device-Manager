import { Device } from "../../../../../utils/models/device";

export const mockDeviceWithOwner = (): Device => ({
	id: "1",
	model: "Mocked model",
	notes: "Mocker notes",
	os: "Mocker OS",
	currentOwner: "Mocked owner",
});

export const mockDeviceWithoutOwner = (): Device => ({
	id: "2",
	model: "Mocked model",
	notes: "Mocker notes",
	os: "Mocker OS",
});

export const mockUpdateDeviceInput = (): Device => ({
	id: "2",
	model: "Updated model",
	notes: "Mocker notes",
	os: "Mocker OS",
});
