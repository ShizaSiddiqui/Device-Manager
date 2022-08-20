import produce from "immer";

import { TYPES } from "./types";
import { Device } from "../../../utils/models/device";

interface IState {
	loading: boolean;
	devices: Device[];
}

interface ActionProps {
	type: string;
	payload?: any;
}

const INITIAL_STATE: IState = {
	loading: false,
	devices: [],
};

export default function deviceReducer(
	state = INITIAL_STATE,
	action: ActionProps | undefined
) {
	switch (action?.type) {
		case TYPES.REGISTER_DEVICE: {
			return produce(state, draft => {
				draft.loading = true;
			});
		}

		case TYPES.REGISTER_DEVICE_SUCCESS: {
			return produce(state, draft => {
				draft.devices.push(action.payload);
				draft.loading = false;
			});
		}

		case TYPES.REGISTER_MULTIPLE: {
			return produce(state, draft => {
				draft.loading = true;
			});
		}

		case TYPES.REGISTER_MULTIPLE_SUCCESS: {
			return produce(state, draft => {
				action.payload.map((device: Device) => {
					const deviceIndex = draft.devices.findIndex(d => d.id === device.id);
					if (!draft.devices[deviceIndex]) {
						draft.devices.push(device);
					}
					draft.loading = false;
				});
			});
		}

		case TYPES.UPDATE_DEVICE: {
			return produce(state, draft => {
				draft.loading = true;
			});
		}

		case TYPES.UPDATE_DEVICE_SUCCESS: {
			return produce(state, draft => {
				const device: Device = action.payload;
				const deviceIndex = draft.devices.findIndex(d => d.id === device.id);
				draft.devices[deviceIndex].model = device.model;
				draft.devices[deviceIndex].notes = device.notes;
				draft.devices[deviceIndex].os = device.os;
				draft.devices[deviceIndex].currentOwner = device.currentOwner;
				draft.loading = false;
			});
		}

		case TYPES.DELETE_DEVICE: {
			return produce(state, draft => {
				draft.loading = true;
			});
		}

		case TYPES.DELETE_DEVICE_ERROR: {
			return produce(state, draft => {
				draft.loading = false;
			});
		}

		case TYPES.DELETE_DEVICE_SUCCESS: {
			return produce(state, draft => {
				const deviceIndex = draft.devices.findIndex(
					d => d.id === action.payload
				);

				if (deviceIndex >= 0) {
					draft.devices.splice(deviceIndex, 1);
				}

				draft.loading = false;
			});
		}

		default:
			return state;
	}
}
