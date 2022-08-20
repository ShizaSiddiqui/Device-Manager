import { Device } from "./device";

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
