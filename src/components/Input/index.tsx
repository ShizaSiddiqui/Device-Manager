import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as Styles from "./styles";
import { conventionalSizes } from "../../utils/res/size";

interface FormInputLayout extends TextInputProps {
	iconName: string;
	error?: string;
	label?: string;
	focusCb?: () => void;
}

const Input: React.FC<FormInputLayout> = ({
	iconName,
	focusCb,
	label,
	error,
	...rest
}) => {
	const [focused, setFocused] = useState(false);
	const { Colors } = useTheme();

	return (
		<React.Fragment>
			{label && <Styles.Label testID="inputLabel">{label}</Styles.Label>}
			<Styles.Container testID="inputContainer" error={error} isFocused={focused}>
				<Feather
					size={conventionalSizes.Big}
					color={Colors.icon}
					name={iconName as any}
				/>
				<Styles.TextInput
					testID="textField"
					placeholderTextColor={`${Colors.placeholder}`}
					onFocus={() => {
						if (focusCb) {
							focusCb();
						}
						setFocused(true);
					}}
					onBlur={() => setFocused(false)}
					{...rest}
				/>
			</Styles.Container>
		</React.Fragment>
	);
};

export default Input;
