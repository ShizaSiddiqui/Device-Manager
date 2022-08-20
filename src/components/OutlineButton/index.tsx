import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface IButton extends TouchableOpacityProps {
	text: string;
	onPress: () => void;
}

const OutlineButton: React.FC<IButton> = ({ text, ...rest }) => (
	<S.Container testID="buttonContainer" {...rest}>
		<S.ButtonText testID="buttonTitle">{text}</S.ButtonText>
	</S.Container>
);

export default OutlineButton;
