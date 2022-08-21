import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

import * as Styles from "./styles";

interface ActivityLoader {
	loading: boolean;
}

const LoadingOverlayer: React.FC<ActivityLoader> = ({ loading }) => {
	const { Colors } = useTheme();

	return (
		<React.Fragment>
			{loading && (
				<Styles.Container>
					<ActivityIndicator
						testID="activityLoader"
						size="large"
						color={Colors.icon}
					/>
				</Styles.Container>
			)}
		</React.Fragment>
	);
};

export default LoadingOverlayer;
