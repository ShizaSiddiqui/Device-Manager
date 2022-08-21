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

	border-width: 2px;
	border-color: ${props => props.theme.Colors.border};
	border-radius: ${conventionalSizes.Smallest}px;
`;

export const ButtonText = styled.Text`
	color: ${props => props.theme.Colors.border};
	font-weight: bold;
	font-size: ${conventionalSizes.Big}px;
`;
