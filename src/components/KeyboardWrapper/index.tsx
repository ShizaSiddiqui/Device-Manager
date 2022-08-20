import React from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
} from "react-native";

const KeyboardWrapper: React.FC = ({ children }) => (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible>
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : undefined}
			style={{ flex: 1 }}
		>
			{children}
		</KeyboardAvoidingView>
	</TouchableWithoutFeedback>
);

export default KeyboardWrapper;
