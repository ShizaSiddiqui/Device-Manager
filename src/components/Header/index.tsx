import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Feather , Foundation} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import * as Styles from "./styles";
import { conventionalSizes } from "../../utils/res/size";
import { toggleTheme } from "../../redux-saga/modules/theme/action";

interface HeaderContainer {
	title: string;
	goBack?: boolean;
	darkMode?: boolean;
}

const Header: React.FC<HeaderContainer> = ({ title, goBack, darkMode }) => {
	const { Colors } = useTheme();
	const navigation = useNavigation();
	const dispatcher = useDispatch();

	return (
		<React.Fragment>
			<Styles.StatusBarContainer />
			<Styles.Container>
				{goBack ? (
					<TouchableOpacity
						testID="goBackBtn"
						onPress={() => navigation.goBack()}
					>
						<Feather
							name="chevron-left"
							color={Colors.icon}
							size={conventionalSizes.Biggest}
						/>
					</TouchableOpacity>
				) : (
					<Styles.Empty />
				)}
				<View>
					<Styles.Title testID="headerTitle">{title}</Styles.Title>
				</View>
				{darkMode ? (
					<TouchableOpacity
						testID="toggleBtn"
						onPress={() => dispatcher(toggleTheme())}
					>
						<Foundation
							name="lightbulb"
							color={Colors.icon}
							size={conventionalSizes.Biggest}
						/>
					</TouchableOpacity>
				) : (
					<Styles.Empty />
				)}
			</Styles.Container>
		</React.Fragment>
	);
};

export default Header;
