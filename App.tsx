import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as StoreProvider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import "react-native-get-random-values";
import MainRoutes from "./src/routes/main.routes";
import store from "./src/store";
import { ThemesEnum } from "./src/utils/uikit/themesEnum";
import { Dark } from "./src/utils/uikit/themes/darkTheme";
import { Light } from "./src/utils/uikit/themes/lightTheme";
import { RootState } from "./src/utils/models/RootState";
import { navigationRef } from "./src/utils/RootNavigation";

const AppContent = () => {
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<ThemeProvider theme={theme.theme === ThemesEnum.dark ? Dark : Light}>
			<NavigationContainer ref={navigationRef}>
				<StatusBar style={theme.theme === ThemesEnum.dark ? "light" : "dark"} />
				<MainRoutes />
			</NavigationContainer>
		</ThemeProvider>
	);
};

export default function App() {

	return (
		<StoreProvider store={store}>
			<AppContent />
		</StoreProvider>
	);
}
