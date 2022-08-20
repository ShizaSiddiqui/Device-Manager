import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import * as S from "./styles";
import { CommonSizes } from "../../utils/uikit/sizes";

interface IFab extends TouchableOpacityProps {
	onPress: () => void;
}

const FabButton: React.FC<IFab> = ({ ...rest }) => {
	const { Colors } = useTheme();

	return (
		<>
			<S.Container testID="fabContainer" {...rest}>
				<Feather
					name="plus"
					size={CommonSizes.XLarge}
					color={Colors.buttonText}
				/>
			</S.Container>
		</>
	);
};

export default FabButton;
