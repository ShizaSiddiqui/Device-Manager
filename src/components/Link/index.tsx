import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";
import { CommonSizes } from "../../utils/uikit/sizes";

interface ILink extends TouchableOpacityProps {
	label: string;
	onPress: () => void;
}

const Link: React.FC<ILink> = ({ label, ...touchableProps }) => {
	const { Colors } = useTheme();

	return (
		<S.Container testID="linkContainer" {...touchableProps}>
			<S.Span testID="linkLabel">{label}</S.Span>
			<Feather
				name="chevron-right"
				color={Colors.link}
				size={CommonSizes.Smaller}
			/>
		</S.Container>
	);
};

export default Link;
