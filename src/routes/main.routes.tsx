import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import DeviceInfo from "../pages/DeviceInfo";
import Home from "../pages/Home";

const MainStack = createNativeStackNavigator();

const MainRoutes: React.FC = () => (
	<MainStack.Navigator
		screenOptions={{ headerShown: false }}
		initialRouteName="Home"
	>
		<MainStack.Screen component={Home} name="Home" />
		<MainStack.Screen component={DeviceInfo} name="DeviceInfo" />
	</MainStack.Navigator>
);

export default MainRoutes;
