import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

interface IOverlayer {
	visible: boolean;
}

const LoadingOverlayer: React.FC<IOverlayer> = ({ visible }) => {
	const { Colors } = useTheme();

	return (
		<React.Fragment>
			{visible && (
				<S.Container>
					<ActivityIndicator
						testID="overlayerSpinner"
						size="large"
						color={Colors.icon}
					/>
				</S.Container>
			)}
		</React.Fragment>
	);
};

export default LoadingOverlayer;
