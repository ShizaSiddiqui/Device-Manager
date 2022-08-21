import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import DeviceListing from "../screens/DeviceListing";
import DeviceInfo from "../screens/DeviceInfo";

const MainStack = createNativeStackNavigator();

const MainRoutes: React.FC = () => (
	<MainStack.Navigator
		screenOptions={{ headerShown: false }}
		initialRouteName="DeviceListing"
	>
		<MainStack.Screen component={DeviceListing} name="DeviceListing" />
		<MainStack.Screen component={DeviceInfo} name="DeviceInfo" />
	</MainStack.Navigator>
);

export default MainRoutes;
