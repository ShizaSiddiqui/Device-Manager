import { Device } from "./deviceInfoInterface";

interface ThemeStateProps {
	theme: string;
}

interface DevicesStateProps {
	loading: boolean;
	devices: Device[];
}

export interface RootState {
	devices: DevicesStateProps;
	theme: ThemeStateProps;
}
