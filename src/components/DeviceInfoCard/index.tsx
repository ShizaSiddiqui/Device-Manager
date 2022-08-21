import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Styles from "./styles";
import { useTheme } from "styled-components/native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Device } from "../../utils/interface/deviceInfoInterface";
import { conventionalSizes } from "../../utils/res/size";
import Link from "../Link";

interface CardProps {
	device: Device;
}

const DeviceInfoCard: React.FC<CardProps> = ({ device }) => {
	const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
	const { Colors } = useTheme();

	return (
		<Styles.Container>
			<TouchableOpacity>
				<Feather
					style={{ marginRight: conventionalSizes.Small }}
					name="smartphone"
					color={Colors.icon}
					size={32}
				/>
			</TouchableOpacity>
			<Styles.InfoContainer>
				<Styles.Title>{device.model}</Styles.Title>
				<Link
					label="See more"
					onPress={() =>
						navigation.navigate("DeviceInfo", { edit: true, device })
					}
				/>
			</Styles.InfoContainer>

			<View style={{ flexDirection: "row", position: "absolute", right: 30 }}>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("DeviceInfo", { edit: true, device })
					}
				>
					<AntDesign
						style={{ marginRight: wp(2) }}
						name="delete"
						color={Colors.icon}
						size={30}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() =>
						navigation.navigate("DeviceInfo", { edit: true, device })
					}
				>
					<AntDesign name="edit" color={Colors.icon} size={30} />
				</TouchableOpacity>
			</View>
		</Styles.Container>
	);
};

export default DeviceInfoCard;
