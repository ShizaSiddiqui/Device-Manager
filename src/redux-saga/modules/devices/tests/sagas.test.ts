import { runSaga } from "redux-saga";
import { call, put } from "redux-saga/effects";
import quoteApi from "../../../../network/dailyQuoteApi";

import { TYPES } from "../types";
import * as Action from "../action";
import * as Saga from "../sagas";
import { mockDeviceWithOwner } from "./mocks";

const deviceWithOwner = mockDeviceWithOwner();

describe("Test Devices Sagas", () => {
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
			Saga.registerDevice,
			action
		).toPromise();

		expect(dispatched[0]).toEqual(Action.registerDeviceSuccess(action.payload));
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
			Saga.updateDevice,
			action
		).toPromise();

		expect(dispatched[0]).toEqual(Action.updateDeviceSuccess(action.payload));
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
			Saga.registerMultiple,
			action
		).toPromise();

		expect(dispatched[0]).toEqual(
			Action.registerMultipleSuccess(action.payload)
		);
	});

	it("Should show confirmation dialog if device has a owner on deleteDevice", () => {
		const gen = Saga.deleteDevice(true, "1");
		expect(gen.next().value).toEqual(call(Saga.confirmationAlert));
	});

	it("Should call deleteSuccess on handle deleteDevice", () => {
		const gen = Saga.deleteDevice(false, "1");
		gen.next();
		expect(gen.next().value).toEqual(put(Action.deleteDeviceSuccess("1")));
	});

	it("Should call quote api correctly", () => {
		const gen = Saga.showQuote();
		expect(gen.next().value).toEqual(call(quoteApi.get,''));
	});

	it("Should call quoteDialog if quoteApi request returns success", () => {
		const response = { data: [{ q: "Dummy quote" }] };
		const gen = Saga.showQuote();
		gen.next();
		expect(gen.next(response).value).toEqual(
			call(Saga.quoteDialog, response.data[0].q)
		);
	});
});
