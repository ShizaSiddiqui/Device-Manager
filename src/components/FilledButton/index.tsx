import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface FilledButton extends TouchableOpacityProps {
	text: string;
	onPress: () => void;
}

const FilledButton: React.FC<FilledButton> = ({ text, ...rest }) => (
	<S.Container testID="buttonContainer" {...rest}>
		<S.ButtonText testID="buttonTitle">{text}</S.ButtonText>
	</S.Container>
);

export default FilledButton;
