import styled from "styled-components/native";
import { CommonSizes } from "../../utils/uikit/sizes";

export const Container = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;

	width: 100%;
	min-height: 62px;

	padding: ${CommonSizes.Medium}px;
	margin-top: ${CommonSizes.XSmallest}px;
	margin-bottom: ${CommonSizes.Small}px;

	border-width: 2px;
	border-color: ${props => props.theme.Colors.border};
	border-radius: ${CommonSizes.Smallest}px;
`;

export const ButtonText = styled.Text`
	color: ${props => props.theme.Colors.border};
	font-weight: bold;
	font-size: ${CommonSizes.Big}px;
`;
