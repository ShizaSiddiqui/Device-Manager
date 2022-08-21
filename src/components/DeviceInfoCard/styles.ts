import styled from "styled-components/native";
import { conventionalSizes } from "../../utils/res/size";

export const Container = styled.View`
	flex-direction: row;
	align-items: center;

	width: 100%;
	padding: ${conventionalSizes.Bigger}px;
	margin-top: ${conventionalSizes.XSmallest}px;
	margin-bottom: ${conventionalSizes.XSmallest}px;

	background-color: ${props => props.theme.Colors.cardBackground};
	border-radius: ${conventionalSizes.XXSmallest}px;
	border-left-width: ${conventionalSizes.XSmallest}px;
	border-left-color: ${props => props.theme.Colors.border};
`;

export const InfoContainer = styled.View``;

export const Title = styled.Text`
	font-weight: bold;
	font-size: ${conventionalSizes.Medium}px;
	color: ${props => props.theme.Colors.primaryText};
`;
