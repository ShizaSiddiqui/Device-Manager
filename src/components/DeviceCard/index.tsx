import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import * as S from "./styles";
import { Device } from "../../utils/models/device";
import { CommonSizes } from "../../utils/uikit/sizes";
import Link from "../Link";

interface CardProps {
	device: Device;
}

const DeviceCard: React.FC<CardProps> = ({ device }) => {
	const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
	const { Colors } = useTheme();

	return (
		<S.Container>
			<TouchableOpacity>
				<Feather
					style={{ marginRight: CommonSizes.Small }}
					name="smartphone"
					color={Colors.icon}
					size={32}
				/>
			</TouchableOpacity>
			<S.InfoContainer>
				<S.Title>{device.model}</S.Title>
				<Link
					label="See more"
					onPress={() =>
						navigation.navigate("DeviceInfo", { edit: true, device })
					}
				/>
			</S.InfoContainer>
		</S.Container>
	);
};

export default DeviceCard;
