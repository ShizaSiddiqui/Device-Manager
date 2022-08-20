import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { CommonSizes } from "../../utils/uikit/sizes";
import { toggleTheme } from "../../store/modules/theme/action";

interface IHeader {
	title: string;
	goBack?: boolean;
	settings?: boolean;
}

const Header: React.FC<IHeader> = ({ title, goBack, settings }) => {
	const { Colors } = useTheme();
	const navigation = useNavigation();
	const dispatcher = useDispatch();

	return (
		<React.Fragment>
			<S.StatusBarContainer />
			<S.Container>
				{goBack ? (
					<TouchableOpacity
						testID="goBackBtn"
						onPress={() => navigation.goBack()}
					>
						<Feather
							name="chevron-left"
							color={Colors.icon}
							size={CommonSizes.Biggest}
						/>
					</TouchableOpacity>
				) : (
					<S.Empty />
				)}
				<View>
					<S.Title testID="headerTitle">{title}</S.Title>
				</View>
				{settings ? (
					<TouchableOpacity
						testID="toggleBtn"
						onPress={() => dispatcher(toggleTheme())}
					>
						<Feather
							name="settings"
							color={Colors.icon}
							size={CommonSizes.Biggest}
						/>
					</TouchableOpacity>
				) : (
					<S.Empty />
				)}
			</S.Container>
		</React.Fragment>
	);
};

export default Header;
