import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";
import { CommonSizes } from "../../utils/uikit/sizes";

interface IInput extends TextInputProps {
	iconName: string;
	error?: string;
	label?: string;
	focusCb?: () => void;
}

const Input: React.FC<IInput> = ({
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
			{label && <S.Label testID="inputLabel">{label}</S.Label>}
			<S.Container testID="inputContainer" error={error} isFocused={focused}>
				<Feather
					size={CommonSizes.Big}
					color={Colors.icon}
					name={iconName as any}
				/>
				<S.TextInput
					testID="textField"
					placeholderTextColor={`${Colors.primaryText}80`}
					onFocus={() => {
						if (focusCb) {
							focusCb();
						}
						setFocused(true);
					}}
					onBlur={() => setFocused(false)}
					{...rest}
				/>
			</S.Container>
		</React.Fragment>
	);
};

export default Input;
