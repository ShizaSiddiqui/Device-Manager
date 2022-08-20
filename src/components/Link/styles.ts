import styled from "styled-components/native";
import { CommonSizes } from "../../utils/uikit/sizes";

export const Container = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`;

export const Span = styled.Text`
	font-size: ${CommonSizes.Smaller}px;
	font-weight: bold;
	opacity: 0.8;
	color: ${props => props.theme.Colors.link};
	margin-top: ${CommonSizes.XXXSmallest}px;
	margin-bottom: ${CommonSizes.XXXSmallest}px;
`;
