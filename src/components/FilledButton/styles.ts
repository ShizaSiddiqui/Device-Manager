import styled from "styled-components/native";
import { conventionalSizes } from "../../utils/res/size";

export const Container = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;

	width: 100%;
	min-height: 62px;

	padding: ${conventionalSizes.Medium}px;
	margin-top: ${conventionalSizes.XSmallest}px;
	margin-bottom: ${conventionalSizes.Small}px;

	background-color: ${props => props.theme.Colors.buttonBackground};
	border-radius: ${conventionalSizes.Smallest}px;
`;

export const ButtonText = styled.Text`
	color: ${props => props.theme.Colors.buttonText};
	font-weight: bold;
	font-size: ${conventionalSizes.Big}px;
`;
