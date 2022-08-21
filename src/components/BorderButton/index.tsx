import React from "react";
import * as Styles from "./styles";
import { TouchableOpacityProps } from "react-native";

interface BorderButton extends TouchableOpacityProps {
	text: string;
	onPress: () => void;
}

const BorderButton: React.FC<BorderButton> = ({ text, ...rest }) => (
	<Styles.Container testID="buttonContainer" {...rest}>
		<Styles.ButtonText testID="buttonTitle">{text}</Styles.ButtonText>
	</Styles.Container>
);

export default BorderButton;
