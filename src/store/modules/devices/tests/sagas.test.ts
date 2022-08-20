import { runSaga } from "redux-saga";
import { call, put } from "redux-saga/effects";

import quoteApi from "../../../../service/quoteApi";
import * as A from "../action";
import * as S from "../sagas";
import { TYPES } from "../types";
import { mockDeviceWithOwner } from "./mocks";

const deviceWithOwner = mockDeviceWithOwner();

describe("Devices sagas", () => {
	it("Should call registerDeviceSuccess action on handle registerDevice", async () => {
		const dispatched: any = [];
		const action = {
			type: TYPES.REGISTER_DEVICE,
			payload: deviceWithOwner,
		};
		await runSaga(
			{
				dispatch: action => dispatched.push(action),
			},
			S.registerDevice,
			action
		).toPromise();

		expect(dispatched[0]).toEqual(A.registerDeviceSuccess(action.payload));
	});

	it("Should call updateDeviceSuccess action on handle updateDevice", async () => {
		const dispatched: any = [];
		const action = {
			type: TYPES.UPDATE_DEVICE,
			payload: deviceWithOwner,
		};
		await runSaga(
			{
				dispatch: action => dispatched.push(action),
			},
			S.updateDevice,
			action
		).toPromise();

		expect(dispatched[0]).toEqual(A.updateDeviceSuccess(action.payload));
	});

	it("Should call registerMultipleSuccess action on handle registerMultiple", async () => {
		const dispatched: any = [];
		const action = {
			type: TYPES.REGISTER_MULTIPLE,
			payload: [deviceWithOwner],
		};
		await runSaga(
			{
				dispatch: action => dispatched.push(action),
			},
			S.registerMultiple,
			action
		).toPromise();

		expect(dispatched[0]).toEqual(A.registerMultipleSuccess(action.payload));
	});

	it("Should show confirmation dialog if device has a owner on deleteDevice", () => {
		const gen = S.deleteDevice(true, "1");
		expect(gen.next().value).toEqual(call(S.confirmationAlert));
	});

	it("Should call deleteSuccess on handle deleteDevice", () => {
		const gen = S.deleteDevice(false, "1");
		gen.next();
		expect(gen.next().value).toEqual(put(A.deleteDeviceSuccess("1")));
	});

	it("Should call quote api correctly", () => {
		const gen = S.showQuote();
		expect(gen.next().value).toEqual(call(quoteApi.get, "/today"));
	});

	it("Should call quoteDialog if quoteApi request returns success", () => {
		const response = { data: [{ q: "Dummy quote" }] };
		const gen = S.showQuote();
		gen.next();
		expect(gen.next(response).value).toEqual(
			call(S.quoteDialog, response.data[0].q)
		);
	});
});
