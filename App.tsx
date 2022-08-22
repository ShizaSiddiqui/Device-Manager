import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as StoreProvider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import "react-native-get-random-values";
import MainRoutes from "./src/navigation/main.navigation";
import store from "./src/redux-saga";
import { appThemeValue } from "./src/utils/res/appThemeValue";
import { Dark } from "./src/utils/res/themes/darkTheme";
import { Light } from "./src/utils/res/themes/lightTheme";
import { RootState } from "./src/utils/interface/RootInterface";
import { navigationRef } from "./src/utils/RootNavigation";
import { LogBox } from "react-native";

const AppContent = () => {
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<ThemeProvider theme={theme.theme === appThemeValue.dark ? Dark : Light}>
			<NavigationContainer ref={navigationRef}>
				<StatusBar style={theme.theme === appThemeValue.dark ? "light" : "dark"} />
				<MainRoutes />
			</NavigationContainer>
		</ThemeProvider>
	);
};

export default function App() {
LogBox.ignoreAllLogs();
	return (
		<StoreProvider store={store}>
			<AppContent />
		</StoreProvider>
	);
}
