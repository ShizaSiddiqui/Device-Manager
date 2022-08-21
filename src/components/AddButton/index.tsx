import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as Styles from "./styles";
import { conventionalSizes } from "../../utils/res/size";

import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface addBtn extends TouchableOpacityProps {
	onPress: () => void;
}

const AddButton: React.FC<addBtn> = ({ ...rest }) => {
	const { Colors } = useTheme();

	return (
		<>
			<Styles.Container testID="addBtnContainer" {...rest}>
				<Feather
					name="plus"
					size={conventionalSizes.XLarge}
					color={Colors.buttonText}
				/>
			</Styles.Container>
		</>
	);
};

export default AddButton;
