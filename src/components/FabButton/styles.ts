import styled from "styled-components/native";
import { CommonSizes } from "../../utils/uikit/sizes";

export const Container = styled.TouchableOpacity`
	position: absolute;
	bottom: ${CommonSizes.XXXLarge}px;
	right: ${CommonSizes.XXXLarge}px;
	padding: ${CommonSizes.Small}px;

	min-width: ${CommonSizes.XXXLarge}px;
	min-height: ${CommonSizes.XXXLarge}px;
	border-radius: ${CommonSizes.XXXLarge}px;

	align-items: center;
	justify-content: center;

	background-color: ${props => props.theme.Colors.buttonBackground};
`;
