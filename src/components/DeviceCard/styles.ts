import styled from "styled-components/native";
import { CommonSizes } from "../../utils/uikit/sizes";

export const Container = styled.View`
	flex-direction: row;
	align-items: center;

	width: 100%;
	padding: ${CommonSizes.Bigger}px;
	margin-top: ${CommonSizes.XSmallest}px;
	margin-bottom: ${CommonSizes.XSmallest}px;

	background-color: ${props => props.theme.Colors.cardBackground};
	border-radius: ${CommonSizes.XXSmallest}px;
	border-left-width: ${CommonSizes.XSmallest}px;
	border-left-color: ${props => props.theme.Colors.border};
`;

export const InfoContainer = styled.View``;

export const Title = styled.Text`
	font-weight: bold;
	font-size: ${CommonSizes.Medium}px;
	color: ${props => props.theme.Colors.primaryText};
`;
