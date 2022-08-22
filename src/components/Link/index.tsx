import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as Styles from "./styles";
import { conventionalSizes } from "../../utils/res/size";

interface ILink extends TouchableOpacityProps {
	label: string;
	onPress: () => void;
}

const Link: React.FC<ILink> = ({ label, ...touchableProps }) => {
	const { Colors } = useTheme();

	return (
		<Styles.Container testID="showMoreContainer" {...touchableProps}>
			<Styles.Span testID="btnLabel">{label}</Styles.Span>
			<Feather
				name="chevron-right"
				color={Colors.link}
				size={conventionalSizes.Smaller}
			/>
		</Styles.Container>
	);
};

export default Link;
