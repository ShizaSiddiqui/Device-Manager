import styled from "styled-components/native";
import { conventionalSizes } from "../../utils/res/size";

export const Container = styled.TouchableOpacity`
	position: absolute;
	bottom: ${conventionalSizes.XXXLarge}px;
	right: ${conventionalSizes.XXXLarge}px;
	padding: ${conventionalSizes.Small}px;

	min-width: ${conventionalSizes.XXXLarge}px;
	min-height: ${conventionalSizes.XXXLarge}px;
	border-radius: ${conventionalSizes.XXXLarge}px;

	align-items: center;
	justify-content: center;

	background-color: ${props => props.theme.Colors.buttonBackground};
`;
