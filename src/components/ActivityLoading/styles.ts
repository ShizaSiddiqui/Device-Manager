import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styled from "styled-components/native";
import { Colors } from "../../utils/res/color";

export const Container = styled.View`
	height: ${hp(100)};
	width: ${wp(100)};

	background-color: ${Colors.black};
	opacity: 0.8;

	position: absolute;
	align-items: center;
	justify-content: center;

	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;
