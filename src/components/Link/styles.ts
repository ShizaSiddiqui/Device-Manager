import styled from "styled-components/native";
import { conventionalSizes } from "../../utils/res/size";

export const Container = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`;

export const Span = styled.Text`
	font-size: ${conventionalSizes.Smaller}px;
	font-weight: bold;
	opacity: 0.8;
	color: ${props => props.theme.Colors.link};
	margin-top: ${conventionalSizes.XXXSmallest}px;
	margin-bottom: ${conventionalSizes.XXXSmallest}px;
`;
